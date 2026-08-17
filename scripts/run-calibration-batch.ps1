[CmdletBinding()]
param(
    [int[]]$Levels = @(5, 10),
    [string]$BaseUrl = "http://localhost:3000"
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$backendDir = Join-Path $repoRoot "backend"
$runner = Join-Path $PSScriptRoot "run-jmeter.ps1"
$seedScript = Join-Path $PSScriptRoot "seed-performance-data.js"
$plan = "performance/load/23127280_Load_20260815.jmx"
$node = (Get-Command node -ErrorAction Stop).Source
$backendProcess = $null
$monitorJob = $null

function Stop-OwnedBackend {
    if ($null -ne $script:backendProcess -and -not $script:backendProcess.HasExited) {
        Stop-Process -Id $script:backendProcess.Id -Force
        $script:backendProcess.WaitForExit()
    }
    $script:backendProcess = $null
}

function Start-OwnedBackend([string]$runId) {
    $logDir = Join-Path $repoRoot "performance\results\$runId"
    New-Item -ItemType Directory -Force -Path $logDir | Out-Null
    $stdout = Join-Path $logDir "backend.stdout.log"
    $stderr = Join-Path $logDir "backend.stderr.log"
    $script:backendProcess = Start-Process -FilePath $node `
        -ArgumentList "server.js" `
        -WorkingDirectory $backendDir `
        -RedirectStandardOutput $stdout `
        -RedirectStandardError $stderr `
        -WindowStyle Hidden `
        -PassThru

    $ready = $false
    for ($attempt = 1; $attempt -le 30; $attempt++) {
        Start-Sleep -Seconds 1
        if ($script:backendProcess.HasExited) {
            throw "Backend exited before readiness; inspect $stderr"
        }
        try {
            $products = Invoke-RestMethod -Method Get -Uri "$BaseUrl/api/products" -TimeoutSec 2
            if ($null -ne $products -and $products.Count -gt 0) {
                $ready = $true
                break
            }
        } catch {
            # Retry until the bounded readiness deadline.
        }
    }
    if (-not $ready) { throw "Backend was not ready within 30 seconds" }
}

function Start-ResourceMonitor([string]$outputPath) {
    return Start-Job -ScriptBlock {
        param($path)
        $counterPaths = @(
            "\Processor(_Total)\% Processor Time",
            "\Memory\% Committed Bytes In Use"
        )
        Get-Counter -Counter $counterPaths -SampleInterval 1 -MaxSamples 80 | ForEach-Object {
            [pscustomobject]@{
                timestamp = $_.Timestamp.ToString("o")
                cpu_percent = [math]::Round($_.CounterSamples[0].CookedValue, 2)
                committed_memory_percent = [math]::Round($_.CounterSamples[1].CookedValue, 2)
            }
        } | Export-Csv -LiteralPath $path -NoTypeInformation -Encoding UTF8
    } -ArgumentList $outputPath
}

try {
    try {
        $existing = Invoke-RestMethod -Method Get -Uri "$BaseUrl/api/products" -TimeoutSec 2
        if ($null -ne $existing) {
            throw "Port 3000 is already serving the backend. Stop it before batch calibration."
        }
    } catch {
        if ($_.Exception.Message -like "Port 3000 is already serving*") { throw }
    }

    foreach ($level in $Levels) {
        $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
        $runId = "23127280_Calibration_${level}VU_Batch_$timestamp"
        $resetId = "23127280-calibration-${level}vu-batch-$timestamp"
        $evidenceDir = Join-Path $repoRoot "docs\evidence\calibration\$runId"
        $counterCsv = Join-Path $evidenceDir "resource-counters.csv"
        New-Item -ItemType Directory -Force -Path $evidenceDir | Out-Null

        Write-Host "BATCH START: $runId"
        Start-OwnedBackend -runId $runId
        & $node $seedScript "--users=10" "--max-uses=20" "--reset-id=$resetId"
        if ($LASTEXITCODE -ne 0) { throw "Seed failed for $runId" }
        Copy-Item -LiteralPath (Join-Path $repoRoot "performance\data\last-reset.json") `
            -Destination (Join-Path $repoRoot "performance\results\$runId\reset-snapshot.json")

        $script:monitorJob = Start-ResourceMonitor -outputPath $counterCsv
        & $runner `
            -Plan $plan `
            -RunId $runId `
            -Threads $level `
            -RampSeconds 10 `
            -HoldSeconds 60
        if ($LASTEXITCODE -ne 0) { throw "JMeter runner failed for $runId" }

        Wait-Job -Job $script:monitorJob | Out-Null
        Receive-Job -Job $script:monitorJob | Out-Null
        Remove-Job -Job $script:monitorJob
        $script:monitorJob = $null

        $resourceRows = Import-Csv -LiteralPath $counterCsv
        $baseline = $resourceRows[0]
        $peakCpu = ($resourceRows | Measure-Object -Property cpu_percent -Maximum).Maximum
        $peakMemory = ($resourceRows | Measure-Object -Property committed_memory_percent -Maximum).Maximum
        Write-Host "RESOURCE: baseline CPU $($baseline.cpu_percent)% RAM $($baseline.committed_memory_percent)%"
        Write-Host "RESOURCE: peak CPU $peakCpu% RAM $peakMemory%"
        Write-Host "BATCH COMPLETE: $runId"

        Stop-OwnedBackend
    }
} finally {
    if ($null -ne $script:monitorJob) {
        Stop-Job -Job $script:monitorJob -ErrorAction SilentlyContinue
        Remove-Job -Job $script:monitorJob -Force -ErrorAction SilentlyContinue
    }
    Stop-OwnedBackend
}

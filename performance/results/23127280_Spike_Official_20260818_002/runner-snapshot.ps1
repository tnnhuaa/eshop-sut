[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)][string]$RunId,
    [Parameter(Mandatory = $true)][string]$ResetId,
    [Parameter(Mandatory = $true)][int]$CalibratedL,
    [string]$BaseUrl = "http://localhost:3000"
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$runner = Join-Path $PSScriptRoot "run-jmeter.ps1"
$preflight = Join-Path $PSScriptRoot "preflight.ps1"
$seedScript = Join-Path $PSScriptRoot "seed-performance-data.js"
$plan = "performance/spike/23127280_Spike_20260815.jmx"
$node = (Get-Command node -ErrorAction Stop).Source
$resultDir = Join-Path $repoRoot "performance\results\$RunId"
$reportDir = Join-Path $repoRoot "performance\reports\$RunId"
$evidenceDir = Join-Path $repoRoot "docs\evidence\spike\$RunId"
$counterCsv = Join-Path $evidenceDir "resource-counters.csv"
$monitorJob = $null

if ($RunId -ne "23127280_Spike_Official_20260818_002") {
    throw "RunId does not match the prepared official Spike rerun"
}
if ($CalibratedL -ne 10) { throw "Official Spike requires the accepted calibrated L=10" }
if (Test-Path -LiteralPath (Join-Path $resultDir "$RunId.jtl")) {
    throw "Refusing to overwrite existing official JTL"
}
if (Test-Path -LiteralPath $reportDir) {
    if ((Get-ChildItem -LiteralPath $reportDir -Force | Measure-Object).Count -gt 0) {
        throw "Refusing to overwrite non-empty official report directory"
    }
}

$products = Invoke-RestMethod -Method Get -Uri "$BaseUrl/api/products" -TimeoutSec 5
if ($null -eq $products -or $products.Count -lt 1) { throw "Backend is not ready" }

New-Item -ItemType Directory -Force -Path $resultDir, $evidenceDir | Out-Null

Write-Host "OFFICIAL SPIKE APPROVAL: $RunId"
Write-Host "RESET AND SEED: $ResetId"
& $node $seedScript "--users=20" "--max-uses=1000" "--reset-id=$ResetId"
if ($LASTEXITCODE -ne 0) { throw "Official Spike seed failed" }
Copy-Item -LiteralPath (Join-Path $repoRoot "performance\data\last-reset.json") `
    -Destination (Join-Path $resultDir "reset-snapshot.json")

$beforePreflight = @(
    Get-ChildItem -LiteralPath (Join-Path $repoRoot "performance\results") -Directory -Filter "23127280_Preflight_*" |
        Select-Object -ExpandProperty Name
)

Write-Host "PREFLIGHT GATE: starting 1 VU x 1 iteration"
& $preflight -BaseUrl $BaseUrl

$newPreflight = Get-ChildItem -LiteralPath (Join-Path $repoRoot "performance\results") `
    -Directory `
    -Filter "23127280_Preflight_*" |
    Where-Object { $_.Name -notin $beforePreflight } |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
if ($null -eq $newPreflight) { throw "Preflight did not create a new result directory" }

$preflightJtl = Join-Path $newPreflight.FullName "$($newPreflight.Name).jtl"
$preflightRows = @(Import-Csv -LiteralPath $preflightJtl)
$failedPreflightRows = @($preflightRows | Where-Object { $_.success -ne "true" })
$preflightLabels = @($preflightRows | Select-Object -ExpandProperty label -Unique)
if ($preflightRows.Count -ne 9 -or $failedPreflightRows.Count -ne 0 -or $preflightLabels.Count -ne 9) {
    throw "PREFLIGHT FAILED: expected 9 unique successful samples; official Spike was not started"
}
Write-Host "PREFLIGHT PASSED: 9/9 successful samples in $($newPreflight.Name)"

$monitorJob = Start-Job -ScriptBlock {
    param($path)
    $totalPhysicalMb = (Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory / 1MB
    $counterPaths = @(
        "\Processor(_Total)\% Processor Time",
        "\Memory\Available MBytes"
    )
    Get-Counter -Counter $counterPaths -SampleInterval 1 -MaxSamples 330 | ForEach-Object {
        $cpu = $_.CounterSamples[0].CookedValue
        $availableMb = $_.CounterSamples[1].CookedValue
        [pscustomobject]@{
            timestamp = $_.Timestamp.ToString("o")
            cpu_percent = [math]::Round($cpu, 2)
            physical_ram_used_percent = [math]::Round((($totalPhysicalMb - $availableMb) / $totalPhysicalMb) * 100, 2)
            physical_ram_used_mb = [math]::Round($totalPhysicalMb - $availableMb, 0)
        }
    } | Export-Csv -LiteralPath $path -NoTypeInformation -Encoding UTF8
} -ArgumentList $counterCsv

try {
    Write-Host "OFFICIAL SPIKE START: 2 VU baseline 60s; ramp to 20 VU in 10s; hold 60s; ramp down 10s; recover at 2 VU for 120s"
    & $runner `
        -Plan $plan `
        -RunId $RunId `
        -Threads 2 `
        -CalibratedL $CalibratedL `
        -RampSeconds 10 `
        -HoldSeconds 60 `
        -ThinkMinMs 250 `
        -ThinkMaxMs 750
} finally {
    if ($null -ne $monitorJob) {
        $completedJob = Wait-Job -Job $monitorJob -Timeout 30
        if ($null -eq $completedJob) { Stop-Job -Job $monitorJob }
        Receive-Job -Job $monitorJob | Out-Null
        Remove-Job -Job $monitorJob -Force
    }
}

$officialJtl = Join-Path $resultDir "$RunId.jtl"
$rows = @(Import-Csv -LiteralPath $officialJtl)
$failures = @($rows | Where-Object { $_.success -ne "true" })
$resources = @(Import-Csv -LiteralPath $counterCsv)
$peakCpu = ($resources | Measure-Object -Property cpu_percent -Maximum).Maximum
$peakRam = ($resources | Measure-Object -Property physical_ram_used_percent -Maximum).Maximum

Write-Host "OFFICIAL SPIKE FINISHED AS RUN_UNVERIFIED"
Write-Host "SAMPLES: $($rows.Count)"
Write-Host "FAILURES: $($failures.Count)"
Write-Host "LOGGED PEAK CPU: $peakCpu%"
Write-Host "LOGGED PEAK PHYSICAL RAM: $peakRam%"
Write-Host "JTL: $officialJtl"
Write-Host "HTML: $reportDir"
Write-Host "RESOURCE CSV: $counterCsv"

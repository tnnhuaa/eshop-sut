[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)][string]$Plan,
    [Parameter(Mandatory = $true)][string]$RunId,
    [string]$JMeterHome = "$env:USERPROFILE\Tools\apache-jmeter-5.6.3",
    [string]$JavaHome = "$env:USERPROFILE\Tools\temurin-17",
    [string]$BaseUrl = "http://localhost:3000",
    [string]$UsersCsv = "performance\data\users.csv",
    [Parameter(Mandatory = $true)][int]$Threads,
    [Parameter(Mandatory = $true)][int]$RampSeconds,
    [Parameter(Mandatory = $true)][int]$HoldSeconds,
    [int]$Loops = -1,
    [int]$CalibratedL = 0,
    [int]$SoakMinutes = 0,
    [int]$ThinkMinMs = 500,
    [int]$ThinkMaxMs = 1500
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$jmeter = Join-Path $JMeterHome "bin\jmeter.bat"
$java = Join-Path $JavaHome "bin\java.exe"
$planPath = [IO.Path]::GetFullPath((Join-Path $repoRoot $Plan))
$csvPath = [IO.Path]::GetFullPath((Join-Path $repoRoot $UsersCsv))
$resultDir = Join-Path $repoRoot "performance\results\$RunId"
$reportDir = Join-Path $repoRoot "performance\reports\$RunId"
$jtlPath = Join-Path $resultDir "$RunId.jtl"
$scenarioName = [IO.Path]::GetFileNameWithoutExtension($planPath)

if (-not (Test-Path -LiteralPath $jmeter)) { throw "JMeter not found: $jmeter" }
if (-not (Test-Path -LiteralPath $java)) { throw "JDK 17 not found: $java" }
if (-not (Test-Path -LiteralPath $planPath)) { throw "Plan not found: $planPath" }
if (-not (Test-Path -LiteralPath $csvPath)) { throw "CSV not found: $csvPath" }
if ($ThinkMinMs -lt 0 -or $ThinkMaxMs -lt $ThinkMinMs) { throw "Invalid think-time range" }
if (Test-Path -LiteralPath $jtlPath) { throw "Refusing to overwrite existing JTL: $jtlPath" }
if (Test-Path -LiteralPath $reportDir) {
    if ((Get-ChildItem -LiteralPath $reportDir -Force | Measure-Object).Count -gt 0) {
        throw "Report directory is not empty: $reportDir"
    }
} else {
    New-Item -ItemType Directory -Path $reportDir | Out-Null
}
New-Item -ItemType Directory -Force -Path $resultDir | Out-Null

$arguments = @(
    "-n", "-t", $planPath,
    "-Jbase_url=$BaseUrl",
    "-Jusers_csv=$csvPath",
    "-Jthreads=$Threads",
    "-Jramp_seconds=$RampSeconds",
    "-Jhold_seconds=$HoldSeconds",
    "-Jloops=$Loops",
    "-Jthink_min_ms=$ThinkMinMs",
    "-Jthink_max_ms=$ThinkMaxMs",
    "-Jrun_id=$RunId",
    "-Jresult_path=$jtlPath",
    "-Jreport_path=$reportDir",
    "-l", $jtlPath,
    "-e", "-o", $reportDir
)

$requiredCsvRows = $Threads
if ($scenarioName -match '_Stress_') {
    if ($CalibratedL -lt 1) { throw "Stress requires -CalibratedL from accepted calibration evidence" }
    $requiredCsvRows = 3 * $CalibratedL
    $arguments += "-JL=$CalibratedL"
}
if ($scenarioName -match '_Spike_') {
    if ($CalibratedL -lt 1) { throw "Spike requires -CalibratedL from accepted calibration evidence" }
    $requiredCsvRows = [Math]::Ceiling(2 * $CalibratedL)
    $arguments += "-JL=$CalibratedL"
}
if ($scenarioName -match '_Soak_') {
    if ($CalibratedL -lt 1) { throw "Soak requires -CalibratedL from accepted calibration evidence" }
    if ($SoakMinutes -lt 10 -or $SoakMinutes -gt 15) { throw "Soak requires -SoakMinutes from 10 through 15" }
    $requiredCsvRows = [Math]::Max(1, [Math]::Floor(0.7 * $CalibratedL))
    $arguments += "-Jstable_load_l=$CalibratedL"
    $arguments += "-Jsoak_minutes=$SoakMinutes"
}
if ((Get-Content -LiteralPath $csvPath).Count -lt ($requiredCsvRows + 1)) {
    throw "CSV needs at least $requiredCsvRows data rows for $scenarioName"
}

Write-Host "Run ID: $RunId"
Write-Host "JMeter Java: $java"
Write-Host "Plan: $planPath"
Write-Host "JTL: $jtlPath"
Write-Host "HTML: $reportDir"
$previousJavaHome = $env:JAVA_HOME
$previousPath = $env:Path
try {
    $env:JAVA_HOME = $JavaHome
    $env:Path = "$(Join-Path $JavaHome 'bin');$previousPath"
    & $jmeter @arguments
    $jmeterExitCode = $LASTEXITCODE
} finally {
    if ($null -eq $previousJavaHome) {
        Remove-Item Env:JAVA_HOME -ErrorAction SilentlyContinue
    } else {
        $env:JAVA_HOME = $previousJavaHome
    }
    $env:Path = $previousPath
}
if ($jmeterExitCode -ne 0) { throw "JMeter exited with code $jmeterExitCode" }
if (-not (Test-Path -LiteralPath $jtlPath) -or (Get-Item -LiteralPath $jtlPath).Length -eq 0) {
    throw "JMeter finished without a non-empty JTL"
}
Write-Host "RUN_UNVERIFIED: inspect the JTL, HTML report, and resource evidence before acceptance."

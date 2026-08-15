[CmdletBinding()]
param(
    [string]$JMeterHome = "$env:USERPROFILE\Tools\apache-jmeter-5.6.3",
    [string]$JavaHome = "$env:USERPROFILE\Tools\temurin-17",
    [string]$BaseUrl = "http://localhost:3000",
    [string]$UsersCsv = "performance\data\users.csv",
    [string]$Plan = "performance\load\23127280_Load_20260815.jmx"
)

$ErrorActionPreference = "Stop"
$runId = "23127280_Preflight_$(Get-Date -Format yyyyMMdd_HHmmss)"

$health = Invoke-RestMethod -Method Get -Uri "$BaseUrl/api/products" -TimeoutSec 5
if ($null -eq $health -or $health.Count -lt 1) { throw "Backend product endpoint is not ready" }

& (Join-Path $PSScriptRoot "run-jmeter.ps1") `
    -Plan $Plan `
    -RunId $runId `
    -JMeterHome $JMeterHome `
    -JavaHome $JavaHome `
    -BaseUrl $BaseUrl `
    -UsersCsv $UsersCsv `
    -Threads 1 `
    -RampSeconds 1 `
    -HoldSeconds 5 `
    -Loops 1 `
    -ThinkMinMs 0 `
    -ThinkMaxMs 0

Write-Host "Preflight completed as RUN_UNVERIFIED. Student must inspect all nine business requests."

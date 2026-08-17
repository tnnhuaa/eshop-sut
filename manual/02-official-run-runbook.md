# Official Run Runbook

Evidence state before execution: `NOT_RUN`

## A. Start and reset

1. Open PowerShell in the HW05 worktree and run `cd backend`, then `npm ci` if dependencies are absent.
2. Start the backend with `node server.js`. Wait for `Server is running on http://localhost:3000`.
3. In a second PowerShell at repository root, generate isolated users and the fixed coupon:

```powershell
node scripts/seed-performance-data.js --users=<CSV_ROWS> --max-uses=<ITERATIONS_PER_USER> --reset-id=<RESET_ID>
```

4. Record `performance/data/last-reset.json`, Git commit, and reset ID. Setup traffic is not measured.

## B. Preflight

```powershell
powershell -ExecutionPolicy Bypass -File scripts/preflight.ps1
```

Review the generated evidence as follows:

1. Do **not** use JMeter **File → Open** on a `.jtl`; that menu only opens JMX/XML test plans. A JTL beginning with `timeStamp,elapsed,...` is CSV.
2. Open the Load `.jmx` first, then enable its disabled **Summary Report** listener and use the listener's **Browse** field to select the CSV JTL. Alternatively, open the CSV directly in VS Code or Excel for its labels and result columns.
3. Open the generated HTML report. Confirm exactly nine Scenario B labels and no failed samples.
4. A CSV JTL does not retain response bodies. To visually inspect the returned order data, run a separate, non-measured preflight in GUI with **View Results Tree** enabled; never enable that listener in official CLI runs.

If review fails, mark the run `REJECTED`, keep it unchanged, and create a new run ID after correcting the procedure. Do not run Load/Stress/Spike/Soak.

## C. Calibration

Run the Load plan at `1`, `2`, `5`, `10`, then higher VU levels only while safe. Use a unique run ID for every 60-second level:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/run-jmeter.ps1 -Plan performance/load/23127280_Load_20260815.jmx -RunId <RUN_ID> -Threads <VU> -RampSeconds 10 -HoldSeconds 60
```

Set `L` to the highest observed stable concurrency with p95 `< 2000 ms`, error `< 1%`, CPU `< 80%`, and no clear memory drift. The student must inspect and accept the evidence.

## D. Official scenarios

Before each scenario: stop the old backend, restart it, seed again with enough unique rows, record a new reset ID, and pass preflight.

```powershell
# Load: use the calibrated L and the profile implemented by the JMX.
powershell -ExecutionPolicy Bypass -File scripts/run-jmeter.ps1 -Plan performance/load/23127280_Load_20260815.jmx -RunId <LOAD_RUN_ID> -Threads <L> -RampSeconds 120 -HoldSeconds 300

# Stress: run only after APPROVE STRESS <run-id>.
powershell -ExecutionPolicy Bypass -File scripts/run-jmeter.ps1 -Plan performance/stress/23127280_Stress_20260815.jmx -RunId <STRESS_RUN_ID> -Threads <L> -CalibratedL <L> -RampSeconds 60 -HoldSeconds 120

# Spike: pass calibrated L to the plan when required; run only after approval.
powershell -ExecutionPolicy Bypass -File scripts/run-jmeter.ps1 -Plan performance/spike/23127280_Spike_20260815.jmx -RunId <SPIKE_RUN_ID> -Threads <L> -CalibratedL <L> -RampSeconds 10 -HoldSeconds 250

# Soak: run only after APPROVE SOAK <run-id>.
powershell -ExecutionPolicy Bypass -File scripts/run-jmeter.ps1 -Plan performance/soak/23127280_Soak_20260815.jmx -RunId <SOAK_RUN_ID> -Threads <L> -CalibratedL <L> -SoakMinutes 10 -RampSeconds 60 -HoldSeconds 600
```

Use the exact parameters documented inside each JMX. Do not substitute guessed `L`.

## E. Stop conditions and evidence

Stop if the backend is unavailable for 30 seconds, error rate exceeds 20%, CPU stays above 95% for 60 seconds, memory grows without control, or the machine becomes unresponsive. Keep JMeter CLI, backend terminal, and Task Manager visible in the recording. After each run, verify the raw JTL is non-empty, open the HTML report, complete `03-run-result-form.md`, and choose `ACCEPT` or `RERUN`.

# Load Evidence — 23127280_Load_Official_20260818_002

Evidence state: `HUMAN_VERIFIED`

This folder contains student-captured evidence for the calibrated 10-VU Load rerun:

- `terminal-final.png`: final CLI output with sample, failure, CPU, RAM, JTL, HTML, and resource paths.
- `task-manager-during-run.png`: backend terminal, JMeter CLI, CPU, and physical RAM in the same frame.
- `summary-report.png`: the raw JTL loaded into the disabled GUI Summary Report after execution.
- `html-dashboard.png`: the JMeter HTML dashboard with 100% pass and Statistics.
- `resource-counters.csv`: 450 one-second CPU and physical-RAM readings.

The raw JTL contains `7,120` successful samples across nine business-request labels and no failures. It records p95 `9 ms`, throughput `16.983 samples/s`, peak CPU `89.54%`, and peak physical RAM `79.17%`. The student inspected the JTL, HTML dashboard, Summary Report, terminal output, and Task Manager evidence, then marked the run `HUMAN_VERIFIED` on 2026-08-18.

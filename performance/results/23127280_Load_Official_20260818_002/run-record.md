# Performance Run Record

- Evidence state: `HUMAN_VERIFIED`
- Run ID: `23127280_Load_Official_20260818_002`
- Scenario: Scenario B coupon purchase — Load
- Git commit at execution: `8a17a7e`
- Reset ID: `23127280-load-official-20260818-002`
- Start/end GMT+7: `2026-08-18 02:46:09.946 +07:00` / `2026-08-18 02:53:09.191 +07:00`
- Workload: calibrated `L = 10 VU`; `120 s` ramp-up; `300 s` hold; `250–750 ms` think time between requests
- JTL: `performance/results/23127280_Load_Official_20260818_002/23127280_Load_Official_20260818_002.jtl`
- JTL SHA-256: `bf5dc50a76fcb3e5d9a3f2c2a7887436d340c2838a1fa0524d10c8c665b8d619`
- HTML report: `performance/reports/23127280_Load_Official_20260818_002/index.html`
- Resource evidence: `docs/evidence/load/23127280_Load_Official_20260818_002/resource-counters.csv`
- Recording: captured by the student; URL supplied on 2026-08-18: https://youtu.be/SvDzvYLyzRQ
- Raw result: `7120` samples; `16.983 samples/s`; p50 `2 ms`; p95 `9 ms`; p99 `12 ms`; max `71 ms`; errors `0.00%`
- CPU: `450` one-second readings; first `68.17%`; average `27.09%`; max `89.54%`; final `5.95%`
- Physical RAM: first `78.00%`; average `75.62%`; max `79.17%`; final `67.64%`
- Observed anomalies: none in the nine-request business flow; no failed samples
- Student verdict: `PASS latency/error SLO; CPU and RAM remained below the stop thresholds`
- Student name/date: `Nguyễn Hiền Tuấn Anh / 2026-08-18`

# Preflight Run Record

- Evidence state: `HUMAN_VERIFIED`
- Run ID: `23127280_Preflight_20260817_224742`
- Reset ID: `23127280-preflight-20260817-003`
- Purpose: 1 VU × 1 iteration Scenario B preflight; not an official Load result
- Git commit: `66fe5b775d7e1ae4b0ceae6f4d0f0dbf3da113bd`
- Start GMT+7: `2026-08-17 22:47:52.271 +07:00`
- End GMT+7: `2026-08-17 22:47:52.923 +07:00`
- Samples: 9; each canonical Scenario B sampler occurred once
- HTTP/assertion result: 9 successes, 0 errors, all response codes 200
- Observed elapsed: p50 7 ms; p95 290 ms; max 290 ms
- Raw JTL: `performance/results/23127280_Preflight_20260817_224742/23127280_Preflight_20260817_224742.jtl`
- JTL SHA-256: `7c9d8e548a45eeadb5a3e98cf54d1c862ef73a04a2e1a16605cca7f7386d163c`
- HTML report: `performance/reports/23127280_Preflight_20260817_224742/index.html`
- Summary Report evidence: `docs/evidence/preflight/23127280_Preflight_20260817_224742/summary-report.png`
- HTML dashboard evidence: `docs/evidence/preflight/23127280_Preflight_20260817_224742/html-dashboard.png`
- Student decision: `HUMAN VERIFIED PREFLIGHT 23127280_Preflight_20260817_224742`
- Verification basis: student inspected the JMeter Summary Report and HTML dashboard; both showed 9 samples, 0 failures, 0.00% errors, and all nine Scenario B labels.
- Limitation: this preflight verifies workflow readiness only; its latency and throughput are not official Load results.

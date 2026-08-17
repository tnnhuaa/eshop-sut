# Preflight Run Record

- Evidence state: `REJECTED`
- Run ID: `23127280_Preflight_20260816_000610`
- Reset ID: `23127280-preflight-20260816-002`
- Purpose: 1 VU × 1 iteration Scenario B preflight, not official HW05 evidence
- Java/JMeter: Temurin 17.0.20+8 / Apache JMeter 5.6.3
- Samples: 9; each canonical Scenario B sampler occurred once
- HTTP/assertion result: 9 successes, 0 errors, all response codes 200
- Observed sample elapsed: p50 7 ms; p95 40 ms; max 40 ms
- HTML report: `performance/reports/23127280_Preflight_20260816_000610/index.html`
- Raw JTL: `performance/results/23127280_Preflight_20260816_000610/23127280_Preflight_20260816_000610.jtl`; SHA-256 `bcd9f9c1b8be104dee747443f7c7ffe094502110015134aad0dfa9640538053c`
- Manifest: `performance/results/23127280_Preflight_20260816_000610/manifest.json`
- Student review: `REJECTED` on 2026-08-17. The raw JTL is CSV and was incorrectly opened through JMeter **File → Open**, which expects a JMX/XML test plan.
- Evidence limitation: this CSV JTL records sampler outcomes and does not retain response bodies; it cannot independently display the returned `orderId`.
- Required next action: correct the review procedure, create a new preflight run ID, and repeat the human review. This run is retained only as rejected evidence.

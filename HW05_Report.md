# HW05 — AI-Assisted Performance Testing

- Student: Nguyễn Hiền Tuấn Anh
- Student ID: 23127280
- Tool: Apache JMeter 5.6.3
- Workflow: Scenario B — Coupon Purchase
- Overall evidence state: `RUN_UNVERIFIED`

## 1. Scope and workflow uniqueness

Scenario B covers authentication through Login, reads through Product Search and Product Detail, and transactions through Cart, fixed Coupon, Checkout, Coupon Usage, and Order History. Group uniqueness confirmation is pending student evidence in `manual/00-decisions-and-approvals.md`.

## 2. AI-assisted design and human review

The plans were structurally validated, exercised through fresh preflights, and executed in CLI mode. The student inspected GUI listeners only after each run and supplied screenshots and narrated recordings. Final video URLs and the signed human-review form remain pending.

## 3. Environment and workload

Hardware evidence: `INCOMPLETE`. Accepted calibrated stable concurrency: `L = 10`. Provisional SLO is p95 below 2 seconds and error rate below 1%; it must be confirmed or changed using baseline evidence.

## 4. Results

| Run | Evidence state | Samples | RPS | p95 | Error rate | CPU/RAM | Verdict |
|---|---|---:|---:|---:|---:|---|---|
| Load `_001` | RUN_UNVERIFIED | Original accepted report: 7108; current raw JTL: 7153 | Original report: 16.954 | Original report: 11 ms | Original report: 0.00% | CPU max 92.86%; physical RAM max 80.78% | Raw-integrity mismatch: 45 later preflight samples were appended; recover the original JTL or rerun Load before submission |
| Stress | HUMAN_VERIFIED | 7607 raw JTL rows | 15.852 raw samples/s | 35 ms raw; endpoint max 15 ms | 0.00% | CPU max 99.87% (1 second consecutive); physical RAM max 78.67% | No application breaking point through 30 VU; CPU/RAM warning |
| Spike `_001` | REJECTED | 38010 raw JTL rows | 145.761 raw samples/s | 25 ms raw | 21.0655% raw | CPU max 95.38%; physical RAM max 85.19% | Test-data coupon limit exhausted; `NOT_FOUND` cascade; rerun required |
| Spike `_002` | HUMAN_VERIFIED | 36598 raw JTL rows | 140.984 raw samples/s | 58 ms raw; HTML total 18 ms | 0.00% | CPU max 97.44% (2 seconds consecutive); physical RAM max 78.85% | PASS latency, error, and recovery; transient CPU warning |
| Soak `_002` | RUN_UNVERIFIED | 16759 | 25.411 including ramp; steady 26.420 first half / 26.397 last half | 9 ms raw; 8 ms in last half | 0.00% | CPU max 97.20% (1 second above 95%); physical RAM max 72.44%, final 60.74% | PASS latency/error/stability with transient CPU warning; student verdict pending |

## 5. AI analysis and misinterpretation hunt

Two automatic interpretations required correction. First, Stress reported 7607 raw JTL rows while the HTML endpoint total was 6883 because the raw file also contains 724 parent transaction-controller samples; these values describe different aggregation levels. Second, Load `_001` initially appeared complete from its HTML report, but SHA-256 and row-count verification later found 45 appended preflight rows. The accepted metrics are therefore not sufficient to authenticate the current raw file, so Load was downgraded to `RUN_UNVERIFIED` without editing the JTL.

## 6. Continuous performance pipeline

See `docs/continuous-performance-pipeline.md` for trigger rules, p95/error gates, runner-noise controls, retention, and safety trade-offs.

## 7. Agent Skill

The repository includes `.agents/skills/eshop-jmeter-performance/`. It enforced Scenario B scope, external test data, preflight gates, CLI execution, immutable run IDs, explicit approval before dangerous profiles, and evidence states. The student recorded the performance runs; video URLs remain pending.

## 8. Issues and limitations

No issue is claimed yet. Source inspection identified candidate risks in account lockout, in-memory cart persistence, checkout trust, coupon authentication/calculation, and order growth. A candidate becomes a reportable defect only after real reproduction and student confirmation.

## 9. Evidence and submission

Stress and corrected Spike are human-verified. Load `_001` was originally accepted, but its current raw JTL no longer matches the accepted report and is therefore `RUN_UNVERIFIED`; see `docs/load-001-integrity-incident.md`. Soak `_001` was removed from the submission tree and preserved under `rejected-evidence`; the manually recorded `_002` run has complete raw, HTML, image, and resource evidence but still needs the student's verdict. Video URLs, hardware evidence, human review, YouTube upload, and Moodle submission remain pending. The current TA rubric totals 100 points.

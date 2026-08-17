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

Hardware evidence: `HUMAN_VERIFIED`. On 2026-08-18, the student confirmed that host `TUANANH` is the machine used for the official runs. It is an Acer Nitro AN515-57 with an Intel Core i5-11400H, 24 GB RAM, and Windows 11. Accepted calibrated stable concurrency: `L = 10`. Provisional SLO is p95 below 2 seconds and error rate below 1%; it must be confirmed or changed using baseline evidence.

## 4. Results

| Run | Evidence state | Samples | RPS | p95 | Error rate | CPU/RAM | Verdict |
|---|---|---:|---:|---:|---:|---|---|
| Load `_001` | RUN_UNVERIFIED | Original accepted report: 7108; current raw JTL: 7153 | Original report: 16.954 | Original report: 11 ms | Original report: 0.00% | CPU max 92.86%; physical RAM max 80.78% | Raw-integrity mismatch: 45 later preflight samples were appended; recover the original JTL or rerun Load before submission |
| Load `_002` | HUMAN_VERIFIED | 7120 | 16.983 | 9 ms | 0.00% | CPU max 89.54%; physical RAM max 79.17% | PASS latency/error SLO; replaces `_001` as submission evidence |
| Stress | HUMAN_VERIFIED | 7607 raw JTL rows | 15.852 raw samples/s | 35 ms raw; endpoint max 15 ms | 0.00% | CPU max 99.87% (1 second consecutive); physical RAM max 78.67% | No application breaking point through 30 VU; CPU/RAM warning |
| Spike `_001` | REJECTED | 38010 raw JTL rows | 145.761 raw samples/s | 25 ms raw | 21.0655% raw | CPU max 95.38%; physical RAM max 85.19% | Test-data coupon limit exhausted; `NOT_FOUND` cascade; rerun required |
| Spike `_002` | HUMAN_VERIFIED | 36598 raw JTL rows | 140.984 raw samples/s | 58 ms raw; HTML total 18 ms | 0.00% | CPU max 97.44% (2 seconds consecutive); physical RAM max 78.85% | PASS latency, error, and recovery; transient CPU warning |
| Soak `_002` | HUMAN_VERIFIED | 16759 | 25.411 including ramp; steady 26.420 first half / 26.397 last half | 9 ms raw; 8 ms in last half | 0.00% | CPU max 97.20% (1 second above 95%); physical RAM max 72.44%, final 60.74% | PASS latency/error/stability with transient CPU warning |

## 5. AI analysis and misinterpretation hunt

The evidence-backed Task 2 analysis is in `docs/task2-ai-analysis.md`, and the mandatory 247-word critique is in `AI_Critique.md`. On 2026-08-18, the student accepted commit `1817ba9`; both artifacts and `manual/06-human-review-form.md` are `HUMAN_VERIFIED`.

The main correction concerns aggregation scope. Stress has 7,607 raw rows, including 799 parent E2E rows and 6,808 endpoint rows; the HTML total is 6,883. The earlier AI explanation incorrectly treated the 724 order-history samples as parent rows. Spike shows the same risk: raw all-row p95 is 58 ms, while the HTML total reports 18 ms for a different population. Every reported metric must therefore identify its source and sample population.

The student selected composite-index experiments and order-history pagination as feasible improvements. The student rejected a generic connection pool and immediate Node clustering as unsupported by the current SQLite and process-local cart architecture.

## 6. Continuous performance pipeline

Task 3 is `HUMAN_VERIFIED` in `docs/continuous-performance-pipeline.md`. On 2026-08-18, the student accepted commit `3eef521`, including its path rules, PR/nightly/weekly/release tiers, p95 rule, and non-production restriction for Stress and Spike. The model watches performance-sensitive paths, runs a 1-VU preflight, and compares only compatible p95 populations. It combines the absolute p95/error SLO with a 20% plus 10 ms relative gate and one confirmation rerun. The proposal also covers runner noise, baseline drift, artifact retention, cost, and false alarms.

## 7. Agent Skill

The repository includes `.agents/skills/eshop-jmeter-performance/`. It enforces external test data, preflight gates, CLI execution, immutable run IDs, explicit approval before dangerous profiles, and evidence states. Scenario B remains the default endpoint contract. The validator also accepts `--contract` with a JSON definition of sampler order, CSV variables, correlations, listeners, filename rules, and forbidden literals, allowing the guarded workflow to be reused for another endpoint group without editing validator code. The bundled Scenario B contract passes all four current JMX plans; the custom-contract path was also exercised. The demonstration script is in `manual/11-agent-skill-demo-script-vi.md`; the video URL remains pending.

## 8. Issues and limitations

No issue is claimed yet. Source inspection identified candidate risks in account lockout, in-memory cart persistence, checkout trust, coupon authentication/calculation, and order growth. A candidate becomes a reportable defect only after real reproduction and student confirmation.

## 9. Evidence and submission

Load `_002`, Stress, corrected Spike, Soak `_002`, the official-run hardware, Task 2 analysis, and Task 3 proposal are human-verified. Load `_002` replaces the contaminated `_001` evidence documented in `docs/load-001-integrity-incident.md`. Soak `_001` was removed from the submission tree and preserved under `rejected-evidence`. Video URLs, YouTube upload, and Moodle submission remain pending. The current TA rubric totals 100 points.

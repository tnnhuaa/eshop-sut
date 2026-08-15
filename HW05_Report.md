# HW05 — AI-Assisted Performance Testing

- Student: Nguyễn Hiền Tuấn Anh
- Student ID: 23127280
- Tool: Apache JMeter 5.6.3
- Workflow: Scenario B — Coupon Purchase
- Overall evidence state: `NOT_RUN`

## 1. Scope and workflow uniqueness

Scenario B covers authentication through Login, reads through Product Search and Product Detail, and transactions through Cart, fixed Coupon, Checkout, Coupon Usage, and Order History. Group uniqueness confirmation is pending student evidence in `manual/00-decisions-and-approvals.md`.

## 2. AI-assisted design and human review

The generated Load, Stress, Spike, and Soak plans require validation and a real preflight. Document AI omissions and student corrections in `manual/06-human-review-form.md` after inspecting the artifacts and raw results.

## 3. Environment and workload

Hardware: `NOT_RUN`. Calibration and stable concurrency `L`: `NOT_RUN`. Provisional SLO is p95 below 2 seconds and error rate below 1%; it must be confirmed or changed using baseline evidence.

## 4. Results

| Run | Evidence state | Samples | RPS | p95 | Error rate | CPU/RAM | Verdict |
|---|---|---:|---:|---:|---:|---|---|
| Load | NOT_RUN | — | — | — | — | — | — |
| Stress | NOT_RUN | — | — | — | — | — | — |
| Spike | NOT_RUN | — | — | — | — | — | — |
| Soak | NOT_RUN | — | — | — | — | — | — |

## 5. AI analysis and misinterpretation hunt

`INCOMPLETE`: requires real JTL analysis and the student's evidence-backed correction.

## 6. Continuous performance pipeline

See `docs/continuous-performance-pipeline.md` for trigger rules, p95/error gates, runner-noise controls, retention, and safety trade-offs.

## 7. Agent Skill

The repository includes `.agents/skills/eshop-jmeter-performance/`. Structural validation and forward test must be recorded; the demonstration video remains `NOT_RUN`.

## 8. Issues and limitations

No issue is claimed yet. Source inspection identified candidate risks in account lockout, in-memory cart persistence, checkout trust, coupon authentication/calculation, and order growth. A candidate becomes a reportable defect only after real reproduction and student confirmation.

## 9. Evidence and submission

Video, hardware evidence, official JTL, HTML reports, human signature, YouTube upload, and Moodle submission must be supplied by the student. The provided rubric rows total 90 although the displayed total is 100; this discrepancy is preserved for clarification with the TA and no criterion is invented.


# Decisions and Human Approvals

## Locked decisions

- [x] Student ID: `23127280`.
- [x] Tool: Apache JMeter 5.6.3.
- [x] Workflow: Scenario B — Coupon Purchase.
- [x] Official measured runs use CLI/non-GUI mode.
- [x] JMeter installation smoke passed from the student-provided GUI screenshot on 2026-08-15.
- [x] Student selected option A on 2026-08-16: use portable Temurin JDK 17 for JMeter while leaving system Java 25 unchanged.
- [x] Automated preflight produced exactly nine successful samples; evidence remains `RUN_UNVERIFIED` pending student inspection.

## Must be confirmed by the student

- [ ] Group confirms no other member uses the same Coupon Purchase workflow.
- [ ] Provisional SLO accepted or corrected after calibration: p95 `< 2000 ms`, errors `< 1%`.
- [ ] Calibration result `L` accepted with raw evidence.
- [ ] `APPROVE STRESS <run-id>` recorded before Stress.
- [ ] `APPROVE SPIKE <run-id>` recorded before Spike.
- [ ] `APPROVE SOAK <run-id>` recorded before Soak.
- [ ] Final report, AI critique, video links, and submission package human-reviewed.

Only the student may mark evidence `HUMAN_VERIFIED`.

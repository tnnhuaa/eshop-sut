# Decisions and Human Approvals

## Locked decisions

- [x] Student ID: `23127280`.
- [x] Tool: Apache JMeter 5.6.3.
- [x] Workflow: Scenario B — Coupon Purchase.
- [x] Official measured runs use CLI/non-GUI mode.
- [x] JMeter installation smoke passed from the student-provided GUI screenshot on 2026-08-15.
- [x] Student selected option A on 2026-08-16: use portable Temurin JDK 17 for JMeter while leaving system Java 25 unchanged.
- [x] Automated preflight `23127280_Preflight_20260816_000610` produced nine successful samples but is `REJECTED` after an invalid CSV-JTL review attempt; a fresh preflight is required.
- [x] Fresh preflight `23127280_Preflight_20260817_224742` passed with nine successful samples and was explicitly accepted by the student as `HUMAN_VERIFIED` on 2026-08-17.

## Must be confirmed by the student

- [ ] Group confirms no other member uses the same Coupon Purchase workflow.
- [ ] Provisional SLO accepted or corrected after calibration: p95 `< 2000 ms`, errors `< 1%`.
- [x] Calibration result `L = 10` accepted with raw evidence on 2026-08-17.
- [x] Official Load approved as `APPROVE OFFICIAL LOAD 23127280_Load_Official_20260817_001` with OBS recording and backend ready.
- [x] Official Load `_001` was accepted by the student based on the original 7108-sample run: pass latency/error SLOs with transient CPU warning; video URL pending.
- [ ] Load `_001` raw-integrity incident unresolved: the current JTL contains 45 samples from five later preflights and no longer matches the accepted SHA-256 or HTML report. Recover the original JTL or manually record Load `_002` before submission.
- [x] `APPROVE STRESS 23127280_Stress_Official_20260818_001` recorded before Stress with OBS recording and backend ready.
- [x] Official Stress accepted as `HUMAN_VERIFIED`: no application breaking point through 30 VU, with CPU/RAM warning; video URL pending.
- [x] `APPROVE SPIKE 23127280_Spike_Official_20260818_001` recorded before Spike with OBS recording and backend ready.
- [x] Official Spike `_001` rejected: test-data coupon limit was exhausted and caused a `NOT_FOUND` failure cascade. Raw JTL, HTML, resource, backend-log, image, and video evidence are retained; rerun required.
- [x] `APPROVE SPIKE 23127280_Spike_Official_20260818_002` recorded for the corrected rerun with OBS recording and backend ready.
- [x] Corrected Spike `_002` accepted as `HUMAN_VERIFIED`: pass latency, error, and recovery with a transient CPU warning; video URL pending.
- [x] Soak `_001` rejected by the student because the agent started it instead of leaving the manually recorded execution to the student. Its raw evidence is preserved outside the submission tree under `rejected-evidence/soak/23127280_Soak_Official_20260818_001/`.
- [x] `APPROVE SOAK 23127280_Soak_Official_20260818_002` recorded for the student-operated 10-minute rerun, with OBS recording and backend ready.
- [x] Official Soak `_002` accepted as `HUMAN_VERIFIED`: pass latency, error, and stability with a transient CPU warning; video URL pending.
- [ ] Final report, AI critique, video links, and submission package human-reviewed.

Only the student may mark evidence `HUMAN_VERIFIED`.

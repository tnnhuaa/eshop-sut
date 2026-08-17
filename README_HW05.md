# HW05 Performance Testing Submission

Current state: calibration accepted at `L = 10`; Load `_002`, Stress, corrected Spike, Soak `_002`, official hardware, Task 2 analysis, and Task 3 proposal are `HUMAN_VERIFIED`. Load `_002` replaces the contaminated Load `_001` evidence.

The accepted Soak run uses the committed seven-user fixture `performance/data/users-soak-official-20260818-002.csv`, matching `floor(0.7L)`.

- Student: Nguyễn Hiền Tuấn Anh (`23127280`)
- Public repository: https://github.com/tnnhuaa/eshop-sut
- Tool: Apache JMeter 5.6.3
- Confirmed bugs: `0`; documented resource warnings: Stress, Spike, and Soak transient CPU/RAM warnings

## Scenario B

Login → Search → Product Detail → Add/Get Cart → Apply Fixed Coupon → Checkout → Record Coupon Usage → My Orders.

## Safe start

1. Open all five video links below in an incognito window and verify privacy, audio, and duration.
2. Export `HW05_Report.md` and `AI_Audit.md`/`AI_Critique.md` to PDF.
3. Review `submission_hw05`, choose the final self-assessed grade, then create and extract-test the ZIP.

## Test summary

| Profile | Accepted run | Workload | Result |
|---|---|---|---|
| Load | `23127280_Load_Official_20260818_002` | `L = 10`, ramp 120 s, hold 300 s | 7,120 samples; p95 9 ms; 0.00% errors; 16.983 samples/s |
| Stress | `23127280_Stress_Official_20260818_001` | 10, 15, 20, and 30 VU stages | No application breaking point through 30 VU; p95 35 ms; 0.00% errors; resource warning |
| Spike | `23127280_Spike_Official_20260818_002` | 2 VU baseline, spike to 20 VU, recovery at 2 VU | p95 58 ms over raw rows; 0.00% errors; recovered; transient CPU warning |
| Soak | `23127280_Soak_Official_20260818_002` | 7 VU, ramp 60 s, sustain 10 min | Stable 26.420 to 26.397 samples/s; p95 9 to 8 ms; 0.00% errors; RAM max 72.44% |

The Scenario B workflow covers auth-heavy Login, read-heavy Product Search/Detail and Order History, and transactional Cart, Coupon, Checkout, and Coupon Usage endpoints. The measured endurance threshold is approximately `26.4 samples/s` at 7 VU for 10 minutes on the verified machine, with no sustained latency, throughput, error-rate, or memory degradation.

## Self-assessment

| Criterion | Maximum | Provisional self-score | Basis |
|---|---:|---:|---|
| Task 1 — Load testing | 30 | 29 | Accepted rerun, raw JTL, HTML, resource evidence, and video; original integrity incident is disclosed |
| Task 1 — Stress testing | 20 | 18 | Four stages through 30 VU with complete evidence; no application breaking point was reached |
| Task 1 — Spike testing | 20 | 19 | Corrected data exhaustion, reran successfully, and demonstrated recovery |
| Task 2 — AI analysis and misinterpretation hunt | 10 | 10 | Raw corrections, thresholds, optimization review, and 247-word critique accepted |
| Task 3 — Continuous performance proposal | 10 | 10 | Flow chart, path rules, tiers, p95 gate, and trade-offs accepted |
| Agent Skill | 10 | 10 | Reusable endpoint contracts, validators, evidence controls, and demo URL |
| **Total** | **100** | **96** | Use ZIP suffix `096` if the student keeps this score after final review |

## Demo videos

| Evidence | Accepted run or artifact | Video |
|---|---|---|
| Load | `23127280_Load_Official_20260818_002` | [YouTube](https://youtu.be/SvDzvYLyzRQ) |
| Stress | `23127280_Stress_Official_20260818_001` | [YouTube](https://youtu.be/aem-M4Twah4) |
| Spike | `23127280_Spike_Official_20260818_002` | [YouTube](https://youtu.be/q1NMVWSS-98) |
| Soak | `23127280_Soak_Official_20260818_002` | [YouTube](https://youtu.be/J4wv5SuVCFA) |
| Agent Skill | `.agents/skills/eshop-jmeter-performance/` | [YouTube](https://youtu.be/WmdhTCnFddQ) |

The student supplied these URLs on 2026-08-18. Final incognito playback checks remain manual.

Never overwrite raw evidence or mark AI-generated material as human-verified.

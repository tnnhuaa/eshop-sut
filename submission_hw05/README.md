# HW05 Performance Testing Submission

Final review status: `HUMAN_VERIFIED` on 2026-08-18. Calibration at `L = 10`, Load `_002`, Stress, corrected Spike, Soak `_002`, hardware evidence, Task 2, Task 3, Agent Skill, and all five video mappings were reviewed and accepted by the student. Load `_002` replaces the contaminated Load `_001` evidence.

The accepted Soak run uses the committed seven-user fixture `supporting/test-data/users-soak-official-20260818-002.csv`, matching `floor(0.7L)`.

- Student: Nguyễn Hiền Tuấn Anh (`23127280`)
- Public repository: https://github.com/tnnhuaa/eshop-sut
- Tool: Apache JMeter 5.6.3
- Confirmed bugs: `0`; documented resource warnings: Stress, Spike, and Soak transient CPU/RAM warnings

## Scenario B

Login → Search → Product Detail → Add/Get Cart → Apply Fixed Coupon → Checkout → Record Coupon Usage → My Orders.

## Test summary

| Profile | Accepted run | Workload | Result |
|---|---|---|---|
| Load | `23127280_Load_Official_20260818_002` | `L = 10`, ramp 120 s, hold 300 s | 7,120 samples; p95 9 ms; 0.00% errors; 16.983 samples/s |
| Stress | `23127280_Stress_Official_20260818_001` | 10, 15, 20, and 30 VU stages | No application breaking point through 30 VU; p95 35 ms; 0.00% errors; resource warning |
| Spike | `23127280_Spike_Official_20260818_002` | 2 VU baseline, spike to 20 VU, recovery at 2 VU | p95 58 ms over raw rows; 0.00% errors; recovered; transient CPU warning |
| Soak | `23127280_Soak_Official_20260818_002` | 7 VU, ramp 60 s, sustain 10 min | Stable 26.420 to 26.397 samples/s; p95 9 to 8 ms; 0.00% errors; RAM max 72.44% |

## Required submission summary

| Required item | Submitted result |
|---|---|
| Scenarios run | Four accepted official scenarios: Load, Stress, corrected Spike, and 10-minute Soak. Load, Stress, and Spike are the three required measured plans; Soak supplies the endurance result. |
| Endpoint groups covered | Three groups in one Scenario B workflow: **auth-heavy** Login; **read-heavy** Product Search, Product Detail, and Order History; **transactional** Cart, Apply Coupon, Checkout, and Coupon Usage. |
| Endurance threshold | Approximately **26.4 samples/s at 7 VU for 10 minutes**. Sustained throughput changed from `26.420` samples/s in the first half to `26.397` in the last half. Raw p95 was `9 ms` overall and `8 ms` in the last half; error rate was `0.00%`; physical RAM peaked at `72.44%` and finished at `60.74%`. |
| Bugs / performance issues | **0 confirmed bugs** and **3 documented transient resource warnings** in Stress, Spike, and Soak. The warnings did not produce errors, sustained latency degradation, or an application breaking point within the tested range. |
| Demo video links | **5 student-provided unlisted YouTube links**: Load, Stress, Spike, Soak, and Agent Skill. The direct links and accepted Run IDs are listed in the Demo videos section below. |

## Self-assessment

| **No.** | **Criteria** | **Grade** | **Self-Assessed Grade** |
| --- | --- | --- | --- |
| **1** | Task 1 — Load testing | 30 | 30 |
| **2** | Task 1 — Stress testing | 20 | 20 |
| **3** | Task 1 — Spike testing | 20 | 20 |
| **4** | Task 2 — AI analysis + misinterpretation hunt (with correct values from raw logs) | 10 | 10 |
| **5** | Task 3 — Continuous Performance Testing proposal (G9.6) | 10 | 10 |
| **6** | Agent Skills | 10 | 10 |
|  | **Total** | **100** | **100** |

## Demo videos

| Evidence | Accepted run or artifact | Video |
|---|---|---|
| Load | `23127280_Load_Official_20260818_002` | [YouTube](https://youtu.be/SvDzvYLyzRQ) |
| Stress | `23127280_Stress_Official_20260818_001` | [YouTube](https://youtu.be/aem-M4Twah4) |
| Spike | `23127280_Spike_Official_20260818_002` | [YouTube](https://youtu.be/q1NMVWSS-98) |
| Soak | `23127280_Soak_Official_20260818_002` | [YouTube](https://youtu.be/J4wv5SuVCFA) |
| Agent Skill | `.agents/skills/eshop-jmeter-performance/` | [YouTube](https://youtu.be/WmdhTCnFddQ) |

The student supplied and reviewed these URLs on 2026-08-18. The final video-evidence mapping is `HUMAN_VERIFIED`.

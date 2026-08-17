# Calibration Summary — 2026-08-17

Provisional SLO: p95 `< 2000 ms`, error rate `< 1%`, CPU `< 80%`, and no clear memory drift.

| Level | Evidence state | Samples | RPS | p95 | p99 | Errors | Peak CPU | Memory observation |
|---:|---|---:|---:|---:|---:|---:|---:|---|
| 1 VU | HUMAN_VERIFIED | 132 | 1.942 | 11 ms | 18 ms | 0.00% | 66% student-observed | Physical RAM 66% → 71% |
| 2 VU | HUMAN_VERIFIED | 259 | 3.760 | 12 ms | 20 ms | 0.00% | 50% captured | Physical RAM 72% → 75% |
| 5 VU | HUMAN_VERIFIED | 640 | 9.243 | 10 ms | 15 ms | 0.00% | 77.04% counter max | Committed memory 96.48% → 92.66%; max 96.90% |
| 10 VU | HUMAN_VERIFIED | 1274 | 18.419 | 12 ms | 16 ms | 0.00% | 76.09% counter max | Committed memory 96.49% → 91.95%; max 97.28% |

## Proposed decision

The student accepted `L = 10` as the highest tested stable concurrency. The 10 VU run meets the provisional p95, error-rate, and CPU gates, and its committed-memory counter does not show upward drift during the short calibration window.

## Evidence limitations

- The batch resource CSV records Windows `% Committed Bytes In Use`, not Task Manager physical-RAM percentage. Use Task Manager in the official video to report physical RAM and the Soak run to establish memory ceiling.
- The first CPU counter sample includes backend/JMeter startup work and is not a clean idle baseline.
- The 5 VU reset snapshot was not preserved before the 10 VU seed. The run ID and reset ID are recorded, but its manifest correctly marks the missing snapshot `INCOMPLETE`.
- Calibration results are not official Load evidence and do not replace Load, Stress, Spike, or Soak runs.

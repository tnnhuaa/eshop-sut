# Task 2 — AI Analysis and Misinterpretation Hunt

Review state: `RUN_UNVERIFIED` — the calculations below come from immutable raw JTL files, but the student must inspect and accept the analysis.

## Evidence analyzed

| Accepted run | Raw samples | Raw p95 | Raw p99 | Error rate | Raw throughput |
|---|---:|---:|---:|---:|---:|
| Load `23127280_Load_Official_20260818_002` | 7,120 | 9 ms | 12 ms | 0.00% | 16.983 samples/s |
| Stress `23127280_Stress_Official_20260818_001` | 7,607 | 35 ms | 64 ms | 0.00% | 15.852 samples/s |
| Spike `23127280_Spike_Official_20260818_002` | 36,598 | 58 ms | 151 ms | 0.00% | 140.984 samples/s |
| Soak `23127280_Soak_Official_20260818_002` | 16,759 | 9 ms | 11 ms | 0.00% | 25.411 samples/s |

The table uses nearest-rank percentiles over every raw JTL row. Stress and Spike also record a parent transaction named `Scenario B - Coupon Purchase E2E`; therefore, their raw totals and raw percentiles are not directly comparable with an HTML `Total` that uses a different aggregation.

## AI threshold proposal

The observed runs support the existing acceptance SLO of p95 below 2,000 ms and error rate below 1%. For future regression testing, that absolute SLO is too loose to detect deterioration in this small local SUT. Use both an absolute gate and a compatible-baseline gate:

- Fail when error rate is at least 1% or the agreed p95 is at least 2,000 ms.
- Warn when p95 rises by both more than 20% and more than 10 ms against a baseline produced on the same hardware, dataset, plan, JMeter version, and aggregation scope.
- Report endpoint-only and parent-transaction percentiles separately.
- Warn when CPU exceeds 90%; apply the existing emergency stop only when CPU exceeds 95% continuously for 60 seconds.
- Treat RAM as a trend: compare start, ceiling, and final physical-memory use rather than one isolated screenshot.

These thresholds are proposals for later runs, not retroactive changes to the accepted run criteria.

## Misinterpretation 1 — Stress sample totals

**Initial AI claim:** The Stress terminal/raw count was 7,607 while the HTML total was 6,883 because the raw JTL contained 724 parent transaction samples.

**Raw correction:** The JTL contains 7,607 rows: 799 parent transaction rows and 6,808 endpoint rows. Subtracting the actual parent count gives 6,808, not 6,883. The HTML `statistics.json` reports `Total.sampleCount = 6,883`, so the difference cannot be explained only by removing parent rows. The correct report must name its aggregation source instead of treating the two totals as interchangeable.

**Why AI missed it:** It noticed that `7,607 - 6,883 = 724` and matched that difference to the 724 samples of the final endpoint, `09 GET /api/orders/my-orders`, without recounting the parent label. This was pattern matching, not a complete reconciliation.

## Misinterpretation 2 — Spike p95

**Initial AI claim:** Spike p95 was 18 ms because the HTML dashboard displayed 18 ms in its `Total` row.

**Raw correction:** Nearest-rank p95 over all 36,598 raw rows is 58 ms. The HTML total is 32,939 samples with p95 18 ms, while the JTL contains 3,660 parent E2E rows whose p95 is 151 ms. Both values can be valid for different populations; neither is valid without its scope.

**Why AI missed it:** It copied the most visible dashboard number and omitted that the dashboard total and raw JTL summarize different sample populations.

## Misinterpretation 3 — Resource peak versus breaking point

**Unsupported inference:** A peak CPU value above 95% proves that the application reached its breaking point.

**Correction:** Stress reached 99.87% CPU for only one consecutive one-second reading, had 0.00% errors, and kept raw p95 at 35 ms through 30 VU. Spike reached 97.44% for two consecutive seconds and recovered with 0.00% errors. These are transient resource warnings, not evidence of an application breaking point under the agreed 60-second stop rule.

## Optimization review against the SUT

| AI recommendation | Classification | Evidence-based judgment |
|---|---|---|
| Add indexes for `orders(user_id, id)` and `coupon_usage(coupon_id, user_id)` | Feasible experiment | `backend/database.js` creates neither index, while `backend/server.js` filters these columns for order history and coupon-use checks. Confirm benefit with `EXPLAIN QUERY PLAN` and a larger dataset before claiming a speedup. |
| Paginate `GET /api/orders/my-orders` | Feasible | The endpoint returns every order with `SELECT * ... ORDER BY id DESC`; the response grows after each checkout. Pagination bounds database work and payload size. |
| Test SQLite WAL and a bounded busy timeout | Feasible experiment, not a proven fix | The service performs concurrent reads and writes on one SQLite file. No accepted run shows lock errors, so WAL must be A/B tested and cannot be presented as a confirmed remedy. |
| Add a generic database connection pool | Unsupported for the current evidence | The SUT uses the local `sqlite3` driver and one file. A conventional server-database pool is not automatically beneficial and can increase SQLite write contention. |
| Add Node cluster workers immediately | Hallucinated without redesign | Carts live in the process-local `userCarts` object. Multiple workers would split cart state unless storage and session ownership were redesigned first. |
| Cache order history in Redis | Unsupported at the observed scale | Order history changes after every checkout and currently has very low latency. Cache invalidation and a new dependency are not justified by these JTLs. |

## Student review gate

Before marking this artifact `HUMAN_VERIFIED`, the student must:

1. Check the four raw JTL paths and the two `statistics.json` files.
2. Confirm the 799 Stress parent rows and 3,660 Spike parent rows.
3. Accept or rewrite the threshold proposal.
4. Select at least one feasible and one rejected optimization in their own words.
5. Record their name, date, and decision in `manual/06-human-review-form.md`.

# Human Review of AI Output

- Artifact/run: Task 2 analysis of accepted Load `_002`, Stress `_001`, Spike `_002`, and Soak `_002`.
- Raw evidence inspected: The student accepted the evidence-backed analysis in commit `1817ba9` on 2026-08-18.
- AI claim: Stress raw/HTML count difference was caused by 724 parent transaction samples; Spike p95 was 18 ms without naming the aggregation scope.
- What AI got right: All accepted runs had 0.00% errors; latency stayed below the provisional two-second SLO; order-history growth and missing indexes are measurable risks.
- What AI got wrong or omitted: Stress has 799 parent rows, not 724. Spike raw all-row p95 is 58 ms, while HTML p95 is 18 ms for a different population.
- Why AI likely missed it: It matched a convenient arithmetic difference and copied visible dashboard totals without recounting labels or naming the sample population.
- Student recalculation/correction: Accepted — Stress raw 7,607 = 799 parent + 6,808 endpoint rows; Spike raw p95 58 ms over 36,598 rows.
- Technical or course reference: Raw JTL files, generated `statistics.json`, and `docs/task2-ai-analysis.md`.
- Feasible optimization: Test composite indexes for order and coupon-usage lookups; paginate order history to bound query work and payload growth.
- Rejected optimization and reason: Reject a generic connection pool because the SUT uses one local SQLite file; reject immediate Node clustering because carts are stored in process-local memory and require a state redesign first.
- Final student decision: `HUMAN_VERIFIED`.
- Student name/date: Nguyễn Hiền Tuấn Anh — 2026-08-18.

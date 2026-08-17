# Human Review of AI Output

- Artifact/run: Task 2 analysis of accepted Load `_002`, Stress `_001`, Spike `_002`, and Soak `_002`.
- Raw evidence inspected: **PENDING STUDENT CHECK** — four raw JTL files and Stress/Spike `statistics.json` files listed in `docs/task2-ai-analysis.md`.
- AI claim: Stress raw/HTML count difference was caused by 724 parent transaction samples; Spike p95 was 18 ms without naming the aggregation scope.
- What AI got right: All accepted runs had 0.00% errors; latency stayed below the provisional two-second SLO; order-history growth and missing indexes are measurable risks.
- What AI got wrong or omitted: Stress has 799 parent rows, not 724. Spike raw all-row p95 is 58 ms, while HTML p95 is 18 ms for a different population.
- Why AI likely missed it: It matched a convenient arithmetic difference and copied visible dashboard totals without recounting labels or naming the sample population.
- Student recalculation/correction: **PENDING STUDENT ACCEPTANCE** — Stress raw 7,607 = 799 parent + 6,808 endpoint rows; Spike raw p95 58 ms over 36,598 rows.
- Technical or course reference: Raw JTL files, generated `statistics.json`, and `docs/task2-ai-analysis.md`.
- Feasible optimization: **STUDENT TO SELECT** — composite indexes, order-history pagination, or measured WAL experiment.
- Rejected optimization and reason: **STUDENT TO SELECT** — generic connection pool, immediate Node clustering, or Redis order-history cache.
- Final student decision: `RUN_UNVERIFIED`.
- Student name/date: **PENDING**.

Do not sign until the values are checked against raw JTL and the actual machine evidence.

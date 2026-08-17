# AI Critique

Status: `HUMAN_VERIFIED`. Word count of critique body: 247. On 2026-08-18, the student accepted the Task 2 analysis and critique from commit `1817ba9`.

AI helped me compare the accepted Load, Stress, Spike, and Soak results, but its first interpretation showed why I could not treat a dashboard summary as ground truth. It correctly identified that all four accepted runs had a 0.00% error rate and that the observed p95 values remained below the provisional two-second SLO. It also usefully highlighted order-history growth and the missing composite indexes as areas worth measuring.

The AI initially explained the Stress count difference incorrectly. It said that the raw JTL contained 7,607 samples while the HTML total contained 6,883 because 724 parent transaction samples were excluded. Recounting the raw labels showed 799 parent `Scenario B - Coupon Purchase E2E` rows and 6,808 endpoint rows. The number 724 was actually the count for the final order-history request. The explanation therefore matched an arithmetic difference to the wrong label. A second ambiguity appeared in Spike: the raw all-row p95 was 58 ms, but the HTML total showed 18 ms because it summarized a different sample population.

I learned to record the source, population, and percentile method with every metric. I would test indexes on order history and coupon usage, pagination, and SQLite WAL with an A/B benchmark. I would reject a generic connection-pool recommendation because this SUT uses a local SQLite file, and I would reject immediate Node clustering because carts are stored in process memory. AI is useful for generating hypotheses and checking patterns, but raw evidence and source-code constraints must decide the final conclusion.

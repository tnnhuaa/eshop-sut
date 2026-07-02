# FR-10 Example Human Review

## Accepted

- Build a complete state transition model before writing test cases.
- Treat FR-10 as a state-machine feature with supporting domain variables.
- Include valid lifecycle, invalid skipped transitions, backward transitions, and final-state protection.
- Include role and ownership checks.
- Keep all execution fields as `TODO` / `Not Run` until manual/API execution.

## Modified

- BVA is written as state-boundary analysis instead of numeric boundary analysis.
- Exact HTTP status codes are not asserted because the requirement does not define them.
- Exact error messages are not asserted because the requirement does not define them.
- Admin `shipping -> canceled` is marked exploratory because the requirement is ambiguous.
- Order IDs are domain partitions, not BVA values, because no ID range is specified.

## Rejected

- Any invented state not listed in FR-10.
- Any invented audit trail/timestamp requirement.
- Any bug conclusion before execution.
- Any exact API error wording not present in the requirement.

## Added Manually

- Same-state transition tests.
- Unknown and case-variant status tests.
- Non-existing order ID test.
- Non-owner cancellation test.
- Non-admin user attempting admin status update.
- Cross-role consistency tests between User order history and Admin order management.
- Final-state protection test for `canceled -> delivered` through Admin UI/API.

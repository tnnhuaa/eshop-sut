# FR-15 Example Human Review

## Accepted

- Treat FR-15 as a CRUD feature with validation domains.
- Cover create, view, update, and delete as separate operations.
- Include name, price, and category as the primary input variables.
- Use name length `0`, `1`, `254`, `255`, and `256` for BVA.
- Use price values `-1`, `0`, `0.01`, and `1` for BVA.
- Include update isolation because FR-15 explicitly says only the edited product changes.
- Keep execution fields as `TODO` / `Not Run` until FR-15 is executed.

## Modified

- `description` and `imageUrl` are treated as optional because FR-15 does not mark them required.
- Very large positive price is treated as robustness, not a specification boundary.
- Duplicate product names are exploratory because FR-15 does not require uniqueness.
- Exact validation message text is not asserted because the requirement does not specify exact wording.
- API-only invalid cases are kept as domain tests, but execution may be marked blocked if teacher/UI scope does not allow direct API testing.

## Rejected

- Any invented price maximum.
- Any invented stock rule.
- Any invented exact error message.
- Any bug conclusion before execution.
- Any assumption that product names must be unique.
- Any assumption that image URL must be reachable unless another requirement says so.

## Added Manually

- Stale/deleted category reference case.
- Update isolation test comparing target product and non-target product.
- Immediate UI update-isolation check after saving one product.
- Post-reload update-isolation check to distinguish UI state from persisted data.
- List refresh checks after create, update, and delete.
- Non-existing product update/delete tests.
- Direct API authorization checks for unauthenticated and non-admin writes.
- Direct API missing-category case because Admin UI may always provide a default category.
- Edit-cancel/no-save test if the UI supports canceling an edit.
- Unsafe-looking name/description/image URL safe-rendering checks.
- Broken image URL display-handling test.

## Review Result

Accepted as test design draft. FR-15 execution has not started. Before execution, the student should prepare category data, at least two products for update-isolation checks, and one disposable product for delete tests.

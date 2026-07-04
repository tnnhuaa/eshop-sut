# FR-14 Human Review

## Accepted

- Treat FR-14 as an Admin category management feature.
- Cover add, view, and delete as the primary required operations.
- Include category name as the main input variable.
- Use category name length `0`, `1`, and `2` for formal BVA because only requiredness is specified.
- Include whitespace-only category name as an invalid domain by test-design assumption.
- Include target category ID classes for delete: existing, non-existing, and already deleted.
- Keep execution fields as `TODO` / `Not Run` until FR-14 is executed.

## Modified

- Update category is not treated as a required FR-14 behavior because the primary requirement text lists only Add / View / Delete, even though the feature name says CRUD and `api_specification.md` lists `PUT /api/categories/:id`.
- Very long category name is treated as robustness, not a specification boundary, because no maximum length is stated.
- Duplicate category name is exploratory because FR-14 does not require uniqueness.
- Exact validation message text is not asserted because the requirement does not specify exact wording.
- Delete behavior for categories referenced by products is kept as an integration-risk test, not a strict bug oracle, because FR-14 does not define dependency rules.
- API-only invalid cases are kept as domain tests, but execution may be marked blocked if the execution scope is Admin UI only.

## Rejected

- Any invented maximum category-name length.
- Any invented exact error message.
- Any bug conclusion before execution.
- Any assumption that category names must be unique.
- Any assumption that category update is mandatory under FR-14 without clarification.
- Any assumption that deleting a referenced category must cascade or must be blocked without a confirmed rule.

## Added Manually

- Requirement gap for conflict between "Category CRUD" / API update support and the bullet list that excludes update.
- Stale/deleted category target case.
- List refresh checks after create and delete.
- Direct API authorization checks for unauthenticated and non-admin writes.
- Safe-rendering check for script-looking category name.
- Delete dependency check for categories used by existing products.

## Review Result

Accepted as test design draft. FR-14 execution has not started. Before execution, the student should prepare at least two categories, one disposable category with no products, and one category referenced by a product if delete dependency behavior will be tested.

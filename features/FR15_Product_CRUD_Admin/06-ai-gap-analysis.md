# FR-15 AI Gap Analysis

## AI Output Reviewed

The repository-local `.agent/SKILL.md` was used to draft Domain Testing and Boundary Value Analysis artifacts for FR-15 Product CRUD Admin. The raw output was stored in `.agent/examples/FR15-example/raw-skill-output.md`, then reviewed in `.agent/examples/FR15-example/human-review.md` before finalizing the feature artifacts.

## AI Output Strengths

| Area | Useful Output |
| --- | --- |
| CRUD decomposition | Separated create, view, update, and delete behaviors. |
| Required fields | Correctly identified name, price, and category as required domains. |
| Explicit boundaries | Correctly selected name length `0/1/254/255/256` and price `-1/0/0.01/1`. |
| Update isolation | Included the rule that only the selected product should change. |
| Authorization risk | Included Admin vs non-admin/unauthenticated access as an important domain. |

## Missing Or Incorrect AI Suggestions

| Gap | Why AI Missed It | Human Correction |
| --- | --- | --- |
| Treating optional fields as required | Product forms often include description/image URL, so AI may over-assume validation rules. | Marked `description` and `imageUrl` optional because FR-15 only constrains name, price, and category. |
| Exact validation messages | AI tends to create precise error-message expectations. | Do not assert exact error text because FR-15 does not specify wording. |
| Price upper bound | AI may invent maximum price or stock/business limits. | Large price is robustness only, not a formal boundary. |
| Duplicate product name | AI may assume uniqueness for product names. | Duplicate name is exploratory because FR-15 does not require uniqueness. |
| API-only invalid values | Some invalid category/product ID cases may not be reachable through UI. | Keep them as domain tests, but execution may be marked blocked if frontend UI cannot trigger them. |
| Immediate UI update isolation | Generic CRUD output can say "only selected product changes" but miss checking the table immediately after save. | Added a specific immediate-UI isolation case because the Admin UI may show stale or mass-updated rows even if backend persistence is correct. |
| Auth check granularity | A broad "non-admin rejected" case can hide whether UI access and direct API writes are both protected. | Split UI/session authorization and API write authorization into clearer test cases. |

## Human Review Decisions

| Decision | Result |
| --- | --- |
| Use ASCII strings for name-length BVA | Accepted to avoid Unicode length-count ambiguity. |
| Include category stale/deleted case | Accepted as medium-priority integrity domain test. |
| Include unsafe-looking text | Accepted as safe-rendering robustness check, not as confirmed bug. |
| Include update isolation as high priority | Accepted because the requirement explicitly says only the edited product should change. |
| Keep execution fields unfilled | Accepted because FR-15 has not been executed yet. |

## Remaining Before Execution

- Confirm the Admin UI route and whether it exposes all invalid inputs directly.
- Prepare one disposable product for delete tests.
- Prepare two products for update-isolation tests.
- Prepare category data and record available category IDs/names.
- Decide whether API-only invalid domains should be executed or marked blocked based on teacher/UI-scope guidance.

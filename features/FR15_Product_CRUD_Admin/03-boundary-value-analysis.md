# FR-15 Product CRUD Admin - Boundary Value Analysis

## Boundary Rules

| Rule ID | Boundary Rule | Source / Decision |
| --- | --- | --- |
| FR15-BR-01 | Product name is required | FR-15 |
| FR15-BR-02 | Product name maximum length is 255 characters | FR-15 |
| FR15-BR-03 | Price is required and must be positive (`> 0`) | FR-15 |
| FR15-BR-04 | Category must be selected from the available list | FR-15 |
| FR15-BR-05 | Update must affect only the selected product | FR-15 |

## Boundary Table

| Boundary ID | Variable | Boundary | Values To Test | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| FR15-BVA-NAME-01 | `name` | Required name lower boundary | length `0`, `1`, `2` | `0` rejected; `1` and `2` accepted | High |
| FR15-BVA-NAME-02 | `name` | Maximum name length | length `254`, `255`, `256` | `254` and `255` accepted; `256` rejected | High |
| FR15-BVA-PRICE-01 | `price` | Positive number threshold | `-1`, `0`, `0.01`, `1` | `-1` and `0` rejected; `0.01` and `1` accepted | High |
| FR15-BVA-PRICE-02 | `price` | Missing vs present price | empty, `1` | Empty rejected; present positive price accepted | High |
| FR15-BVA-CAT-01 | `category_id` | Required selection | unselected, first available category | Unselected rejected; existing category accepted | High |
| FR15-BVA-CAT-02 | `category_id` | Existing category choices | first available category, another available category | Existing categories are accepted and saved/displayed correctly | Medium |
| FR15-BVA-UPDATE-01 | `product_id` / update target | Selected target vs adjacent/non-target product | update Product A, observe Product B | Product A changes; Product B remains unchanged | High |

## Boundary-Oriented Test Values

| Variable | Below Boundary | At Boundary | Above Boundary |
| --- | --- | --- | --- |
| `name` minimum length | length `0` | length `1` | length `2` |
| `name` maximum length | length `254` | length `255` | length `256` |
| `price > 0` | `-1`, `0` | `0.01` | `1` |
| category selection | unselected | first available category | another available category |

## Values Not Treated As Specification Boundaries

| Value / Area | Reason |
| --- | --- |
| Very large positive price | FR-15 gives no upper price bound; this is a robustness value, not an official BVA boundary. |
| Duplicate product name | FR-15 does not state uniqueness, so duplicate names are exploratory/domain tests, not boundary tests. |
| Product ID minimum/maximum | FR-15 does not define product ID range; non-existing/malformed IDs are domain tests. |
| Description length | FR-15 does not define description length limits. |
| Image URL format | FR-15 does not define URL validation rules. |

## BVA Selection Rationale

The highest-risk FR-15 boundaries are the explicit text length and numeric positivity constraints. Category and update-isolation checks are included as boundary-style checks because the user action crosses a decision boundary: no category vs valid category, and selected product vs other products.

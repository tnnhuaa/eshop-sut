# FR-14 Category Management CRUD - Boundary Value Analysis

## Boundary Rules

| Rule ID | Boundary Rule | Source / Decision |
| --- | --- | --- |
| FR14-BR-01 | Category name is required | FR-14 |
| FR14-BR-02 | Category name must not be empty | FR-14 |
| FR14-BR-03 | Whitespace-only name should be rejected after trimming | Test-design assumption from FR14-GAP-03 |
| FR14-BR-04 | No maximum category-name length is specified | FR14-GAP-04 |

## Boundary Table

| Boundary ID | Variable | Boundary | Values To Test | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| FR14-BVA-NAME-01 | `name` | Required name lower boundary | length `0`, `1`, `2` | `0` rejected; `1` and `2` accepted | High |
| FR14-BVA-NAME-02 | `name` | Blank vs visible character | empty, spaces only, `A` | Empty and spaces-only rejected; `A` accepted | High |
| FR14-BVA-NAME-03 | `name` | Missing vs present field | missing `name`, `name=A` | Missing field rejected; present non-empty name accepted | High |
| FR14-BVA-DEL-01 | `category_id` | Existing vs absent target | existing category, non-existing category `999999` | Existing disposable category can be deleted; non-existing target is rejected or safe no-op | Medium |

## Boundary-Oriented Test Values

| Variable | Below Boundary | At Boundary | Above Boundary |
| --- | --- | --- | --- |
| `name` minimum length | length `0` | length `1` | length `2` |
| visible trimmed name | spaces-only | one visible character | two visible characters |
| `category_id` target existence | non-existing ID | existing disposable ID | already-deleted ID |

## Values Not Treated As Specification Boundaries

| Value / Area | Reason |
| --- | --- |
| Maximum category-name length | FR-14 gives no upper length bound; long values are robustness tests only. |
| Duplicate category name | FR-14 does not state uniqueness, so duplicates are exploratory/domain tests. |
| Category ID minimum/maximum | FR-14 does not define category ID range; non-existing/malformed IDs are domain tests. |
| Number of categories in list | FR-14 does not define pagination, sorting, or maximum count. |
| Delete referenced category | FR-14 does not define relationship/dependency behavior with products. |

## BVA Selection Rationale

The formal FR-14 boundary is the required category-name lower boundary. Other checks are included only as boundary-oriented domain tests because they cross practical decision points: blank versus visible text, missing versus present field, and existing versus non-existing delete target.

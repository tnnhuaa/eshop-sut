# FR-14 Category Management CRUD - Domain Model

## Scope

FR-14 covers Admin category management: add, view, and delete categories. Update is recorded as a requirement gap because the feature name says CRUD and the API specification lists update, but the primary FR-14 bullet list does not include edit/update.

The primary requirement constraint is:

- Category name is required and must not be empty.

## Input Variables

| Variable | Type | Source | Valid Domain | Invalid / Risk Domain | Related Gap |
| --- | --- | --- | --- | --- | --- |
| `operation` | Action | Admin UI/API | Add, view, delete | Update ambiguity, unsupported action, repeated delete | FR14-GAP-01, FR14-GAP-08 |
| `actor_role` | Session/permission | Login/token | Authenticated Admin | Normal user, unauthenticated user, missing/tampered token | FR-12 |
| `category_id` | Target identifier | Category list/API path | Existing category selected by Admin | Non-existing ID, deleted ID, malformed/non-numeric ID | FR14-GAP-08 |
| `name` | Text field | Category form/API body | Non-empty category name | Missing, empty, whitespace-only, very long, duplicate, script-looking text | FR14-GAP-03, FR14-GAP-04, FR14-GAP-05 |
| `existing_categories` | Setup data / observation | Category list | Zero or more displayable categories | Stale list, duplicate display, newly created category missing | FR14-GAP-05 |
| `related_products` | Setup data / dependency | Product/category relationship | Category has no products for safe delete | Category is referenced by products | FR14-GAP-06 |
| `list_state` | UI observation | Category table/list | List reflects create/delete after action or refresh | Stale list, deleted category still visible, duplicate row after create | FR14-GAP-07 |

## Equivalence Partitions

| Class ID | Variable | Partition | Representative Value | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| EP-OP-V01 | `operation` | Valid view | Open category management list | Category list is displayed | High |
| EP-OP-V02 | `operation` | Valid add | Add category with valid name | Category is created and visible | High |
| EP-OP-V03 | `operation` | Valid delete | Delete selected disposable category | Category is removed from list | High |
| EP-OP-A01 | `operation` | Update ambiguity | Edit category name if UI/API exposes it | Record as clarification, not mandatory pass/fail for FR-14 | Medium |
| EP-ACTOR-V01 | `actor_role` | Authenticated Admin | Admin session | Category controls are available | High |
| EP-ACTOR-I01 | `actor_role` | Unauthenticated user | No session | Category-changing action is rejected | High |
| EP-ACTOR-I02 | `actor_role` | Non-admin user | Normal user session | Category-changing action is rejected | High |
| EP-ID-V01 | `category_id` | Existing selected category | Disposable category ID | Delete targets that category | High |
| EP-ID-I01 | `category_id` | Non-existing category | `999999` | Delete is rejected or safe no-op; list remains unchanged | Medium |
| EP-ID-I02 | `category_id` | Deleted category | Category deleted earlier | Repeated delete is rejected or safe no-op | Medium |
| EP-ID-I03 | `category_id` | Malformed category ID | `abc` | Request is rejected; list remains unchanged | Medium |
| EP-NAME-V01 | `name` | Normal valid name | `FR14 Test Category` | Accepted | High |
| EP-NAME-V02 | `name` | Minimum valid visible name | `A` | Accepted | High |
| EP-NAME-I01 | `name` | Missing name field | No `name` in request body | Rejected | High |
| EP-NAME-I02 | `name` | Empty name | Empty string | Rejected | High |
| EP-NAME-I03 | `name` | Whitespace-only name | Three spaces | Rejected after trim | High |
| EP-NAME-R01 | `name` | Very long name | 256+ ASCII characters | Robustness observation; no official max boundary | Medium |
| EP-NAME-R02 | `name` | Script-looking name | `<script>alert(1)</script>` | Displayed as text or rejected safely; never executed | Medium |
| EP-NAME-A01 | `name` | Duplicate name | Existing category name | Handled consistently; no unrelated data corruption | Low |
| EP-REL-V01 | `related_products` | No related products | Disposable empty category | Delete can proceed if Admin confirms action | High |
| EP-REL-A01 | `related_products` | Category referenced by products | Category used by seeded product | Behavior documented; product data should not silently corrupt | Medium |
| EP-LIST-V01 | `list_state` | List refresh after create | New category row appears | UI reflects created category | High |
| EP-LIST-V02 | `list_state` | List refresh after delete | Deleted row absent | UI reflects deletion | High |

## Domain Testing Coverage Targets

| Target | Classes Covered |
| --- | --- |
| Category happy path | EP-OP-V01, EP-OP-V02, EP-OP-V03, EP-ACTOR-V01, EP-ID-V01, EP-NAME-V01 |
| Required name validation | EP-NAME-I01, EP-NAME-I02, EP-NAME-I03 |
| Authorization | EP-ACTOR-I01, EP-ACTOR-I02 |
| Delete target correctness | EP-ID-V01, EP-ID-I01, EP-ID-I02, EP-ID-I03 |
| UI list consistency | EP-LIST-V01, EP-LIST-V02 |
| Robust/risky name handling | EP-NAME-R01, EP-NAME-R02, EP-NAME-A01 |
| Dependency risk | EP-REL-V01, EP-REL-A01 |
| Requirement clarification | EP-OP-A01 |

## Assumptions For Test Design

- Admin UI is the primary functional testing surface, but API-oriented invalid domains are kept as design cases when UI cannot create the input directly.
- Exact validation message text is not asserted because FR-14 does not specify exact wording.
- ASCII strings are used for length-oriented robustness values to avoid ambiguity about Unicode character counting.
- Duplicate category names are exploratory because FR-14 does not require category-name uniqueness.
- Update category is not mandatory FR-14 coverage until the requirement is clarified.

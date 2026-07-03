# FR-15 Product CRUD Admin - Domain Model

## Scope

FR-15 covers Admin product management: create, view, update, and delete products. The main input domains are product form fields, selected category, target product, CRUD operation, and actor/session.

The primary requirement constraints are:

- Product name is required and has maximum length 255 characters.
- Price is required and must be a positive number (`> 0`).
- Category is required and must come from the available category list.
- When updating one product, only that product is changed.

## Input Variables

| Variable | Type | Source | Valid Domain | Invalid / Risk Domain | Related Gap |
| --- | --- | --- | --- | --- | --- |
| `operation` | Action | Admin UI/API | Create, view, update, delete | Unsupported action, canceled edit, repeated delete | FR15-GAP-10, FR15-GAP-11 |
| `actor_role` | Session/permission | Login/token | Authenticated Admin | Normal user, unauthenticated user, missing/tampered token | FR15-GAP-01, FR15-GAP-17 |
| `product_id` | Target identifier | Product list/API path | Existing product selected by Admin | Non-existing ID, deleted ID, malformed/non-numeric ID | FR15-GAP-10 |
| `name` | Text field | Product form/API body | Non-empty string length 1..255 | Empty, whitespace-only, length > 255, script-looking text | FR15-GAP-03, FR15-GAP-04 |
| `price` | Number field | Product form/API body | Positive numeric value `> 0` | Missing, empty, zero, negative, non-numeric, very large number | FR15-GAP-05, FR15-GAP-06 |
| `category_id` | Selection/foreign key | Category dropdown/API body | Existing category from available list | Missing, unselected, non-existing category ID, stale/deleted category | FR15-GAP-16 |
| `description` | Optional text | Product form/API body | Empty or text value | Very long text, script-looking text | FR15-GAP-07 |
| `imageUrl` | Optional media reference | Product form/API body | Empty URL/path or URL/path string | Broken URL, non-image URL, script-looking URL | FR15-GAP-08 |
| `other_products` | Data isolation observation | Product list before/after update | Products not selected for update remain unchanged | Unrelated products changed after update | FR15-GAP-14 |
| `list_state` | UI observation | Product table/list | List reflects create/update/delete after action or refresh | Stale list, duplicated row after update, deleted product still visible | FR15-GAP-13 |

## Equivalence Partitions

| Class ID | Variable | Partition | Representative Value | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| EP-OP-V01 | `operation` | Valid create | Add Product with valid data | Product is created and visible in list | High |
| EP-OP-V02 | `operation` | Valid view | Open product management list | Existing products are displayed | High |
| EP-OP-V03 | `operation` | Valid update | Edit selected product | Only selected product is updated | High |
| EP-OP-V04 | `operation` | Valid delete | Delete selected product | Product is removed from list | High |
| EP-OP-I01 | `operation` | Canceled edit/no save | Change fields then cancel/close if UI supports it | No product data is changed | Medium |
| EP-OP-I02 | `operation` | Direct write request without UI-auth context | API write request without valid Admin session | Request is rejected and data is unchanged | High |
| EP-ACTOR-V01 | `actor_role` | Authenticated Admin | Admin session | Product CRUD controls are available | High |
| EP-ACTOR-I01 | `actor_role` | Unauthenticated user | No session | Product management/write action is rejected | High |
| EP-ACTOR-I02 | `actor_role` | Non-admin user | Normal user session | Product management/write action is rejected | High |
| EP-ID-V01 | `product_id` | Existing selected product | Seeded product ID | Update/delete targets that product | High |
| EP-ID-I01 | `product_id` | Non-existing product | `999999` | Update/delete is rejected and list remains unchanged | Medium |
| EP-ID-I02 | `product_id` | Deleted product | Product deleted earlier | Repeated update/delete is rejected or no-op with clear feedback | Medium |
| EP-NAME-V01 | `name` | Normal required name | `FR15 Test Product` | Accepted | High |
| EP-NAME-V02 | `name` | Boundary-valid name | 1..255 ASCII characters | Accepted | High |
| EP-NAME-I01 | `name` | Empty name | Empty string | Rejected | High |
| EP-NAME-I02 | `name` | Whitespace-only name | Three spaces | Rejected after trim | High |
| EP-NAME-I03 | `name` | Too long name | 256 ASCII characters | Rejected | High |
| EP-NAME-R01 | `name` | Script-looking name | `<script>alert(1)</script>` | Displayed as text or rejected safely; never executed | Medium |
| EP-NAME-A01 | `name` | Duplicate name | Existing product name | Handled consistently; no unrelated data corruption | Low |
| EP-PRICE-V01 | `price` | Positive integer | `100000` | Accepted | High |
| EP-PRICE-V02 | `price` | Positive decimal | `0.01`, `1.5` | Accepted unless implementation documents integer-only price | Medium |
| EP-PRICE-I01 | `price` | Missing/empty price | Empty price | Rejected | High |
| EP-PRICE-I02 | `price` | Zero price | `0` | Rejected | High |
| EP-PRICE-I03 | `price` | Negative price | `-1` | Rejected | High |
| EP-PRICE-I04 | `price` | Non-numeric price | `abc` | Rejected | High |
| EP-PRICE-R01 | `price` | Very large positive price | `999999999999` | Robustness check; accepted only if UI/API can store and display safely | Medium |
| EP-CAT-V01 | `category_id` | Existing category | First available category | Accepted | High |
| EP-CAT-V02 | `category_id` | Different existing category | Another available category | Accepted and displayed correctly | Medium |
| EP-CAT-I01 | `category_id` | Missing/unselected category | Empty category | Rejected | High |
| EP-CAT-I02 | `category_id` | Non-existing category | `999999` | Rejected | High |
| EP-CAT-I03 | `category_id` | Stale/deleted category | Deleted category ID | Rejected or prevented by refreshed category list | Medium |
| EP-OPT-V01 | `description` + `imageUrl` | Optional fields omitted | Empty description and image URL | Product creation/update still follows required-field rules | Medium |
| EP-OPT-R01 | `description` + `imageUrl` | Unsafe-looking optional text | Script-looking description/URL | Displayed safely or rejected; never executed | Medium |
| EP-OPT-R02 | `imageUrl` | Broken image URL | `https://invalid.invalid/image.png` | Product save is not blocked solely by broken image URL; UI handles image safely | Medium |
| EP-ISO-V01 | `other_products` | Update isolation | Product A updated, Product B observed | Product B remains unchanged | High |
| EP-ISO-V02 | `other_products` | Immediate UI update isolation | Product A updated, Product B observed before reload | Product B does not temporarily show Product A values | High |
| EP-LIST-V01 | `list_state` | List refresh after create | New product row appears | UI reflects created product | High |
| EP-LIST-V02 | `list_state` | List refresh after update | Updated row appears once | UI reflects update without duplicate row | High |
| EP-LIST-V03 | `list_state` | List refresh after delete | Deleted row absent | UI reflects deletion | High |

## Domain Testing Coverage Targets

| Target | Classes Covered |
| --- | --- |
| CRUD happy path | EP-OP-V01, EP-OP-V02, EP-OP-V03, EP-OP-V04, EP-ACTOR-V01 |
| Required field validation | EP-NAME-I01, EP-NAME-I02, EP-PRICE-I01, EP-CAT-I01 |
| Numeric price validation | EP-PRICE-V01, EP-PRICE-V02, EP-PRICE-I02, EP-PRICE-I03, EP-PRICE-I04 |
| Category integrity | EP-CAT-V01, EP-CAT-V02, EP-CAT-I02, EP-CAT-I03 |
| Authorization | EP-ACTOR-I01, EP-ACTOR-I02, EP-OP-I02 |
| Target product correctness | EP-ID-V01, EP-ID-I01, EP-ID-I02, EP-ISO-V01 |
| UI list consistency | EP-LIST-V01, EP-LIST-V02, EP-LIST-V03 |
| Optional/risky display data | EP-OPT-V01, EP-OPT-R01, EP-OPT-R02, EP-NAME-R01 |

## Assumptions For Test Design

- Admin UI is the primary functional testing surface, but API-oriented invalid domains are kept as design cases when UI cannot create the input directly.
- Exact validation message text is not asserted because FR-15 does not specify exact wording.
- ASCII strings are used for length-boundary tests to avoid ambiguity about Unicode character counting.
- `description` and `imageUrl` are treated as optional because FR-15 only defines required constraints for name, price, and category.
- Duplicate product names are exploratory because FR-15 does not require product name uniqueness.

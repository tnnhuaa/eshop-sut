# FR-06 Domain Model

## Test Basis

- Requirement ID: FR-06.
- Feature: Product Detail View.
- Platform: Web User.
- Primary source: `README.md` FR-06.
- Supporting global UI source: FR-21 price formatting and general display consistency.

## Scope

This domain model covers test design for viewing product detail and adding a selected quantity to the cart. It does not execute tests or confirm bugs; execution is recorded separately in `05-test-execution.md`.

## Preconditions

| ID | Precondition | Rationale |
| --- | --- | --- |
| PRE-01 | Backend is running and seeded with products. | Product detail depends on `GET /api/products/:id`. |
| PRE-02 | Web User app is running. | FR-06 is tested on Web User. |
| PRE-03 | At least one existing product is available. | Positive detail-view tests require valid product data. |
| PRE-04 | Cart is initially empty or current cart state is recorded. | Add-to-cart expected result needs a known baseline. |
| PRE-05 | User may be unauthenticated. | SRS does not require login to view detail or add to cart. |

## Outputs / Observations

| Output ID | Output / Observation | Expected Behavior |
| --- | --- | --- |
| OUT-01 | Product detail page content | Shows large image, name, price, description, and category. |
| OUT-02 | Quantity input behavior | Accepts only positive integers with minimum value 1. |
| OUT-03 | Add-to-cart result | Product is added to cart with selected valid quantity. |
| OUT-04 | Visual feedback | Shows visible confirmation or cart badge/count update. |
| OUT-05 | Error / not-found handling | Non-existing product should not crash the page. |
| OUT-06 | Safe rendering | HTML/script-looking data is displayed as text, not executed. |

## Business Rules

| Rule ID | Rule | Source / Assumption |
| --- | --- | --- |
| BR-01 | Product detail must show image, name, price, description, and category. | FR-06. |
| BR-02 | Quantity must be a positive integer. | FR-06. |
| BR-03 | Minimum valid quantity is 1. | FR-06. |
| BR-04 | Add to cart should show visual feedback. | FR-06. |
| BR-05 | Price should use `₫` and thousands separators. | FR-21 global UI requirement. |
| BR-06 | One valid click on Add to Cart should be enough to add the item. | Test design assumption from normal button semantics; tracked as FR06-GAP-07. |
| BR-07 | Category should be human-readable, not only an internal ID. | Test design assumption; tracked as FR06-GAP-02. |
| BR-08 | Non-existing product should show a clear message and not crash. | Test design assumption; tracked as FR06-GAP-01. |

## Input Variables

| Variable | Type | Source | Valid Domain | Invalid / Risk Domain | Related Gap |
| --- | --- | --- | --- | --- | --- |
| `product_id` | Identifier | URL `/product/:id` | Existing product ID | Missing, non-existing, non-numeric, negative, decimal, very large | FR06-GAP-01 |
| `product.imageUrl` | String/URL | API product data | Reachable image URL | Empty, broken URL, non-image URL | FR06-GAP-09 |
| `product.name` | String | API product data | Non-empty visible text | Empty, very long, HTML/script-looking text | FR06-GAP-12 |
| `product.price` | Number/string | API product data | Positive numeric value | Missing, zero, negative, non-numeric, numeric string edge | FR06-GAP-10 |
| `product.description` | String | API product data | Visible text | Empty, very long, HTML/script-looking text | FR06-GAP-12 |
| `product.category` | String/ID | API product data | Human-readable existing category | Missing, deleted category, internal ID only | FR06-GAP-02 |
| `quantity` | Integer input | UI quantity field | Integer `>= 1` | Empty, 0, negative, decimal, text, spaces, scientific notation, very large | FR06-GAP-03/04/05 |
| `add_action` | User action | Add-to-cart button | Single click with valid data | Double click, invalid quantity, missing product | FR06-GAP-06/07/08 |

## Equivalence Partitions

### Product Identifier

| Class ID | Variable | Partition | Representative Value | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| EP-PID-V01 | `product_id` | Existing seeded product ID | `1` | Product detail displayed | High |
| EP-PID-I01 | `product_id` | Non-existing numeric ID | `999999` | Not-found message; no crash | High |
| EP-PID-I02 | `product_id` | Non-numeric ID | `abc` | Error/not-found handling; no crash | Medium |
| EP-PID-I03 | `product_id` | Negative ID | `-1` | Error/not-found handling; no crash | Medium |

### Product Data Display

| Class ID | Variable | Partition | Representative Value | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| EP-DATA-V01 | Product data | All required fields present | Seeded product `iPhone 15 Pro Max` | Image, name, price, description, category visible | High |
| EP-DATA-I01 | Category | Category missing or internal-only | product has only `category_id` | Human-readable category should be shown or gap documented | High |
| EP-DATA-I02 | Image URL | Broken image URL | `https://invalid.invalid/image.png` | Page layout remains usable | Medium |
| EP-DATA-I03 | Text fields | HTML/script-looking name/description | `<script>alert(1)</script>` | Text displayed safely, no execution | High |
| EP-DATA-I04 | Price | Numeric string from API | `"28000000"` | Price still displayed as formatted money | Medium |

### Quantity

| Class ID | Variable | Partition | Representative Value | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| EP-QTY-V01 | `quantity` | Minimum valid integer | `1` | Accepted; add one unit | High |
| EP-QTY-V02 | `quantity` | Valid integer above minimum | `2` | Accepted; add selected quantity | High |
| EP-QTY-I01 | `quantity` | Zero | `0` | Rejected; cart unchanged | High |
| EP-QTY-I02 | `quantity` | Negative integer | `-1` | Rejected; cart unchanged | High |
| EP-QTY-I03 | `quantity` | Decimal | `1.5` | Rejected; cart unchanged | High |
| EP-QTY-I04 | `quantity` | Text | `abc` | Rejected; cart unchanged | High |
| EP-QTY-I05 | `quantity` | Empty | empty | Rejected; cart unchanged | High |
| EP-QTY-I06 | `quantity` | Spaces | spaces only | Rejected; cart unchanged | Medium |
| EP-QTY-I07 | `quantity` | Scientific notation | `1e2` | Rejected or safely normalized only if explicitly supported | Medium |
| EP-QTY-R01 | `quantity` | Very large integer | `999999999` | Robustness observation; should not crash | Medium |

### Add-To-Cart Action

| Class ID | Variable | Partition | Representative Value | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| EP-ACT-V01 | `add_action` | Valid product + valid quantity + one click | product `1`, quantity `1` | Cart updated and feedback visible | High |
| EP-ACT-V02 | `add_action` | Same product added twice | product `1`, quantity `1` twice | Existing cart quantity increases, no duplicate row | Medium |
| EP-ACT-I01 | `add_action` | Invalid quantity | quantity `0` | Cart unchanged and validation/error shown | High |
| EP-ACT-I02 | `add_action` | Missing/non-existing product | product `999999` | Add action unavailable or safely rejected | Medium |

## Domain Testing Coverage Targets

| Target | Classes Covered |
| --- | --- |
| Valid detail display | EP-PID-V01, EP-DATA-V01, EP-DATA-I04 |
| Not-found and invalid route | EP-PID-I01, EP-PID-I02, EP-PID-I03 |
| Required field completeness | EP-DATA-V01, EP-DATA-I01 |
| Safe display / robustness | EP-DATA-I02, EP-DATA-I03 |
| Quantity valid/invalid partitions | EP-QTY-V01, EP-QTY-V02, EP-QTY-I01..I07, EP-QTY-R01 |
| Add-to-cart integration | EP-ACT-V01, EP-ACT-V02, EP-ACT-I01, EP-ACT-I02 |

## Human Review Notes

| Review Item | Decision | Reason |
| --- | --- | --- |
| Treat `quantity=1` as the minimum valid boundary. | Accepted | Explicitly required by FR-06. |
| Treat decimal quantity as invalid. | Accepted | FR-06 says positive integer. |
| Treat very large quantity as a robustness value, not a specification boundary. | Accepted | No maximum quantity is specified. |
| Require exact toast text. | Rejected | SRS allows toast notification or badge update but gives no exact wording. |
| Require category name rather than ID. | Modified | Kept as test design assumption because SRS says category but not display format. |
| Add tests for non-existing product ID. | Added manually | Important requirement gap and common route negative class. |

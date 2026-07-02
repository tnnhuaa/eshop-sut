# FR-15 Product Management CRUD - Requirement Analysis

## Requirement Source

* Primary test basis: `README.md` - FR-15 Product Management CRUD.

* Supporting test basis: FR-12 Access Control, FR-14 Category CRUD, FR-16 Product CSV Import, FR-21/FR-22 GUI requirements.

* Platform under test: Admin Web + API.

* Relevant implementation surfaces for later verification:

  * Admin UI tab: Products in `frontend-admin/src/App.jsx`

  * APIs: `GET /api/products`, `POST /api/products`, `PUT /api/products/:id`, `DELETE /api/products/:id`

  * Category source: `GET /api/categories`

## Requirement Summary

FR-15 requires Admin to create, view, update, and delete products, with validation of product name, price, and category.

| Requirement Item  | Expected Behavior From SRS    | Testable? | Notes                                             |
| ----------------- | ----------------------------- | --------- | ------------------------------------------------- |
| Create product    | Admin can add product         | Yes       | Need valid and invalid input classes.             |
| View products     | Admin can view product list   | Yes       | Need check after create/update/delete.            |
| Update product    | Admin can edit product        | Yes       | Must verify only selected product changes.        |
| Delete product    | Admin can delete product      | Yes       | Need clarify confirmation and dependencies.       |
| Name required     | Empty name rejected           | Yes       | Also test whitespace-only.                        |
| Name max length   | Maximum 255 characters        | Yes       | Boundary values: 254, 255, 256.                   |
| Price required    | Missing price rejected        | Yes       | UI/API validation both relevant.                  |
| Price positive    | Price must be `> 0`           | Yes       | Boundary values: -1, 0, 0.01, 1.                  |
| Category required | Must select existing category | Yes       | Need category list and invalid category ID tests. |
| Update isolation  | Only selected product changes | Yes       | Critical regression test after edit.              |

## Actors and Preconditions

| Actor/Condition      | Requirement Interpretation                          |
| -------------------- | --------------------------------------------------- |
| Admin                | Only admin should create/update/delete products.    |
| Non-admin user       | Should not access product management or write APIs. |
| Unauthenticated user | Should not access product management or write APIs. |
| Existing category    | Required for valid product creation/update.         |
| Existing product     | Required for update/delete positive tests.          |

## Input Variables

| Variable      | Source                       | Valid Domain             | Invalid/Risky Domain                                                       | Requirement Basis                         |
| ------------- | ---------------------------- | ------------------------ | -------------------------------------------------------------------------- | ----------------------------------------- |
| `name`        | Admin form/API               | Non-empty, length 1..255 | Empty, whitespace-only, length 256+, HTML/script-looking text              | FR-15 name constraints                    |
| `price`       | Admin form/API               | Numeric `> 0`            | Missing, empty, zero, negative, non-numeric, decimal ambiguity, very large | FR-15 price constraints                   |
| `category_id` | Admin form/API               | Existing category ID     | Missing, non-existing, deleted category, non-numeric                       | FR-15 category constraint                 |
| `description` | Admin form/API               | Text                     | Empty, very long text, HTML/script-looking text                            | Field exists but no FR-15 validation rule |
| `imageUrl`    | Admin form/API               | URL or image path        | Empty, broken URL, non-image URL, unsafe-looking URL                       | Field exists but no FR-15 validation rule |
| `product_id`  | API path/UI selected product | Existing product ID      | Missing, non-existing, non-numeric, deleted product                        | CRUD operation target                     |
| `actor_role`  | Token/session                | Admin                    | User, missing token, tampered token                                        | FR-12 access control                      |

## Requirement Gaps and Ambiguities

| Gap ID      | Missing / Ambiguous Requirement                                                                                                           | Why It Matters For Testing                                                                                                                     | Temporary Assumption For Test Design                                                                  | Verification / Follow-up                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| FR15-GAP-01 | FR-15 does not explicitly repeat admin authorization rules for product write APIs.                                                        | FR-12 covers this globally, but FR-15 tests must still include role/security cases.                                                            | Product create/update/delete require valid admin token.                                               | Test unauthenticated and user-token write attempts if feasible.                 |
| FR15-GAP-02 | Requirement does not specify whether validation must happen on frontend, backend, or both.                                                | UI may block invalid input while API still accepts it, causing security/data integrity bugs.                                                   | Backend must enforce validation; frontend validation alone is insufficient.                           | Test both Admin UI and direct API where possible.                               |
| FR15-GAP-03 | Whitespace-only product name is not specified.                                                                                            | `"   "` is non-empty technically but invalid for users.                                                                                        | Trimmed empty name should be rejected.                                                                | Test spaces-only name.                                                          |
| FR15-GAP-04 | Product name length counting is not defined for Unicode/Vietnamese characters.                                                            | Length may differ by code units, characters, or bytes.                                                                                         | Count visible characters for normal Vietnamese text; use ASCII for boundary tests to avoid ambiguity. | Use generated ASCII strings of length 255 and 256.                              |
| FR15-GAP-05 | Price decimal handling is not specified.                                                                                                  | E-commerce prices in VND are usually integer, but requirement only says positive number.                                                       | Positive decimals are acceptable unless UI/API rounds unexpectedly; include as exploratory case.      | Test `0.01`, `1.5`, and `100000`.                                               |
| FR15-GAP-06 | No upper bound for price is specified.                                                                                                    | Very large numbers can overflow UI totals or display badly.                                                                                    | Treat very large positive price as robustness test, not strict failure unless app breaks.             | Test high value such as `999999999999`.                                         |
| FR15-GAP-07 | Required fields for `description` and `imageUrl` are not specified.                                                                       | UI has these fields but FR-15 only requires name, price, category.                                                                             | `description` and `imageUrl` are optional unless another requirement says otherwise.                  | Test create product without description/image URL and record observed behavior. |
| FR15-GAP-08 | Image URL validation is not specified.                                                                                                    | Broken or non-image URLs affect listing/detail display.                                                                                        | Do not fail create solely for broken image URL; verify UI handles display safely.                     | Create product with broken URL and view listing/detail.                         |
| FR15-GAP-09 | Requirement does not specify uniqueness of product name.                                                                                  | Duplicate products may be acceptable or confusing.                                                                                             | Duplicate names are allowed unless SRS says unique.                                                   | Test duplicate name as exploratory, not strict bug.                             |
| FR15-GAP-10 | Requirement does not define behavior for non-existing product update/delete.                                                              | Negative API class needs expected result.                                                                                                      | Return clear error and no data change.                                                                | Test `PUT/DELETE /api/products/999999`.                                         |
| FR15-GAP-11 | Requirement does not define delete confirmation or undo behavior.                                                                         | Deleting products is destructive; UI requirements may expect confirmation for dangerous actions, but only cart explicitly says confirm dialog. | Confirmation is desirable but not mandatory for FR-15 unless global UI rules say so.                  | Record as UX gap if no confirmation.                                            |
| FR15-GAP-12 | Requirement does not define behavior when deleting a product referenced by cart/order history.                                            | Deletion may break existing orders, carts, or reports.                                                                                         | Out of Day 2 strict scope unless a simple reproduction exists.                                        | Add as risk for integration testing.                                            |
| FR15-GAP-13 | Requirement does not state whether product list must refresh after create/update/delete.                                                  | UI can show stale data even if API succeeds.                                                                                                   | Product list should reflect the operation immediately or after clear reload.                          | Verify UI list after each operation.                                            |
| FR15-GAP-14 | Requirement says only the edited product changes, but does not define how to detect accidental changes to other fields/products.          | This is a high-value regression check.                                                                                                         | Record before/after values for at least two products; only target product should change.              | Test update one product name/price/category and compare another product.        |
| FR15-GAP-15 | Requirement does not define error message text for invalid inputs.                                                                        | Exact message assertions may be too brittle.                                                                                                   | Require visible/JSON error explaining the invalid field; do not require exact wording.                | Capture actual UI/API error.                                                    |
| FR15-GAP-16 | Category requirement does not define behavior if category list is empty.                                                                  | Admin cannot create valid product if no categories exist.                                                                                      | At least one seeded category exists; empty-category state is out of scope unless reachable.           | Verify seeded categories before product tests.                                  |
| FR15-GAP-17 | Product CRUD APIs in `api_specification.md` are not shown as `/api/admin/*`, while FR-12 says data-changing product APIs need admin role. | Endpoint naming and authorization expectation can conflict.                                                                                    | Regardless of path, `POST/PUT/DELETE /api/products` require admin authorization by FR-12.             | Test API auth behavior; document if implementation allows public writes.        |

## Requirement Gap Coverage Checklist

| Area                             | Covered By Gap IDs                    |
| -------------------------------- | ------------------------------------- |
| Authorization/security           | FR15-GAP-01, FR15-GAP-17              |
| Validation location and messages | FR15-GAP-02, FR15-GAP-15              |
| Name domain                      | FR15-GAP-03, FR15-GAP-04, FR15-GAP-09 |
| Price domain                     | FR15-GAP-05, FR15-GAP-06              |
| Category domain                  | FR15-GAP-16                           |
| Optional fields/data quality     | FR15-GAP-07, FR15-GAP-08              |
| CRUD negative behavior           | FR15-GAP-10, FR15-GAP-11, FR15-GAP-12 |
| UI refresh and update isolation  | FR15-GAP-13, FR15-GAP-14              |


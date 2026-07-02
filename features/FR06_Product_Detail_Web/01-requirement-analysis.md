# FR-06 Product Detail View - Requirement Analysis

## Requirement Source

* Primary test basis: `README.md` - FR-06 Product Detail View.

* Supporting test basis: FR-05 product listing, FR-07 cart behavior, FR-21/FR-22 GUI requirements where the product detail page uses shared UI controls.

* Platform under test: Web User.

* Relevant implementation surfaces for later verification:

  * UI route: `/product/:id`

  * Frontend file: `frontend-web/src/pages/ProductDetail.jsx`

  * API: `GET /api/products/:id`

  * Cart state: `frontend-web/src/context/CartContext.jsx`

## Requirement Summary

FR-06 requires the product detail page to display complete product information and support adding a selected quantity to the cart.

| Requirement Item    | Expected Behavior From SRS                             | Testable? | Notes                                                                                                                |
| ------------------- | ------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------- |
| Product image       | Display a large product image                          | Yes       | Need visual check and broken-image behavior check.                                                                   |
| Product name        | Display product name                                   | Yes       | Source should be product returned by API.                                                                            |
| Product price       | Display product price                                  | Yes       | FR-21 adds money-format consistency using `₫` and thousands separators.                                              |
| Product description | Display product description                            | Yes       | Need check for empty/long/special text if product data can be created by admin.                                      |
| Product category    | Display category                                       | Partly    | SRS says display category, but API appears to return `category_id`; whether name or ID is expected is not specified. |
| Quantity input      | Accept only positive integers                          | Yes       | Main Domain Testing and BVA target.                                                                                  |
| Minimum quantity    | Minimum value is 1                                     | Yes       | Boundary values: 0, 1, 2.                                                                                            |
| Add to cart         | Button adds selected product to cart                   | Yes       | Requires checking cart state after action.                                                                           |
| Visual feedback     | Show toast notification or cart badge update after add | Yes       | SRS allows either toast or badge update.                                                                             |

## Actors and Preconditions

| Actor/Condition            | Requirement Interpretation                                                                                                                     |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Guest user                 | SRS does not require login to view product details or add to cart. Assume guest can view and add to cart unless implementation says otherwise. |
| Existing product           | Product detail must show all required fields.                                                                                                  |
| Non-existing product ID    | Requirement does not specify expected behavior; record as gap and verify.                                                                      |
| Product with abnormal data | Product can be created by admin, so invalid/edge data may later reach the detail page.                                                         |

## Input Variables

| Variable                           | Source                  | Valid Domain                    | Invalid/Risky Domain                                                   | Requirement Basis                                |
| ---------------------------------- | ----------------------- | ------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------ |
| `product_id`                       | URL path `/product/:id` | Existing product ID             | Missing, non-existing, non-numeric, negative, decimal, very large ID   | API route and detail page route                  |
| `product.imageUrl`                 | Product data            | Reachable image URL             | Empty, broken URL, unsafe-looking URL                                  | Image display requirement                        |
| `product.name`                     | Product data            | Non-empty string                | Empty, very long text, HTML/script-looking text                        | Name display requirement and safe UI expectation |
| `product.price`                    | Product data            | Positive numeric value          | Missing, zero, negative, non-numeric, numeric string, very large value | Price display requirement and FR-21 money format |
| `product.description`              | Product data            | Text description                | Empty, very long text, HTML/script-looking text                        | Description display requirement                  |
| `product.category` / `category_id` | Product data            | Existing category shown clearly | Missing category, deleted category, ID shown instead of name           | Category display requirement                     |
| `quantity`                         | Quantity input          | Positive integer, minimum 1     | Empty, 0, negative, decimal, text, spaces, very large number           | Quantity requirement                             |

## Requirement Gaps and Ambiguities

| Gap ID      | Missing / Ambiguous Requirement                                                                               | Why It Matters For Testing                                                                                     | Temporary Assumption For Test Design                                                               | Verification / Follow-up                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| FR06-GAP-01 | Expected behavior for a non-existing product ID is not defined.                                               | Without this, a blank page, generic error, 404 page, or friendly message could all be interpreted differently. | The page should show a clear "product not found" message and should not crash.                     | Test `/product/999999`, `/product/abc`, and API `GET /api/products/:id`.                                              |
| FR06-GAP-02 | The requirement says display category, but does not state whether category name or category ID is acceptable. | Displaying `1` technically uses category data but is not meaningful to users.                                  | Category should be displayed as a human-readable category name.                                    | Compare product API response and UI display; check if category lookup exists.                                         |
| FR06-GAP-03 | Quantity input does not specify handling of decimal input.                                                    | HTML number input can still allow `1.5`; backend/cart may parse it unexpectedly.                               | Decimal values are invalid because requirement says positive integer.                              | Test `1.5`, `1.0`, and `01`.                                                                                          |
| FR06-GAP-04 | Quantity input does not specify handling of text, empty value, spaces, pasted values, or scientific notation. | These are common input classes for domain testing.                                                             | Non-integer or empty values must be rejected before adding to cart.                                | Test empty, `abc`, whitespace, `1e2`, `+1`.                                                                           |
| FR06-GAP-05 | No maximum quantity or stock availability rule is specified.                                                  | Very large quantity can cause unrealistic cart totals, overflow, or bad UX.                                    | No stock limit exists in SRS; still test a large value as a robustness/risk case.                  | Test a very large value such as `999999999`; mark result as robustness observation, not strict bug unless app breaks. |
| FR06-GAP-06 | The exact required visual feedback is flexible: toast notification or badge update.                           | A test must know what evidence counts as pass.                                                                 | Any visible confirmation within 2 seconds or cart count update is acceptable.                      | Capture before/after add-to-cart evidence.                                                                            |
| FR06-GAP-07 | The requirement does not state whether the first click on Add to Cart must immediately add the item.          | Add-to-cart is normally a single user action; delayed or ignored clicks are user-visible defects.              | One click on a valid product and quantity should add to cart and show feedback.                    | Execute single-click add-to-cart test.                                                                                |
| FR06-GAP-08 | Requirement does not specify cart behavior when the same product is added multiple times from detail.         | FR-07 says same product should increase quantity, not create duplicate row; FR-06 depends on cart integration. | Repeated add from detail should increase existing quantity in cart.                                | Verify with FR-07 cross-reference; record under FR-06 only if defect is triggered from detail page.                   |
| FR06-GAP-09 | Requirement does not specify error handling when product image URL is broken.                                 | Image display is required, but real product data can contain broken URLs.                                      | Broken image should not break page layout; fallback is preferred but not explicitly required.      | Create or use product with invalid image URL via admin/API later.                                                     |
| FR06-GAP-10 | Price formatting requirement is in FR-21, not FR-06.                                                          | Product detail must still follow global UI requirement.                                                        | Detail price should use `₫` and thousands separators.                                              | Check displayed price for all seeded products, including numeric string price cases.                                  |
| FR06-GAP-11 | Requirement does not define loading state or API failure state for product detail.                            | Users need feedback during slow or failed API calls; test execution needs expected behavior.                   | Loading text is acceptable while fetching; API failure should not leave an infinite loading state. | Simulate backend stopped or invalid endpoint if feasible.                                                             |
| FR06-GAP-12 | Requirement does not state whether product data should be displayed safely if it contains HTML/script text.   | Admin can create product data, so XSS-like content may reach product detail.                                   | React text rendering should display such content as text, not execute HTML.                        | Create product with HTML-looking name/description in FR-15 setup and view detail.                                     |

## Requirement Gap Coverage Checklist

| Area                                 | Covered By Gap IDs                                 |
| ------------------------------------ | -------------------------------------------------- |
| Missing product and route behavior   | FR06-GAP-01                                        |
| Product data completeness            | FR06-GAP-02, FR06-GAP-09, FR06-GAP-10, FR06-GAP-12 |
| Quantity domain and boundary         | FR06-GAP-03, FR06-GAP-04, FR06-GAP-05              |
| Add-to-cart feedback and integration | FR06-GAP-06, FR06-GAP-07, FR06-GAP-08              |
| Loading/error robustness             | FR06-GAP-11                                        |


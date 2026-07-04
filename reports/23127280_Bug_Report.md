# HW02 Bug Report

## Bugs on the GitHub Issues page

![](https://res.cloudinary.com/dlmpl2oi1/image/upload/v1783179265/Bugs_on_the_GitHub_Issues_page_2_giey26.png)
![](https://res.cloudinary.com/dlmpl2oi1/image/upload/v1783179265/Bugs_on_the_GitHub_Issues_page_1_jkrl7w.png)

## Bug Summary

| Bug ID | Feature | Title | Severity | Status | GitHub Issue | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-FR06-001 | FR-06 Product Detail View | Add to cart requires two clicks on product detail page | Major | Open | [#1](https://github.com/tnnhuaa/eshop-sut/issues/1) | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-001.png`; `BUG-FR06-001_2.png` |
| BUG-FR06-002 | FR-06 Product Detail View | Product detail page does not display product category | Medium | Open | [#2](https://github.com/tnnhuaa/eshop-sut/issues/2) | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-002.png` |
| BUG-FR06-003 | FR-06 Product Detail View / Cart Integration | Adding the same product creates duplicate cart rows | Medium | Open | [#3](https://github.com/tnnhuaa/eshop-sut/issues/3) | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-003.png` |
| BUG-FR06-004 | FR-06 Product Detail View | Quantity `0` is accepted on product detail page | Major | Open | [#4](https://github.com/tnnhuaa/eshop-sut/issues/4) | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-004.png` |
| BUG-FR06-005 | FR-06 Product Detail View | Negative quantity is accepted and creates invalid cart total | Major | Open | [#5](https://github.com/tnnhuaa/eshop-sut/issues/5) | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-005.png` |
| BUG-FR06-006 | FR-06 Product Detail View | Empty quantity is accepted and creates invalid cart data | Major | Open | [#6](https://github.com/tnnhuaa/eshop-sut/issues/6) | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-006.png` |
| BUG-FR06-007 | FR-06 Product Detail View | Empty value after whitespace input can lead to `NaN` cart value | Major | Open | [#7](https://github.com/tnnhuaa/eshop-sut/issues/7) | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-007.png` |
| BUG-FR06-008 | FR-06 Product Detail View | Decimal quantity is accepted and parsed incorrectly | Major | Open | [#8](https://github.com/tnnhuaa/eshop-sut/issues/8) | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-008.png` |
| BUG-FR06-009 | FR-06 Product Detail View | Scientific notation quantity is accepted and parsed incorrectly | Major | Open | [#9](https://github.com/tnnhuaa/eshop-sut/issues/9) | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-009.png`; `BUG-FR06-009_2.png` |
| BUG-FR10-001 | FR-10 Order State Machine | User can cancel a shipping order from the Web User order history | Major | Open | [#10](https://github.com/tnnhuaa/eshop-sut/issues/10) | `features/FR10_Order_State_Machine/evidence/BUG-FR10-001-01.png`; `BUG-FR10-001-02.png` |
| BUG-FR10-002 | FR-10 Order State Machine | Admin can mark a canceled final-state order as delivered | Major | Open | [#11](https://github.com/tnnhuaa/eshop-sut/issues/11) | `features/FR10_Order_State_Machine/evidence/BUG-FR10-002-01.png`; `BUG-FR10-002-02.png` |
| BUG-FR15-001 | FR-15 Product CRUD Admin | Whitespace-only product name is accepted | Major | Open | [#12](https://github.com/tnnhuaa/eshop-sut/issues/12) | `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-001.png` |
| BUG-FR15-002 | FR-15 Product CRUD Admin | Product can be created without price | Major | Open | [#13](https://github.com/tnnhuaa/eshop-sut/issues/13) | `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-002.png` |
| BUG-FR15-003 | FR-15 Product CRUD Admin | Non-positive product prices are accepted | Major | Open | [#14](https://github.com/tnnhuaa/eshop-sut/issues/14) | `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-003.png` |
| BUG-FR15-004 | FR-15 Product CRUD Admin | Product name longer than 255 characters is accepted | Major | Open | [#15](https://github.com/tnnhuaa/eshop-sut/issues/15) | `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-004.png` |
| BUG-FR15-005 | FR-15 Product CRUD Admin | Updating one product temporarily changes all product names in Admin UI | Major | Open | [#16](https://github.com/tnnhuaa/eshop-sut/issues/16) | `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-005-1.png`; `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-005-2.png`; `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-005-3.png` |
| REVIEW-FR15-006 | FR-15 Product CRUD Admin | Decimal price is accepted and displayed in product listing | Medium | Open / Needs confirmation | [#17](https://github.com/tnnhuaa/eshop-sut/issues/17) | `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-006.png` |
| BUG-FR05M-001 | FR-05-M Product Listing and Search Mobile | Search keyword with leading and trailing spaces is not trimmed | Medium | Open | [#18](https://github.com/tnnhuaa/eshop-sut/issues/18) | `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-001-1.jpg`; `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-001-2.jpg` |
| BUG-FR05M-002 | FR-05-M Product Listing and Search Mobile | Search with no matching products does not show an empty state | Major | Open | [#19](https://github.com/tnnhuaa/eshop-sut/issues/19) | `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-002.jpg` |
| BUG-FR05M-003 | FR-05-M Product Listing and Search Mobile | Returning to Home from header keeps previous search results | Medium | Open | [#20](https://github.com/tnnhuaa/eshop-sut/issues/20) | GitHub Issue [#20](https://github.com/tnnhuaa/eshop-sut/issues/20) |
| BUG-FR05M-004 | FR-05-M Product Listing and Search Mobile | Very long search keyword breaks the mobile result-label layout | Medium | Open | [#21](https://github.com/tnnhuaa/eshop-sut/issues/21) | `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-004.jpg` |

## Environment

- App: Web User
- Main page under test: Product Detail
- Main route: `/product/1`
- SUT commit hash: `85af3ba875c88283615e22cb108f13e2fccaf0e9`
- Execution type: Manual UI testing
- Evidence storage: `features/FR06_Product_Detail_Web/evidence/`

## Detailed Bug Reports

### BUG-FR06-001: Add to cart requires two clicks on product detail page

- Feature: FR-06 Product Detail View
- Related test cases: FR06-DT-006, FR06-DT-015
- Severity: Major
- Priority: High
- GitHub issue: [#1](https://github.com/tnnhuaa/eshop-sut/issues/1)
- Preconditions: Web User app and backend are running; product ID `1` exists.
- Steps to reproduce:
  1. Open `/product/1`.
  2. Enter quantity `1`.
  3. Click **Add to Cart** once.
  4. Open the cart page.
- Expected result: The product is added to the cart after one valid click and the user receives visible feedback.
- Actual result: The first click does not add the product. The product is added only after clicking **Add to Cart** a second time.
- Evidence:
  - `features/FR06_Product_Detail_Web/evidence/BUG-FR06-001.png`
  - `features/FR06_Product_Detail_Web/evidence/BUG-FR06-001_2.png`
- Notes: This issue affects other add-to-cart tests, so later quantity tests used the known second-click workaround to isolate quantity validation behavior.

### BUG-FR06-002: Product detail page does not display product category

- Feature: FR-06 Product Detail View
- Related test case: FR06-DT-001
- Severity: Medium
- Priority: Medium
- GitHub issue: [#2](https://github.com/tnnhuaa/eshop-sut/issues/2)
- Preconditions: Web User app and backend are running; product ID `1` exists.
- Steps to reproduce:
  1. Open `/product/1`.
  2. Observe product information on the detail page.
- Expected result: Product image, name, price, description, and category are visible.
- Actual result: The page shows image, name, price, and description, but no visible category information is shown.
- Evidence: `features/FR06_Product_Detail_Web/evidence/BUG-FR06-002.png`
- Notes: FR-06 requires category display. The requirement does not specify whether category name or ID is required, but no category information is visible.

### BUG-FR06-003: Adding the same product creates duplicate cart rows

- Feature: FR-06 Product Detail View / FR-07 Cart Integration
- Related test case: FR06-DT-008
- Severity: Medium
- Priority: Medium
- GitHub issue: [#3](https://github.com/tnnhuaa/eshop-sut/issues/3)
- Preconditions: Web User app and backend are running; product ID `1` exists.
- Steps to reproduce:
  1. Open `/product/1`.
  2. Enter quantity `1`.
  3. Click **Add to Cart** until the product is added.
  4. Return to `/product/1`.
  5. Enter quantity `2`.
  6. Click **Add to Cart** until the product is added.
  7. Open the cart page.
- Expected result: The existing cart row for the same product increases from quantity `1` to `3`.
- Actual result: The cart shows duplicate rows for the same product instead of merging quantity.
- Evidence: `features/FR06_Product_Detail_Web/evidence/BUG-FR06-003.png`
- Notes: This is triggered from FR-06 product detail but is related to cart behavior defined by FR-07.

### BUG-FR06-004: Quantity `0` is accepted on product detail page

- Feature: FR-06 Product Detail View
- Related test case: FR06-BVA-001
- Severity: Major
- Priority: High
- GitHub issue: [#4](https://github.com/tnnhuaa/eshop-sut/issues/4)
- Preconditions: Web User app and backend are running; product ID `1` exists.
- Steps to reproduce:
  1. Open `/product/1`.
  2. Enter quantity `0`.
  3. Click **Add to Cart** until the product is added.
  4. Open the cart page.
- Expected result: Quantity below minimum `1` is rejected and the cart remains unchanged.
- Actual result: Quantity `0` is accepted and added to the cart.
- Evidence: `features/FR06_Product_Detail_Web/evidence/BUG-FR06-004.png`
- Notes: This violates the explicit FR-06 minimum quantity boundary.

### BUG-FR06-005: Negative quantity is accepted and creates invalid cart total

- Feature: FR-06 Product Detail View
- Related test case: FR06-BVA-004
- Severity: Major
- Priority: High
- GitHub issue: [#5](https://github.com/tnnhuaa/eshop-sut/issues/5)
- Preconditions: Web User app and backend are running; product ID `1` exists.
- Steps to reproduce:
  1. Open `/product/1`.
  2. Enter quantity `-1`.
  3. Click **Add to Cart** until the product is added.
  4. Open the cart page.
- Expected result: Negative quantity is rejected and the cart remains unchanged.
- Actual result: Negative quantity is accepted and can create negative cart quantity/total.
- Evidence: `features/FR06_Product_Detail_Web/evidence/BUG-FR06-005.png`
- Notes: This is a high-risk quantity validation defect because it can corrupt cart totals.

### BUG-FR06-006: Empty quantity is accepted and creates invalid cart data

- Feature: FR-06 Product Detail View
- Related test case: FR06-DT-010
- Severity: Major
- Priority: High
- GitHub issue: [#6](https://github.com/tnnhuaa/eshop-sut/issues/6)
- Preconditions: Web User app and backend are running; product ID `1` exists.
- Steps to reproduce:
  1. Open `/product/1`.
  2. Clear the quantity field so it is empty.
  3. Click **Add to Cart** until the product is added.
  4. Open the cart page.
- Expected result: Empty quantity is rejected and the cart remains unchanged.
- Actual result: Empty quantity is accepted and can create invalid cart quantity/total.
- Evidence: `features/FR06_Product_Detail_Web/evidence/BUG-FR06-006.png`
- Notes: This is separated from whitespace because it is a direct empty-input class.

### BUG-FR06-007: Empty value after whitespace input can lead to `NaN` cart value

- Feature: FR-06 Product Detail View
- Related test case: FR06-DT-011
- Severity: Major
- Priority: High
- GitHub issue: [#7](https://github.com/tnnhuaa/eshop-sut/issues/7)
- Preconditions: Web User app and backend are running; product ID `1` exists.
- Steps to reproduce:
  1. Open `/product/1`.
  2. Try entering spaces into the quantity input.
  3. Observe that spaces are blocked or the field becomes empty.
  4. Click **Add to Cart** until the product is added.
  5. Open the cart page.
- Expected result: Spaces-only or empty-after-space quantity is rejected and the cart remains unchanged.
- Actual result: The resulting empty/invalid value can still be added and may produce invalid or `NaN` cart value.
- Evidence: `features/FR06_Product_Detail_Web/evidence/BUG-FR06-007.png`
- Notes: This issue is tracked separately from direct empty quantity because the user action begins with whitespace input.

### BUG-FR06-008: Decimal quantity is accepted and parsed incorrectly

- Feature: FR-06 Product Detail View
- Related test case: FR06-BVA-005
- Severity: Major
- Priority: High
- GitHub issue: [#8](https://github.com/tnnhuaa/eshop-sut/issues/8)
- Preconditions: Web User app and backend are running; product ID `1` exists.
- Steps to reproduce:
  1. Open `/product/1`.
  2. Enter quantity `1.5`.
  3. Click **Add to Cart** until the product is added.
  4. Open the cart page.
- Expected result: Decimal quantity is rejected because FR-06 only allows positive integer quantity.
- Actual result: Decimal quantity `1.5` is accepted and parsed as quantity `1` in the cart.
- Evidence: `features/FR06_Product_Detail_Web/evidence/BUG-FR06-008.png`
- Notes: This is a decimal input class and is tracked separately from scientific notation.

### BUG-FR06-009: Scientific notation quantity is accepted and parsed incorrectly

- Feature: FR-06 Product Detail View
- Related test case: FR06-DT-012
- Severity: Major
- Priority: High
- GitHub issue: [#9](https://github.com/tnnhuaa/eshop-sut/issues/9)
- Preconditions: Web User app and backend are running; product ID `1` exists.
- Steps to reproduce:
  1. Open `/product/1`.
  2. Enter quantity `1e2`.
  3. Click **Add to Cart** until the product is added.
  4. Open the cart page.
- Expected result: Scientific notation is rejected because FR-06 only allows positive integer quantity.
- Actual result: Scientific notation value `1e2` is accepted by the quantity input and parsed incorrectly as the leading integer value instead of being rejected.
- Evidence:
  - `features/FR06_Product_Detail_Web/evidence/BUG-FR06-009.png`
  - `features/FR06_Product_Detail_Web/evidence/BUG-FR06-009_2.png`
- Notes: This is a scientific-notation input class and is tracked separately from decimal input.

### BUG-FR10-001: User can cancel a shipping order from the Web User order history

- Feature: FR-10 Order State Machine
- Related test cases: FR10-DT-006, FR10-DT-021, FR10-BVA-002
- Severity: Major
- Priority: High
- GitHub issue: [#10](https://github.com/tnnhuaa/eshop-sut/issues/10)
- Preconditions: Web User app and backend are running; a normal user is logged in; at least one order exists with status `shipping` / `Đang giao`.
- Steps to reproduce:
  1. Log in to Web User as a normal user.
  2. Open Profile / Order History.
  3. Find an order whose status is `Đang giao`.
  4. Observe that the **Hủy đơn** button is visible.
  5. Click **Hủy đơn**.
  6. Observe the order status after the action.
- Expected result: User cannot cancel an order in `shipping` state. The UI should not show **Hủy đơn**, and the order should remain `Đang giao`.
- Actual result: Web User UI shows **Hủy đơn** for a shipping order. Clicking it succeeds and changes the order status to `Đã hủy`.
- Evidence:
  - `features/FR10_Order_State_Machine/evidence/BUG-FR10-001-01.png`
  - `features/FR10_Order_State_Machine/evidence/BUG-FR10-001-02.png`
- Notes: This violates the FR-10 boundary between `confirmed`, where user cancellation is still allowed, and `shipping`, where user cancellation should be forbidden.

### BUG-FR10-002: Admin can mark a canceled final-state order as delivered

- Feature: FR-10 Order State Machine
- Related test cases: FR10-DT-012, FR10-DT-021, FR10-DT-022, FR10-DT-023, FR10-BVA-004
- Severity: Major
- Priority: High
- GitHub issue: [#11](https://github.com/tnnhuaa/eshop-sut/issues/11)
- Preconditions: Admin Web app and backend are running; Admin is logged in; at least one order exists with status `canceled` / `Đã hủy`.
- Steps to reproduce:
  1. Log in to Admin Web.
  2. Open Order Management.
  3. Find an order whose status is `Đã hủy`.
  4. Observe that **Đánh dấu Đã giao** is visible.
  5. Click **Đánh dấu Đã giao**.
  6. Reopen Admin Order Management and Web User Order History.
- Expected result: `canceled` is a final state. Admin UI should not expose any outgoing transition from `Đã hủy`, and the order should remain `Đã hủy`.
- Actual result: Admin UI shows **Đánh dấu Đã giao** for a canceled order. Clicking it changes the order to `Đã giao`, and the changed state is visible from both Admin and Web User UI.
- Evidence:
  - `features/FR10_Order_State_Machine/evidence/BUG-FR10-002-01.png`
  - `features/FR10_Order_State_Machine/evidence/BUG-FR10-002-02.png`
  - `features/FR10_Order_State_Machine/evidence/BUG-FR10-002-03.png`
- Notes: This violates final-state protection in the FR-10 state machine.

### BUG-FR15-001: Whitespace-only product name is accepted

- Feature: FR-15 Product CRUD Admin
- Related test case: FR15-DT-008
- Severity: Major
- Priority: High
- GitHub issue: [#12](https://github.com/tnnhuaa/eshop-sut/issues/12)
- Preconditions: Admin Web and backend are running; Admin is logged in.
- Steps to reproduce:
  1. Open Admin Product Management.
  2. Create a product with name containing only spaces.
  3. Enter a valid positive price and select an existing category.
  4. Save the product.
- Expected result: Whitespace-only name is treated as empty after trimming and the product is rejected.
- Actual result: The product is accepted and appears in the Admin product list.
- Evidence: `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-001.png`
- Notes: FR-15 requires product name to be mandatory. A spaces-only value should not satisfy the required-name rule.

### BUG-FR15-002: Product can be created without price

- Feature: FR-15 Product CRUD Admin
- Related test cases: FR15-DT-025, FR15-BVA-007
- Severity: Major
- Priority: High
- GitHub issue: [#13](https://github.com/tnnhuaa/eshop-sut/issues/13)
- Preconditions: Admin Web and backend are running; Admin is logged in.
- Steps to reproduce:
  1. Open Admin Product Management.
  2. Enter a valid product name.
  3. Leave price empty.
  4. Select an existing category.
  5. Save the product.
- Expected result: Product is rejected because price is required.
- Actual result: Product is created and appears in the product list.
- Evidence: `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-002.png`
- Notes: Browser/UI validation is not sufficient because empty price still reaches the save behavior.

### BUG-FR15-003: Non-positive product prices are accepted

- Feature: FR-15 Product CRUD Admin
- Related test cases: FR15-BVA-008, FR15-BVA-009
- Severity: Major
- Priority: High
- GitHub issue: [#14](https://github.com/tnnhuaa/eshop-sut/issues/14)
- Preconditions: Admin Web and backend are running; Admin is logged in.
- Steps to reproduce:
  1. Open Admin Product Management.
  2. Create a product with valid name and category.
  3. Enter price `-1`, save, and observe the list.
  4. Repeat with price `0`.
- Expected result: Prices less than or equal to `0` are rejected because price must be positive (`> 0`).
- Actual result: Products with negative and zero prices are accepted and displayed.
- Evidence: `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-003.png`
- Notes: This violates the explicit positive-price boundary.

### BUG-FR15-004: Product name longer than 255 characters is accepted

- Feature: FR-15 Product CRUD Admin
- Related test cases: FR15-BVA-006, FR15-BVA-015
- Severity: Major
- Priority: High
- GitHub issue: [#15](https://github.com/tnnhuaa/eshop-sut/issues/15)
- Preconditions: Admin Web and backend are running; Admin is logged in.
- Steps to reproduce:
  1. Open Admin Product Management.
  2. Create or edit a product using a 256-character ASCII name.
  3. Enter a valid price and select an existing category.
  4. Save the product.
- Expected result: Product is rejected because the name exceeds the maximum 255-character limit.
- Actual result: The 256-character product name is accepted and displayed.
- Evidence: `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-004.png`
- Notes: This violates the upper boundary for product name length.

### BUG-FR15-005: Updating one product temporarily changes all product names in Admin UI

- Feature: FR-15 Product CRUD Admin
- Related test cases: FR15-DT-013, FR15-DT-019, FR15-DT-031, FR15-BVA-014
- Severity: Major
- Priority: High
- GitHub issue: [#16](https://github.com/tnnhuaa/eshop-sut/issues/16)
- Preconditions: Admin Web and backend are running; Admin is logged in; Product A and Product B exist with different names.
- Steps to reproduce:
  1. Open Admin Product Management.
  2. Record Product A and Product B names.
  3. Edit only Product A and save a new name.
  4. Observe the product list immediately after save.
  5. Reload the page and observe the product list again.
- Expected result: Only Product A changes. Product B and other products remain unchanged immediately after save and after reload.
- Actual result: Immediately after save, many rows display Product A's new name and Product B is hidden by the incorrect UI state. After reload, persisted data shows only Product A changed.
- Evidence:
  - `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-005-1.png`
  - `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-005-2.png`
  - `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-005-3.png`
- Notes: This violates the UI-level interpretation of "only the edited product changes", even though the persisted backend state appears correct after reload.

### REVIEW-FR15-006: Decimal price is accepted and displayed in product listing

- Feature: FR-15 Product CRUD Admin
- Related test case: FR15-BVA-010
- Severity: Medium if integer-only VND is confirmed; otherwise not a defect
- Priority: Medium
- GitHub issue: [#17](https://github.com/tnnhuaa/eshop-sut/issues/17)
- Preconditions: Admin Web and backend are running; Admin is logged in.
- Steps to reproduce:
  1. Open Admin Product Management.
  2. Enter a valid product name.
  3. Enter price `0.01`.
  4. Select an existing category.
  5. Save the product.
- Expected result: The system handles product price consistently with the requirement. Since FR-15 only says price must be a positive number greater than `0`, decimal `0.01` may be considered valid. If product price is intended to be integer-only VND, the UI should reject decimal prices clearly.
- Actual result: Admin UI allows creating a product with decimal price `0.01`. After saving, the product appears in the product list and the price is displayed as `0,01 VND`.
- Evidence: `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-006.png`
- Notes: This item is a requirement clarification/potential defect, not a confirmed defect under the current `> 0` wording.

### BUG-FR05M-001: Search keyword with leading and trailing spaces is not trimmed

- Feature: FR-05-M Product Listing and Search Mobile
- Related test case: FR05M-DT-005
- Severity: Medium
- Priority: Medium
- GitHub issue: [#18](https://github.com/tnnhuaa/eshop-sut/issues/18)
- Preconditions: Backend and React Native Mobile app are running; FR05M seed products exist.
- Steps to reproduce:
  1. Open the mobile app Home screen.
  2. Enter a valid matching keyword with leading/trailing spaces, such as `  FR05M-ALPHA  `.
  3. Tap Search.
  4. Compare the result with searching the trimmed keyword `FR05M-ALPHA`.
- Expected result: The search keyword is trimmed before searching. `  FR05M-ALPHA  ` returns the same matching products as `FR05M-ALPHA`.
- Actual result: The keyword with leading/trailing spaces is not trimmed, so the app does not return the same result as the trimmed keyword.
- Evidence:
  - `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-001-1.jpg`
  - `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-001-2.jpg`
- Notes: Trimming is recorded as a reviewed search-semantics assumption because FR-05 does not explicitly define spaces around keywords.

### BUG-FR05M-002: Search with no matching products does not show an empty state

- Feature: FR-05-M Product Listing and Search Mobile
- Related test cases: FR05M-DT-007, FR05M-BVA-003
- Severity: Major
- Priority: High
- GitHub issue: [#19](https://github.com/tnnhuaa/eshop-sut/issues/19)
- Preconditions: Backend and React Native Mobile app are running.
- Steps to reproduce:
  1. Open the mobile app Home screen.
  2. Enter a keyword that returns no products, such as `FR05M-NO-MATCH-XYZ`.
  3. Tap Search.
  4. Observe the result area.
- Expected result: When no products match the search keyword, the app shows a suitable empty-state/no-result message.
- Actual result: The mobile app shows an empty/blank result area without a clear no-result message.
- Evidence: `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-002.jpg`
- Notes: This is a confirmed FR-05-M requirement defect because FR-05 explicitly requires an empty state when there is no search result.

### BUG-FR05M-003: Returning to Home from header keeps previous search results

- Feature: FR-05-M Product Listing and Search Mobile
- Related test case: FR05M-DT-018
- Severity: Medium
- Priority: Medium
- GitHub issue: [#20](https://github.com/tnnhuaa/eshop-sut/issues/20)
- Preconditions: Backend and React Native Mobile app are running; search result is currently filtered.
- Steps to reproduce:
  1. Open the mobile app Home screen.
  2. Search for a keyword that filters the product list.
  3. Tap the app header/logo to return to Home.
  4. Observe the product list shown on the Home screen.
- Expected result: Returning to Home from the header/logo resets the search state and shows the default/all product listing, equivalent to an empty search.
- Actual result: The Home screen still shows the previous search results instead of resetting to all products.
- Evidence: GitHub Issue [#20](https://github.com/tnnhuaa/eshop-sut/issues/20)
- Notes: This is separated from empty search because the trigger is navigation/state reset, not text input validation.

### BUG-FR05M-004: Very long search keyword breaks the mobile result-label layout

- Feature: FR-05-M Product Listing and Search Mobile
- Related test case: FR05M-BVA-006
- Severity: Medium
- Priority: Medium
- GitHub issue: [#21](https://github.com/tnnhuaa/eshop-sut/issues/21)
- Preconditions: Backend and React Native Mobile app are running.
- Steps to reproduce:
  1. Open the mobile app Home screen.
  2. Enter a 256-character search keyword.
  3. Tap Search.
  4. Observe the result label and product-list area.
- Expected result: The app remains responsive and displays the long keyword safely without breaking the layout.
- Actual result: The full long keyword is displayed in the result label, wraps into multiple lines, and breaks the layout by pushing/overlapping the product-list area.
- Evidence: `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-004.jpg`
- Notes: FR-05 does not define a maximum keyword length, so this is a robustness/UI layout defect rather than a strict boundary-limit defect.



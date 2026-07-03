# HW02 Bug Report

## Bug Summary

| Bug ID | Feature | Title | Severity | Status | GitHub Issue | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| BUG-FR06-001 | FR-06 Product Detail View | Add to cart requires two clicks on product detail page | Major | Open | `#1` | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-001.png`; `BUG-FR06-001_2.png` |
| BUG-FR06-002 | FR-06 Product Detail View | Product detail page does not display product category | Medium | Open | `#2` | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-002.png` |
| BUG-FR06-003 | FR-06 Product Detail View / Cart Integration | Adding the same product creates duplicate cart rows | Medium | Open | `#3` | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-003.png` |
| BUG-FR06-004 | FR-06 Product Detail View | Quantity `0` is accepted on product detail page | Major | Open | `#4` | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-004.png` |
| BUG-FR06-005 | FR-06 Product Detail View | Negative quantity is accepted and creates invalid cart total | Major | Open | `#5` | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-005.png` |
| BUG-FR06-006 | FR-06 Product Detail View | Empty quantity is accepted and creates invalid cart data | Major | Open | `#6` | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-006.png` |
| BUG-FR06-007 | FR-06 Product Detail View | Empty value after whitespace input can lead to `NaN` cart value | Major | Open | `#7` | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-007.png` |
| BUG-FR06-008 | FR-06 Product Detail View | Decimal quantity is accepted and parsed incorrectly | Major | Open | `#8` | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-008.png` |
| BUG-FR06-009 | FR-06 Product Detail View | Scientific notation quantity is accepted and parsed incorrectly | Major | Open | `#9` | `features/FR06_Product_Detail_Web/evidence/BUG-FR06-009.png`; `BUG-FR06-009_2.png` |
| BUG-FR10-001 | FR-10 Order State Machine | User can cancel a shipping order from the Web User order history | Major | Open | `#10` | `features/FR10_Order_State_Machine/evidence/BUG-FR10-001-01.png`; `BUG-FR10-001-02.png` |
| BUG-FR10-002 | FR-10 Order State Machine | Admin can mark a canceled final-state order as delivered | Major | Open | `#11` | `features/FR10_Order_State_Machine/evidence/BUG-FR10-002-01.png`; `BUG-FR10-002-02.png` |

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
- GitHub issue: `#1`
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
- GitHub issue: `#2`
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
- GitHub issue: `#3`
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
- GitHub issue: `#4`
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
- GitHub issue: `#5`
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
- GitHub issue: `#6`
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
- GitHub issue: `#7`
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
- GitHub issue: `#8`
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
- GitHub issue: `#9`
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
- GitHub issue: `#10`
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
- GitHub issue: `#11`
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

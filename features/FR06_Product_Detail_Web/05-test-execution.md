# FR-06 Test Execution

| Test Case ID | Date | Tester | Result | Evidence | Bug ID | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| FR06-DT-001 | 2026-07-02 | Student | Fail | Manual execution | BUG-FR06-002 | Product detail page does not display visible category information. |
| FR06-DT-002 | 2026-07-02 | Student | Pass | Manual execution | N/A | Price is displayed with thousands separators and currency symbol. |
| FR06-DT-003 | 2026-07-02 | Student | Pass | Manual execution | N/A | Non-existing numeric product ID shows product-not-found state without crashing. |
| FR06-DT-004 | 2026-07-02 | Student | Pass | Manual execution | N/A | Non-numeric product ID is handled safely without crashing. |
| FR06-DT-005 | 2026-07-02 | Student | Pass | Manual execution | N/A | Negative product ID is handled safely without crashing. |
| FR06-DT-006 | 2026-07-02 | Student | Fail | Manual execution | BUG-FR06-001 | Add to cart requires two clicks; first click does not add product. |
| FR06-DT-007 | 2026-07-02 | Student | Pass | Manual execution | N/A | Quantity 3 is added correctly after applying the known second-click workaround. |
| FR06-DT-008 | 2026-07-02 | Student | Fail | Manual execution | BUG-FR06-003 | Adding the same product again creates duplicate cart rows instead of merging quantity. |
| FR06-DT-009 | 2026-07-02 | Student | Pass | Manual execution | N/A | Alphabetic text is blocked by the browser number input during normal UI testing. |
| FR06-DT-010 | 2026-07-02 | Student | Fail | Manual execution | BUG-FR06-006 | Empty quantity is accepted and can create an invalid cart item/total. |
| FR06-DT-011 | 2026-07-02 | Student | Fail | Manual execution | BUG-FR06-007 | Spaces are blocked, but the resulting empty value can still be added and lead to invalid/NaN cart value. |
| FR06-DT-012 | 2026-07-02 | Student | Fail | Manual execution | BUG-FR06-009 | Scientific notation such as `1e2` is accepted by the input and parsed incorrectly. |
| FR06-DT-013 | 2026-07-02 | Student | Pass | Manual execution | N/A | Script-looking product content is rendered as text and does not execute. |
| FR06-DT-014 | 2026-07-02 | Student | Pass | Manual execution | N/A | Broken image URL does not crash the page; layout remains usable. |
| FR06-DT-015 | 2026-07-02 | Student | Fail | Manual execution | BUG-FR06-001 | No successful-add feedback after the first click because the product is not added until the second click. |
| FR06-BVA-001 | 2026-07-02 | Student | Fail | Manual execution | BUG-FR06-004 | Quantity 0 is accepted and added to cart instead of being rejected. |
| FR06-BVA-002 | 2026-07-02 | Student | Pass | Manual execution | N/A | Minimum valid quantity 1 is added correctly after the known second-click workaround. |
| FR06-BVA-003 | 2026-07-02 | Student | Pass | Manual execution | N/A | Quantity 2 is added correctly after the known second-click workaround. |
| FR06-BVA-004 | 2026-07-02 | Student | Fail | Manual execution | BUG-FR06-005 | Negative quantity is accepted and can create negative cart quantity/total. |
| FR06-BVA-005 | 2026-07-02 | Student | Fail | Manual execution | BUG-FR06-008 | Decimal quantity is accepted and parsed to integer quantity 1 instead of being rejected. |
| FR06-BVA-006 | 2026-07-02 | Student | Pass | Manual execution | N/A | Very large quantity is accepted and app does not crash; this remains a robustness risk because no maximum is specified. |

## Execution Summary

- Total executed test cases: 21
- Passed: 11
- Failed: 10
- Blocked/Not run: 0
- Main failed areas: missing category display, add-to-cart first-click behavior, duplicate cart rows, and weak quantity validation.

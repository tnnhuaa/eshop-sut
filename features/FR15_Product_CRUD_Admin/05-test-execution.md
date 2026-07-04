# FR-15 Test Execution

## Execution Scope

Execution was performed from the Admin Web frontend at `http://localhost:5174` based on the teacher clarification that functional testing should use the frontend UI. Backend/API-only cases are recorded as `Blocked` when the Admin UI cannot produce the required invalid input or state.

## Test Data

| Data | Value / Note |
| --- | --- |
| Admin account | `admin@eshop.com` / `Admin123!` |
| Non-admin account | `test@eshop.com` / `Test1234!` |
| Categories observed | `Điện thoại`, `Laptop`, `Phụ kiện` |
| Execution prefix | `FR15-064729` |
| Main route | Admin Product Management tab |

## Execution Summary

| Result | Count |
| --- | ---: |
| Total test cases | 48 |
| Passed | 28 |
| Failed | 11 |
| Blocked | 9 |

## Defect Summary

| Bug ID | GitHub Issue | Related Tests | Summary |
| --- | --- | --- | --- |
| BUG-FR15-001 | `#12` | FR15-DT-008 | Whitespace-only product name is accepted. |
| BUG-FR15-002 | `#13` | FR15-DT-025, FR15-BVA-007 | Product can be created without price. |
| BUG-FR15-003 | `#14` | FR15-BVA-008, FR15-BVA-009 | Non-positive product prices are accepted. |
| BUG-FR15-004 | `#15` | FR15-BVA-006, FR15-BVA-015 | Product name longer than 255 characters is accepted. |
| BUG-FR15-005 | `#16` | FR15-DT-013, FR15-DT-019, FR15-DT-031, FR15-BVA-014 | Updating one product temporarily changes all product names in the Admin UI before reload. |
| REVIEW-FR15-006 | `#17` | FR15-BVA-010 | Positive decimal price `0.01` is accepted and displayed as `0,01 VND`; this is acceptable under the current `> 0` wording but needs clarification if prices must be integer-only VND. |

## Blocked Cases

| Test Case ID | Reason |
| --- | --- |
| FR15-DT-010 | Admin UI category select always has an existing default category, so missing/unselected category cannot be submitted. |
| FR15-DT-011 | Admin UI cannot submit arbitrary non-existing `category_id`. |
| FR15-DT-015 | Admin UI does not expose editing a non-existing product ID. |
| FR15-DT-017 | Admin UI does not expose deleting a non-existing/deleted product ID. |
| FR15-DT-023 | Admin UI cannot select a stale/deleted category. |
| FR15-DT-028 | Unauthenticated direct product write is API-only and outside the frontend UI execution scope. |
| FR15-DT-029 | Non-admin direct product write is API-only and outside the frontend UI execution scope. |
| FR15-DT-030 | Missing `category_id` requires direct API manipulation. |
| FR15-BVA-012 | Category select always has an existing default category selected. |

## Execution Notes

- Empty name is blocked by browser required validation, but whitespace-only name is not trimmed and is accepted.
- Non-numeric price is blocked by the browser number input, but empty, zero, and negative values can still be saved.
- The Admin UI allows create/update with a 256-character name, violating the 255-character maximum.
- The update-isolation requirement has two separate observations:
  - Immediately after update, the UI table incorrectly shows many products with the edited product name.
  - After reload, persisted backend data shows only the target product changed.
- `FR15-BVA-010` is marked as passed because the requirement says price must be a positive number (`> 0`) and the UI accepts/displays decimal value `0.01` as `0,01 VND`. This remains a requirement clarification point because VND prices are commonly integer-only; if integer-only price is confirmed, this should become a defect.

## Evidence

| Evidence File | Used For |
| --- | --- |
| `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-001.png` | Whitespace-only product name accepted |
| `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-002.png` | Product accepted without price |
| `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-003.png` | Non-positive prices accepted |
| `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-004.png` | Product name longer than 255 characters accepted |
| `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-005-1.png` | Product A and Product B before update-isolation test |
| `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-005-2.png` | Immediate UI mass-name change after updating one product |
| `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-005-3.png` | Reload shows persisted data changed only for the target product |
| `features/FR15_Product_CRUD_Admin/evidence/BUG-FR15-006.png` | Decimal price `0.01` accepted and displayed as `0,01 VND` |


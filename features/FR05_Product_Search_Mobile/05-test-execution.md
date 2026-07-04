# FR-05-M Test Execution

## Execution Scope

FR-05-M was manually executed on the React Native Mobile app using the student's mobile environment. Browser execution was not used as the primary evidence because this feature is selected as a mobile feature.

The student recorded actual results in `features/FR05_Product_Search_Mobile/Execution.xlsx`. Remaining `TODO` actual results in the workbook were interpreted as "no issue observed" based on the student's note.

## Double-Check Notes

| Check | Result |
| --- | --- |
| Backend no-match response | `GET /api/products?search=FR05M-NO-MATCH-XYZ` returned `[]`, confirming that the frontend receives an empty result set. |
| Mobile code review for empty state | `frontend-mobile/App.js` renders `FlatList` and result count, but no empty-state component when `products.length === 0`. |
| Emulator attempt | Android emulator `Medium_Phone_API_36.1_2` booted successfully, but Expo Go installation failed because the emulator reported insufficient storage. Full UI retest on emulator was therefore limited. |
| Manual execution source | Student mobile execution in `Execution.xlsx` was used as the primary execution result. |

## Test Data

Seed data used prefix `FR05M-`:

```bash
node test-data/seed-fr05-mobile-products.js
```

Key seeded products:

- `FR05M-ALPHA Phone Basic`
- `FR05M-ALPHA Phone Pro`
- `FR05M-ALPHA Tablet Mini`
- `FR05M-SINGLE-Op lung Pixel`
- `FR05M-VIET Điện thoại Việt Nam`
- `FR05M-SAFE-<b>HTML</b>`
- `FR05M-BROKEN-IMAGE`

## Execution Summary

| Result | Count |
| --- | ---: |
| Total test cases | 25 |
| Passed | 20 |
| Failed | 5 |
| Blocked | 0 |

## Defect Summary

| Bug ID | Related Tests | Summary |
| --- | --- | --- |
| BUG-FR05M-001 / `#18` | FR05M-DT-005 | Search keyword with leading/trailing spaces is not trimmed, so it does not behave like the same valid keyword without spaces. |
| BUG-FR05M-002 / `#19` | FR05M-DT-007, FR05M-BVA-003 | Mobile search shows a blank result area without a suitable empty-state message when no products match. |
| BUG-FR05M-003 / `#20` | FR05M-DT-018 | Returning to Home from the header/logo keeps the previous search results instead of resetting to the default product listing. |
| BUG-FR05M-004 / `#21` | FR05M-BVA-006 | Very long search keyword breaks the mobile result-label layout and pushes/overlaps the product-list area. |

## Passed Coverage

- Default listing displays product cards.
- Exact, partial, lowercase, Vietnamese, HTML-looking, and script-looking keyword cases did not show additional reported issues.
- Unsafe-looking product name displays safely.
- Price formatting was acceptable.
- Broken image product did not crash the screen.
- Scrolling/search trigger/header/loading/network cases had no reported defect, except where noted in the failed cases.

## Execution Notes

- `FR05M-DT-005` is mapped to `BUG-FR05M-001` because search should use a trimmed keyword under the reviewed FR05M-GAP-03 assumption. This is separated from the empty-state defect because the input class and expected result are different.
- `FR05M-DT-018` was added after execution review because returning to Home through the header/logo should restore the default listing. Keeping the old filtered result is treated as a navigation/search-state defect.
- `FR05M-DT-017` passed because the app eventually showed `Network request timed out` and did not crash, even though the UI was blank briefly while waiting.
- `FR05M-BVA-007` passed based on the student's note that no issue was observed. If loading is too fast to observe in a later run, it can be reclassified as inconclusive.

## Evidence

| Evidence | Used For |
| --- | --- |
| `features/FR05_Product_Search_Mobile/Execution.xlsx` | Student-recorded actual results |
| `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-001-1.jpg`; `BUG-FR05M-001-2.jpg` | BUG-FR05M-001 / GitHub Issue `#18` |
| `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-002.jpg` | BUG-FR05M-002 / GitHub Issue `#19` |
| GitHub Issue `#20` | BUG-FR05M-003 |
| `features/FR05_Product_Search_Mobile/evidence/BUG-FR05M-004.jpg` | BUG-FR05M-004 / GitHub Issue `#21` |

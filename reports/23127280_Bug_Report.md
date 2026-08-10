# HW04-AI Automation Bug Report

## Student Information

| Field | Value |
| --- | --- |
| Student | Nguyen Hien Tuan Anh |
| Student ID | 23127280 |
| Assignment | HW04-AI |
| Repository | [tnnhuaa/eshop-sut](https://github.com/tnnhuaa/eshop-sut) |

## Summary

The final 108 browser-scoped executions produced 57 assertion failures. After separating automation, data, timing, and environment causes, the student confirmed nine product-defect groups. Eight groups reproduce defects already documented in 14 HW02 GitHub Issues. One newly automated authorization defect is recorded in Issue [#23](https://github.com/tnnhuaa/eshop-sut/issues/23).

| Feature | Confirmed groups | Failing tests per browser | GitHub records |
| --- | ---: | ---: | ---: |
| FR06 | 4 | 9 | 8 |
| FR10 | 3 | 5 | 3 |
| FR15 | 2 | 5 | 4 |
| **Total** | **9** | **19 unique failing tests** | **15** |

All groups reproduce in Chromium, Firefox, and Edge. Cross-browser repetition was supporting evidence, not the defect oracle; the student reviewed requirements, expected results, and fresh execution evidence before confirmation.

## Confirmed Defect Mapping

| Group | TestCaseID | Expected | Actual | Severity | GitHub Issue and screenshot |
| --- | --- | --- | --- | --- | --- |
| BUG-FR06-01 | FR06-DT-001 | Product detail displays category `Điện thoại`. | Category is absent. | Medium | [#2](https://github.com/tnnhuaa/eshop-sut/issues/2) |
| BUG-FR06-02 | FR06-DT-006, DT-015 | One click adds one cart row and displays success feedback. | No cart row or feedback appears after one click. | Major | [#1](https://github.com/tnnhuaa/eshop-sut/issues/1) |
| BUG-FR06-03 | FR06-DT-008 | Repeated addition merges quantity into one row. | Two product rows are created. | Major | [#3](https://github.com/tnnhuaa/eshop-sut/issues/3) |
| BUG-FR06-04 | FR06-DT-010, DT-012, BVA-001, BVA-004, BVA-005 | Invalid quantities are rejected without changing the cart. | Empty, scientific, zero, negative, or decimal input reaches invalid cart behavior. | Major | [#4](https://github.com/tnnhuaa/eshop-sut/issues/4), [#5](https://github.com/tnnhuaa/eshop-sut/issues/5), [#6](https://github.com/tnnhuaa/eshop-sut/issues/6), [#8](https://github.com/tnnhuaa/eshop-sut/issues/8), [#9](https://github.com/tnnhuaa/eshop-sut/issues/9) |
| BUG-FR10-01 | FR10-DT-006, DT-021 | Shipping cancellation is rejected with HTTP 400 and state remains `shipping`. | API returns HTTP 200. | Major | [#10](https://github.com/tnnhuaa/eshop-sut/issues/10) |
| BUG-FR10-02 | FR10-DT-017 | Normal user receives HTTP 403 from the admin status endpoint. | Normal user receives HTTP 200. | Major | [#23](https://github.com/tnnhuaa/eshop-sut/issues/23) |
| BUG-FR10-03 | FR10-DT-012, DT-022 | Canceled final-state order exposes zero admin actions. | One outgoing action remains visible. | Major | [#11](https://github.com/tnnhuaa/eshop-sut/issues/11) |
| BUG-FR15-01 | FR15-DT-008, DT-025, BVA-006 | Whitespace name, missing price, and 256-character name are rejected. | Product count increases from five to six. | Major | [#12](https://github.com/tnnhuaa/eshop-sut/issues/12), [#13](https://github.com/tnnhuaa/eshop-sut/issues/13), [#15](https://github.com/tnnhuaa/eshop-sut/issues/15) |
| BUG-FR15-02 | FR15-DT-012, DT-013 | Only the selected product changes; the other row remains unchanged. | Exact target/non-target row assertions fail after update. | Major | [#16](https://github.com/tnnhuaa/eshop-sut/issues/16) |

## Fresh Automation Evidence

| Feature | Chromium | Firefox | Edge |
| --- | --- | --- | --- |
| FR06 | `artifacts/html-reports/FR06/chromium/2026-08-09T17-31-26.775Z/` | `artifacts/html-reports/FR06/firefox/2026-08-09T17-33-31.734Z/` | `artifacts/html-reports/FR06/edge/2026-08-09T17-36-07.141Z/` |
| FR10 | `artifacts/html-reports/FR10/chromium/2026-08-09T17-38-13.799Z/` | `artifacts/html-reports/FR10/firefox/2026-08-09T17-39-01.856Z/` | `artifacts/html-reports/FR10/edge/2026-08-09T17-40-25.448Z/` |
| FR15 | `artifacts/html-reports/FR15/chromium/2026-08-09T17-41-16.894Z/` | `artifacts/html-reports/FR15/firefox/2026-08-09T17-42-01.589Z/` | `artifacts/html-reports/FR15/edge/2026-08-09T17-43-05.210Z/` |

Each failing Playwright run retains its available screenshot, trace, and video inside the report bundle. API-only failure screenshots can show an empty page because `APIRequestContext` does not navigate a UI; therefore Issue #23 uses a truthful screenshot of the HTML report displaying `Expected: 403` and `Received: 200`.

## Student Confirmation

The signed human review is `manual/01-human-review-record-en.md`. The confirmation mapping is `reports/23127280_HW04_Confirmed_Defects.md`. The student confirmed all nine groups on 2026-08-10 and manually published Issue #23 after reviewing the report evidence.


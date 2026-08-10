# HW04 Confirmed Defect Record

## Student Decision

| Field | Value |
| --- | --- |
| Student | Nguyen Hien Tuan Anh |
| Student ID | 23127280 |
| Assignment | HW04-AI |
| Decision date | 2026-08-10 |
| Decision | All nine automation candidate groups confirmed as product defects |

The student reviewed the expected results, reproduced outcomes, and evidence from the final Chromium, Firefox, and Edge runs. The failures below are therefore classified as product defects rather than automation, test-data, or environment faults.

## Confirmation and GitHub Issue Mapping

| HW04 Group | Test Case IDs | Confirmed Observation | GitHub Issue Record |
| --- | --- | --- | --- |
| BUG-FR06-01 | FR06-DT-001 | The product detail page omits the expected category. | Existing [#2](https://github.com/tnnhuaa/eshop-sut/issues/2) |
| BUG-FR06-02 | FR06-DT-006, FR06-DT-015 | One valid click does not add the cart row or show success feedback. | Existing [#1](https://github.com/tnnhuaa/eshop-sut/issues/1) |
| BUG-FR06-03 | FR06-DT-008 | Repeated additions create duplicate cart rows instead of merging quantities. | Existing [#3](https://github.com/tnnhuaa/eshop-sut/issues/3) |
| BUG-FR06-04 | FR06-DT-010, FR06-DT-012, FR06-BVA-001, FR06-BVA-004, FR06-BVA-005 | Empty, scientific-notation, zero, negative, and decimal quantities are not rejected safely. | Existing [#4](https://github.com/tnnhuaa/eshop-sut/issues/4), [#5](https://github.com/tnnhuaa/eshop-sut/issues/5), [#6](https://github.com/tnnhuaa/eshop-sut/issues/6), [#8](https://github.com/tnnhuaa/eshop-sut/issues/8), [#9](https://github.com/tnnhuaa/eshop-sut/issues/9) |
| BUG-FR10-01 | FR10-DT-006, FR10-DT-021 | Canceling a shipping order returns HTTP 200 instead of 400. | Existing [#10](https://github.com/tnnhuaa/eshop-sut/issues/10) |
| BUG-FR10-02 | FR10-DT-017 | A normal user can call the admin status endpoint and receives HTTP 200 instead of 403. | New [#23](https://github.com/tnnhuaa/eshop-sut/issues/23) |
| BUG-FR10-03 | FR10-DT-012, FR10-DT-022 | A canceled final-state order still exposes an outgoing admin action. | Existing [#11](https://github.com/tnnhuaa/eshop-sut/issues/11) |
| BUG-FR15-01 | FR15-DT-008, FR15-DT-025, FR15-BVA-006 | Whitespace-only names, missing prices, and 256-character names create products. | Existing [#12](https://github.com/tnnhuaa/eshop-sut/issues/12), [#13](https://github.com/tnnhuaa/eshop-sut/issues/13), [#15](https://github.com/tnnhuaa/eshop-sut/issues/15) |
| BUG-FR15-02 | FR15-DT-012, FR15-DT-013 | Updating one product does not preserve the exact target and non-target row values. | Existing [#16](https://github.com/tnnhuaa/eshop-sut/issues/16) |

The 14 linked existing issues already contain screenshots from the HW02 manual executions. HW04 reproduces those defects through automated execution on all three required browsers. The new `FR10-DT-017` authorization defect is published as Issue [#23](https://github.com/tnnhuaa/eshop-sut/issues/23) with a fresh screenshot of the Playwright HTML report showing `Expected: 403` and `Received: 200`.

## Final Execution Evidence

| Feature | Chromium | Firefox | Edge |
| --- | --- | --- | --- |
| FR06 | `artifacts/html-reports/FR06/chromium/2026-08-09T17-31-26.775Z` | `artifacts/html-reports/FR06/firefox/2026-08-09T17-33-31.734Z` | `artifacts/html-reports/FR06/edge/2026-08-09T17-36-07.141Z` |
| FR10 | `artifacts/html-reports/FR10/chromium/2026-08-09T17-38-13.799Z` | `artifacts/html-reports/FR10/firefox/2026-08-09T17-39-01.856Z` | `artifacts/html-reports/FR10/edge/2026-08-09T17-40-25.448Z` |
| FR15 | `artifacts/html-reports/FR15/chromium/2026-08-09T17-41-16.894Z` | `artifacts/html-reports/FR15/firefox/2026-08-09T17-42-01.589Z` | `artifacts/html-reports/FR15/edge/2026-08-09T17-43-05.210Z` |

`C/F/E` reproduction means Chromium, Firefox, and Edge exhibited the same confirmed behavior. Cross-browser repetition alone was not used as the oracle; the student made the final decision after reviewing requirements and execution evidence.

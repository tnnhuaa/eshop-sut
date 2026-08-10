# Human Review Record — HW04

## 1. Agent-verified technical status

| Item | Verified result |
| --- | --- |
| Scenarios | FR06: 12; FR10: 12; FR15: 12 |
| Assertion types | FR06: 8; FR10: 6; FR15: 4 |
| Playwright discovery | 108 test-browser combinations |
| Browsers | Chromium, Firefox, Microsoft Edge |
| Latest reports | 9 new reports, each containing `Run by: 23127280` and an ISO timestamp |
| Results per browser | FR06: 3 passed/9 failed; FR10: 7 passed/5 failed; FR15: 7 passed/5 failed |

## 2. Files reviewed

| Feature | Spec | Test data |
| --- | --- | --- |
| FR06 | `tests/fr06/product-detail.spec.ts` | `test-data/fr06/product-detail-scenarios.json` |
| FR10 | `tests/fr10/fr10-state-machine.spec.ts` | `test-data/fr10/state-machine-scenarios.json` |
| FR15 | `tests/fr15/product-crud-admin.spec.ts` | `test-data/fr15/product-crud-scenarios.json` and `fixture-config.json` |

## 3. Important corrections reviewed

| ID | Problem in the initial AI output | Final correction | Why the AI missed it | Student decision | Student reasoning |
| --- | --- | --- | --- | --- | --- |
| HR-01 | The selector for script-looking content was too broad. | Scoped the description inside `main` and verified that no `script` element or dialog was created. | The AI did not have enough context about the rendered DOM. | `Accepted` | `The original selector could match multiple occurrences of the same script-looking text. The corrected selector scopes the assertion to the product description and verifies that no script element or dialog is created.` |
| HR-02 | The cart selector could match multiple unrelated elements. | Scoped the locator to a table row containing an exact product-name cell. | The product name appears in multiple UI regions. | `Accepted` | `The product name appears in multiple UI areas. Scoping the locator to a table row containing an exact product-name cell avoids ambiguous matches and verifies the correct cart line.` |
| HR-03 | The FR06 product name was hardcoded in the spec. | Moved the product name and expected value to external JSON. | The initial prompt emphasized flow implementation but not strict data-driven compliance. | `Accepted` | `The product name is test data and should not be embedded in the spec. Reading it from the external JSON keeps the test fully data-driven and easier to reuse.` |
| HR-04 | FR10 grouped cases with inline TestCaseID arrays and an action map. | Used one loop that dispatches through JSON-backed `workflow` and `actionLabel` values. | The model favored convenient code grouping despite the rubric's strict inline-data restriction. | `Accepted` | `Inline TestCaseID arrays and action mappings could be interpreted as hardcoded test data. Moving workflow and action labels to JSON makes scenario selection and execution consistently data-driven.` |
| HR-05 | The order status could be read before the backend update completed. | Used `expect.poll` to verify the API state. | The UI action and API state update are asynchronous. | `Accepted` | `The UI action and backend state update may not complete at the same time. Using expect.poll verifies the eventual API state without introducing a fixed or flaky delay.` |
| HR-06 | The FR15 selector and update flow could race after a reload. | Reopened the Products tab, scoped an exact row, and verified the API product count. | Reloading the admin UI resets the active tab state. | `Accepted` | `Reloading the admin page resets the selected tab, and broad update selectors may target the wrong row. Reopening the Products tab and using an exact row locator makes the update flow deterministic.` |
| HR-07 | FR15 URLs, credentials, and fixture values were embedded in the spec. | Read URLs and credentials from `environment` and fixture values from JSON. | The AI treated configuration constants as technical code rather than external data. | `Accepted` | `URLs, credentials, and fixture values should not be repeated inside the spec. Environment configuration and external fixture JSON improve portability and reduce hardcoded data.` |
| HR-08 | Cleanup could contaminate later scenarios or remove unrelated data. | Limited cleanup to names managed by the scenarios and used `workers: 1`. | The CRUD tests share one mutable database. | `Accepted` | `FR15 tests share a mutable database. Cleaning only names managed by the scenarios and running with one worker prevents cross-test contamination without deleting unrelated products.` |

## 4. Feature-review checklist

- [x] Test titles contain the TestCaseID and match the HW02 test cases.
- [x] JSON inputs and expected results match the requirements and were not weakened to match defective SUT behavior.
- [x] Selectors are sufficiently scoped and do not rely on fragile CSS structure.
- [x] The specs do not use `waitForTimeout`, and assertions verify observable outcomes.
- [x] Cleanup does not delete data outside the scenarios' ownership.

## 5. Student confirmation

I reviewed the automation scripts, test data, and corrections listed above. I take responsibility for the final version and will classify defect candidates separately before any GitHub Issue is created.

- Student name: Nguyễn Hiền Tuấn Anh
- Student ID: 23127280
- Review date: 2026-08-10
- Signature/confirmation: Anh

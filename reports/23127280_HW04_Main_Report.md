# HW04-AI Main Report — Automation Testing

## Student Information

| Field | Value |
| --- | --- |
| Student | Nguyen Hien Tuan Anh |
| Student ID | 23127280 |
| Class | 23KTPM2 |
| Assignment | HW04-AI |
| Repository | [tnnhuaa/eshop-sut](https://github.com/tnnhuaa/eshop-sut) |
| Task 2 video | [YouTube](https://youtu.be/XXYWit38OCQ) |
| Agent Skill video | [YouTube](https://youtu.be/J4cTY_ij4hk) |

## 1. Scope and Feature Selection

HW04 automates the same three web features selected in HW02, one from each required pool. Pool D mobile testing is excluded.

| Pool | Feature | Automation scope |
| --- | --- | --- |
| A | FR06 — Product Detail View | Product information, not-found behavior, safe content rendering, cart integration, quantity validation, and feedback |
| B | FR10 — Order State Machine | Valid transitions, final states, user cancellation, authentication, authorization, and cross-role state checks |
| C | FR15 — Product Management CRUD | Listing, create, update isolation, delete, validation, cancellation, unauthorized access, and cleanup |

The final suite contains 36 unique test cases: 12 per feature. No selected test case was omitted from automation.

## 2. AI-First Automation Workflow

AI was guided through the work in stages instead of receiving one generic request:

1. Read the HW02 test basis and select 12 traceable test cases per feature.
2. Convert input, setup, expected result, and assertion metadata into external JSON scenarios.
3. Generate one Playwright specification per feature using the external scenario data.
4. Review selectors, asynchronous state checks, configuration, mutation isolation, and cleanup.
5. Run TypeScript validation and Playwright discovery before executing the full browser matrix.
6. Execute Chromium, Firefox, and Microsoft Edge separately for every feature.
7. Preserve genuine assertion failures, classify their causes, and require student confirmation before reporting product defects.

Codex generated and refined the automation. The student reviewed the final scripts, accepted the documented corrections, confirmed the defect groups, recorded the videos, and remains responsible for the submitted results.

## 3. Data-Driven Design and Assertions

| Feature | Specification | External test data | Cases | Distinct assertion categories |
| --- | --- | --- | ---: | ---: |
| FR06 | `tests/fr06/product-detail.spec.ts` | `test-data/fr06/product-detail-scenarios.json` | 12 | 8 |
| FR10 | `tests/fr10/fr10-state-machine.spec.ts` | `test-data/fr10/state-machine-scenarios.json` | 12 | 6 |
| FR15 | `tests/fr15/product-crud-admin.spec.ts` | `test-data/fr15/product-crud-scenarios.json`; `fixture-config.json` | 12 | 4 |

The specs do not contain inline scenario arrays. Scenario titles, inputs, expected values, workflows, labels, and fixture values come from JSON. Shared environment values are loaded through `tests/support/environment.ts`, and JSON parsing is centralized in `tests/support/data-loader.ts`.

The suite uses more than the required three assertion patterns. Representative patterns include:

- Web-first UI assertions: `toBeVisible`, `toContainText`, and `toHaveText`.
- Value and collection assertions: `toHaveValue` and `toHaveCount`.
- Negative assertions: element absence, unchanged state, and zero outgoing actions.
- Eventual state assertions: `expect.poll` for asynchronous API state changes.
- API response assertions: exact HTTP status and persisted order status.
- Safe-content assertions: inert text, no executable `script` element, and no dialog.

No fixed `waitForTimeout` is used. Locators prefer roles, labels, exact text, or a table row scoped by identifying content.

## 4. Human Review and Student Corrections

The signed review is stored in `manual/01-human-review-record-en.md`. The most important corrections are summarized below.

| Area | Initial AI limitation | Student-reviewed final fix | Reason the initial output was incomplete |
| --- | --- | --- | --- |
| FR06 safe content | The script-looking text selector was too broad. | Scope the description inside `main`; assert no `script` element and no dialog. | The prompt did not include the rendered DOM structure. |
| FR06 cart row | Product text could match several page regions. | Scope assertions to the exact product row in the cart table. | The model selected visible text without enough locator context. |
| FR06 data | Expected product names remained in the spec. | Move them into the external scenario JSON. | The first prompt emphasized flow generation more than strict external-data compliance. |
| FR10 dispatch | TestCaseID arrays and an action map were inline. | Drive workflow and action labels entirely from JSON. | The model optimized code grouping instead of the rubric's data separation rule. |
| FR10 state | The script could read order state before persistence completed. | Use `expect.poll` for eventual API state. | UI action completion and backend persistence are asynchronous. |
| FR15 update | Reloading could reset the active tab and make row selection race. | Reopen Products, scope the exact row, and verify API product count. | The generated flow assumed navigation state survived reload. |
| FR15 configuration | URLs, credentials, and fixture values were embedded. | Load environment and fixture JSON values. | The model treated configuration constants as implementation code. |
| FR15 cleanup | Broad cleanup could affect later tests or unrelated products. | Clean only scenario-owned names and run mutation tests with one worker. | The generated tests did not initially model a shared mutable database. |

All eight corrections were marked `Accepted` and signed by the student on 2026-08-10. Expected results were not weakened to match defective SUT behavior.

## 5. Browser Configuration and Reporting

The required browser set is Chromium, Firefox, and Microsoft Edge. Edge uses Playwright's Chromium engine with the installed `msedge` channel. Each feature-browser invocation creates an independent HTML report containing `Run by: 23127280` and an ISO timestamp.

### Final HTML Report Matrix

| Feature | Browser | Result | HTML report directory |
| --- | --- | --- | --- |
| FR06 | Chromium | 3 passed, 9 failed | `artifacts/html-reports/FR06/chromium/2026-08-09T17-31-26.775Z/` |
| FR06 | Firefox | 3 passed, 9 failed | `artifacts/html-reports/FR06/firefox/2026-08-09T17-33-31.734Z/` |
| FR06 | Edge | 3 passed, 9 failed | `artifacts/html-reports/FR06/edge/2026-08-09T17-36-07.141Z/` |
| FR10 | Chromium | 7 passed, 5 failed | `artifacts/html-reports/FR10/chromium/2026-08-09T17-38-13.799Z/` |
| FR10 | Firefox | 7 passed, 5 failed | `artifacts/html-reports/FR10/firefox/2026-08-09T17-39-01.856Z/` |
| FR10 | Edge | 7 passed, 5 failed | `artifacts/html-reports/FR10/edge/2026-08-09T17-40-25.448Z/` |
| FR15 | Chromium | 7 passed, 5 failed | `artifacts/html-reports/FR15/chromium/2026-08-09T17-41-16.894Z/` |
| FR15 | Firefox | 7 passed, 5 failed | `artifacts/html-reports/FR15/firefox/2026-08-09T17-42-01.589Z/` |
| FR15 | Edge | 7 passed, 5 failed | `artifacts/html-reports/FR15/edge/2026-08-09T17-43-05.210Z/` |

### Aggregate Results

| Metric | Result |
| --- | ---: |
| Features | 3 |
| Unique automated test cases | 36 |
| Browser runs | 9 |
| Browser-scoped executions | 108 |
| Passed executions | 51 |
| Failed executions | 57 |
| Not automated | 0 |

The matrix process returns a non-zero overall code because genuine assertions fail. This does not indicate missing browsers or missing reports: all nine invocations completed and produced their HTML bundles.

## 6. Failure Classification and Confirmed Defects

Automation, data, timing, and environment causes were reviewed before a failure was considered a product defect. The student confirmed nine defect groups. Eight groups reproduce defects already recorded during HW02; the new authorization failure is documented in [Issue #23](https://github.com/tnnhuaa/eshop-sut/issues/23).

| Feature | Passing IDs | Failing IDs | Confirmed groups |
| --- | --- | --- | ---: |
| FR06 | DT-002, DT-003, DT-013 | DT-001, DT-006, DT-008, DT-010, DT-012, DT-015, BVA-001, BVA-004, BVA-005 | 4 |
| FR10 | DT-001, DT-002, DT-003, DT-004, DT-005, DT-011, DT-016 | DT-006, DT-012, DT-017, DT-021, DT-022 | 3 |
| FR15 | DT-001, DT-002, DT-005, DT-007, DT-016, DT-021, DT-024 | DT-008, DT-012, DT-013, DT-025, BVA-006 | 2 |

The detailed expected/actual results, report paths, and GitHub links are in `reports/23127280_Bug_Report.md`. The 15 linked GitHub records contain screenshots: 14 pre-existing HW02 issues for reproduced defects and Issue #23 for the newly automated authorization defect.

## 7. Traceability

Every Playwright title contains its HW02 TestCaseID. The complete 36-row mapping is stored in `supporting/requirement-traceability-matrix.csv` and connects each ID to its specification, JSON data, three browser projects, final report matrix, result, defect group, and GitHub Issue.

| Feature | TestCaseID set |
| --- | --- |
| FR06 | FR06-DT-001, 002, 003, 006, 008, 010, 012, 013, 015; FR06-BVA-001, 004, 005 |
| FR10 | FR10-DT-001, 002, 003, 004, 005, 006, 011, 012, 016, 017, 021, 022 |
| FR15 | FR15-DT-001, 002, 005, 007, 008, 012, 013, 016, 021, 024, 025; FR15-BVA-006 |

## 8. Agent Skill

The reusable skill is submitted at `.agents/skills/eshop-playwright-automation/`. It guides an agent through test-basis inspection, JSON scenario preparation, spec maintenance, browser execution, report verification, failure classification, and a human-review gate. It does not authorize the agent to fabricate reports, confirm defects, sign student review, or create an issue before confirmation.

The skill was validated and forward-tested with a clean context. Its demonstration video is [https://youtu.be/J4cTY_ij4hk](https://youtu.be/J4cTY_ij4hk).

## 9. Task 2 Demonstration

The Task 2 video is [https://youtu.be/XXYWit38OCQ](https://youtu.be/XXYWit38OCQ). It demonstrates FR06 end to end, including authorship evidence through terminal `whoami` and `hostname`, external JSON data, the Playwright specification, a student-reviewed correction, the three-browser run, and generated HTML reports.

## 10. Git History and Responsibility

The `hw4-tanh` branch contains separate foundation, feature generation, feature correction, skill, evidence, human-review, and defect-documentation commits. The current teacher clarification removes the earlier four-day-spread requirement; the submission retains at least eight meaningful commits that change automation scripts. The exported history is stored in `reports/git_commit_log.txt`.

AI accelerated generation, refactoring, execution orchestration, and documentation, but the student performed the required review and confirmation gates. No SUT behavior was changed to make an assertion pass, and no execution, identity, video, screenshot, or defect evidence was fabricated.

## 11. Deliverable Index

- `README.md` — self-assessment, summary, links, and artifact index.
- `reports/23127280_HW04_Main_Report.md` — this report.
- `reports/23127280_Bug_Report.md` — confirmed automation defect report.
- `reports/23127280_AI_Critique.md` — 200–300 word critique.
- `reports/23127280_AI_Audit_Report.md` — curated HW04 AI audit export.
- `reports/git_commit_log.txt` — HW04 branch history.
- `supporting/requirement-traceability-matrix.csv` — 36-case traceability.
- `manual/01-human-review-record-en.md` — signed student review.

## References

- HW04 — Automation Testing assignment specification.
- HW02 test cases and reviewed expected results for FR06, FR10, and FR15.
- Playwright Test documentation for locators, web-first assertions, projects, and HTML reporting.
- ISTQB Certified Tester Foundation Level Syllabus v4.0.1.


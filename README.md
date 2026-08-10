# HW04-AI Automation Testing Submission

## Student Information

| Field | Value |
| --- | --- |
| Student | Nguyen Hien Tuan Anh |
| Student ID | 23127280 |
| Class | 23KTPM2 |
| Repository | [tnnhuaa/eshop-sut](https://github.com/tnnhuaa/eshop-sut) |

## Self-Assessment

| No. | Criterion | Grade | Self-Assessed Grade |
| --- | --- | ---: | ---: |
| 1 | Task 1 - FR06 Product Detail View | 25 | 25 |
| 2 | Task 1 - FR10 Order State Machine | 25 | 25 |
| 3 | Task 1 - FR15 Product Management | 25 | 25 |
| 4 | Task 2 - Demo Video | 15 | 15 |
| 5 | Agent Skill | 10 | 10 |
|  | **Total** | **100** | **100** |

## Test Summary

| Metric | Result |
| --- | ---: |
| Web features automated | 3 |
| Unique test cases automated | 36 |
| Unique test cases executed | 36 |
| Browsers per feature | 3 (Chromium, Firefox, Edge) |
| Browser runs | 9 |
| Browser-scoped test executions | 108 |
| Passed executions | 51 |
| Failed executions | 57 |
| Student-confirmed defect groups | 9 |

Each of the three features has 12 externally data-driven scenarios and runs on Chromium, Firefox, and Edge. Every browser run produces a Playwright HTML report that displays `Run by: 23127280` and an ISO timestamp.

## Demo Videos

| Deliverable | Unlisted YouTube Link |
| --- | --- |
| Task 2 - end-to-end multi-browser automation demo | [https://youtu.be/XXYWit38OCQ](https://youtu.be/XXYWit38OCQ) |
| Reusable Agent Skill demonstration | [https://youtu.be/J4cTY_ij4hk](https://youtu.be/J4cTY_ij4hk) |

## Defect Status

The student reviewed and confirmed all nine candidate defect groups produced by the final automation matrix. Eight groups reproduce defects already documented in existing GitHub Issues from HW02. The remaining authorization defect, `FR10-DT-017`, is pending publication as a new GitHub Issue. The detailed mapping is recorded in [`reports/23127280_HW04_Confirmed_Defects.md`](reports/23127280_HW04_Confirmed_Defects.md).

## Key Submission Artifacts

- Automation specs: `tests/fr06/`, `tests/fr10/`, and `tests/fr15/`
- External test data: `test-data/fr06/`, `test-data/fr10/`, and `test-data/fr15/`
- Final HTML reports: `artifacts/html-reports/<feature>/<browser>/<timestamp>/index.html`
- Student human review: `manual/01-human-review-record-en.md`
- Reusable skill: `.agents/skills/eshop-playwright-automation/`


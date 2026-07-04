# HW02 AI Audit Report

## Declaration

I use AI tools for the following tasks. Every AI-generated output is reviewed, corrected, and accepted by me before being included in the submission.

## AI Interaction Log

| No. | Date and Time | Tool | Prompt Summary | Artifact | Human Review Result |
| --- | --- | --- | --- | --- | --- |
| 1 | 2026-06-29 | Codex | Set up the HW02 repository documentation structure and assignment artifacts. | Repository structure, report skeletons, feature folders, logs, traceability templates | Pending student review |
| 2 | 2026-06-29 | Codex | Analyzed requirements and identified detailed requirement gaps for FR-06, FR-10, FR-15, and FR-05-M. | Requirement analysis files and global gap index | Pending student review |
| 3 | 2026-07-02 | Codex | Designed FR-06 Domain Testing/BVA artifacts and built a reusable Agent Skill. | FR-06 domain model, BVA, test cases, AI gap analysis, skill templates/example | Pending student review |
| 4 | 2026-07-02 | Codex | Compared FR-06 manual execution results, split defect reports, and updated execution documentation. | FR-06 execution results, bug report, GitHub issue summaries, AI gap analysis, skill evaluation | Student reviewed issue list and confirmed defect split |
| 5 | 2026-07-02 | Codex Browser | Executed FR-10 order-state test cases from Frontend UI and drafted defect reports. | FR-10 test execution table, execution summary, and bug draft file | Student created GitHub Issues `#10` and `#11` after reviewing the drafts |
| 6 | 2026-07-03 | Codex Browser | Performed exploratory FR-10 retest to check remaining coverage gaps and confirm whether additional state-machine defects exist. | Supplemental FR-10 test cases, updated execution summary, RTM, main report, bug draft links | Student should review whether the added coverage cases match the intended submission scope |
| 7 | 2026-07-03 | Codex | Used the repository-local Agent Skill to design FR-15 Product CRUD Admin Domain Testing and BVA artifacts. | FR-15 domain model, BVA, 48 draft test cases, AI gap analysis, FR15 skill example files | Pending student review before execution |
| 8 | 2026-07-03 | Codex Browser | Executed FR-15 Product CRUD Admin test cases through Admin Web UI and updated execution/report documentation. | FR-15 test cases with Actual Result/Status/BugID, execution summary, bug drafts, evidence references, AI gap analysis, main report, RTM, and execution log | Student created GitHub Issues `#12` to `#17`; decimal price behavior is recorded as a requirement clarification |
| 9 | 2026-07-04 | Codex | Used the repository-local Agent Skill to design FR-05-M Mobile Product Listing/Search Domain Testing and BVA artifacts. | FR-05-M domain model, BVA, 24 draft test cases, AI gap analysis, FR05 skill example files, and mobile seed data script | Student later executed the cases on mobile and requested documentation updates |
| 10 | 2026-07-04 | Codex + Android Emulator check | Reviewed the student's FR-05-M mobile execution results, attempted emulator double-check, split mobile search defects, and updated execution/report documentation. | FR-05-M execution results, GitHub Issues `#18` to `#21`, bug report, AI gap analysis, main report, RTM, and execution log | Student-provided mobile results were accepted as primary evidence; emulator retest was limited by insufficient storage |

## Detailed Logs

### Interaction 1

- Tool: Codex
- Date and time: 2026-06-29
- Prompt: Asked Codex to act as an experienced Software Testing teacher and guide the initial HW02 repository setup after the repository was cloned.
- Output summary: Created assignment folders, report skeletons, feature skeleton files, evidence folders, logs, and traceability templates.
- Human review: TODO
- Corrections made by student: TODO

### Interaction 2

- Tool: Codex
- Date and time: 2026-06-29
- Prompt: Asked Codex to perform requirement analysis and make the requirement gap sections detailed and broad enough to cover real missing or ambiguous requirement issues.
- Output summary: Expanded requirement analysis for FR-06 Product Detail View, FR-10 Order State Machine, FR-15 Product Management CRUD, and FR-05-M Product Listing and Search on Mobile. Added detailed gap IDs, risk levels, temporary assumptions, verification approaches, and updated the global assumptions/gaps file and requirement traceability matrix.
- Human review: TODO
- Corrections made by student: TODO

### Interaction 3

- Tool: Codex
- Date and time: 2026-07-02
- Prompt: Asked Codex to complete FR-06 Domain Testing and Boundary Value Analysis, create 16-22 test cases, and build a reusable Agent Skill with templates, FR-06 example, raw output, human review, guardrails, and skill change log. The user asked not to commit yet and to provide a short summary for review.
- Output summary: Created FR-06 domain model, BVA, 21 test cases, FR-06 AI gap analysis, FR-06 prompt/raw-output logs, reusable `.agent` skill workflow, templates, FR-06 worked example, skill evaluation, and skill change log.
- Human review: TODO
- Corrections made by student: TODO

### Interaction 4

- Tool: Codex
- Date and time: 2026-07-02
- Prompt: Asked Codex to compare the student's manual FR-06 testing results with the generated test table, update execution results, separate empty/whitespace and decimal/scientific notation defects, draft GitHub Issue content, and complete the remaining execution, bug report, AI gap, skill evaluation, audit, and log documentation. Evidence screenshots are left for the student to add manually.
- Output summary: Updated FR-06 test cases and execution results, recorded 21 executed cases with 11 passed and 10 failed, mapped failed tests to 9 GitHub Issues, updated `STUDENT_ID_Bug_Report.md`, revised FR-06 AI gap analysis based on execution, and evaluated the reusable skill using FR-06 results.
- Human review: The student reviewed the GitHub Issue list and confirmed that 9 open issues were created, including separate issues for decimal quantity and scientific notation quantity.
- Corrections made by student: The student requested defect splitting for empty versus whitespace and decimal versus scientific notation; the documentation was updated accordingly.

### Interaction 5

- Tool: Codex Browser
- Date and time: 2026-07-02
- Prompt: Asked Codex to use the in-app browser to execute FR-10 test cases from the Web User and Admin frontend applications, create necessary test data, keep the data for later student retesting, and draft bug reports with screenshot placeholders instead of attaching evidence immediately.
- Output summary: Created FR-10 order-state test data, executed 29 FR-10 test cases through Frontend UI, updated `05-test-cases.csv` and `06-test-execution.md`, and created `features/FR10_Order_State_Machine/bug-draft.md` with two defect drafts.
- Human review: The student reviewed the FR-10 defect drafts and created GitHub Issues `#10` and `#11`.
- Corrections made by student: Teacher clarification was applied: functional testing result is based on Frontend UI behavior, while backend/API was used only as data setup support.

### Interaction 6

- Tool: Codex Browser
- Date and time: 2026-07-03
- Prompt: Asked Codex to use the in-app browser to think extensively, test both Web User and Admin frontend applications, check whether additional bugs exist, and ensure FR-10 test coverage is complete.
- Output summary: Recreated FR-10 test data, confirmed the two existing FR-10 defects, checked User final-state action visibility, checked Admin cancellation from `confirmed`, added three supplemental Domain Testing cases, and updated execution/report/traceability counts.
- Human review: The student should review the new `FR10-DT-023` to `FR10-DT-025` rows and decide whether to keep them in the final submitted test set.
- Corrections made by student: TODO

### Interaction 7

- Tool: Codex
- Date and time: 2026-07-03
- Prompt: Asked Codex to read and use `.agent/SKILL.md`, use templates in `.agent/templates/`, and create Domain Testing and Boundary Value Analysis for FR-15 Product CRUD Admin with raw output, human review, and final output.
- Output summary: Created `.agent/examples/FR15-example/` with input requirement, raw skill output, human review, and final output. Updated FR-15 domain model, BVA, 48 draft test cases, and AI gap analysis.
- Human review: Pending student review before execution.
- Corrections made by student: TODO

### Interaction 8

- Tool: Codex Browser
- Date and time: 2026-07-03
- Prompt: Asked Codex to use the in-app browser to execute the created test cases and complete the related documentation files.
- Output summary: Executed 48 FR-15 Product CRUD Admin test cases from Admin Web UI, updated `04-test-cases.csv`, created the execution summary, recorded UI-scope blocked cases, drafted six defect reports, linked available evidence screenshots, updated the main report, AI gap analysis, RTM, and execution log.
- Human review: The student reviewed FR-15 bug drafts, created GitHub Issues `#12` to `#17`, and attached evidence screenshots on GitHub.
- Corrections made by student: The decimal price case was changed from a confirmed defect to `REVIEW-FR15-006` because it passes the current `price > 0` wording unless integer-only VND is confirmed.

### Interaction 9

- Tool: Codex
- Date and time: 2026-07-04
- Prompt: Asked Codex to read and use `.agent/SKILL.md`, use templates in `.agent/templates/`, create Domain Testing and BVA for FR05_Product_Search_Mobile, record raw output, human review, final output, create seed data for manual evidence capture, and provide a short Vietnamese draft checklist for student execution.
- Output summary: Created `.agent/examples/FR05-example/` with input requirement, raw skill output, human review, and final output. Updated FR-05-M domain model, BVA, 24 draft test cases, execution skeleton, AI gap analysis, main report, RTM, execution log, and added `test-data/seed-fr05-mobile-products.js`.
- Human review: Student later executed the mobile cases and provided actual results for documentation.
- Corrections made by student: Added execution observations, including whitespace search, empty-state, Home reset, and long-keyword layout issues.

### Interaction 10

- Tool: Codex + Android emulator check
- Date and time: 2026-07-04
- Prompt: Asked Codex to use the student's `Execution.xlsx` actual results, treat remaining `TODO` cells as no issue, run emulator double-check where possible, and update bug report plus related documentation.
- Output summary: Updated FR-05-M execution results to 25 executed cases with 20 passed, 5 failed, and 0 blocked. Split search defects into separate issues for untrimmed whitespace input, missing empty-state message, header/home navigation keeping previous search results, and long-keyword layout break. Updated `04-test-cases.csv`, `Execution.xlsx`, `05-test-execution.md`, `06-ai-gap-analysis.md`, `bug-draft.md`, `STUDENT_ID_Bug_Report.md`, main report, RTM, and execution log.
- Human review: Student identified the header/home reset behavior as an additional issue, requested that the original combined no-result/whitespace bug be separated, and created GitHub Issues `#18` to `#21`.
- Corrections made by student: Student added mobile screenshot evidence for the available FR-05-M issues; local evidence paths were recorded where files were present.

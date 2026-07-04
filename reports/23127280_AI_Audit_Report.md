**Faculty of Information Technology (FIT) - Ho Chi Minh City University of Science (HCMUS)**

**CS423 / CSC13003 - Software Testing (AI-augmented - 2026)**

**AI POLICY - TEMPLATES - 2026 v1.0**

# **AI Audit Report - 5-section Template per Artifact**

*Mandatory appendix for every AI-assisted homework (HW#01-HW#06, and Seminar).*

*Adapted from Med Kharbach, PhD (2026) - AI Use Policy Templates for Higher Education. CC BY-NC-SA 4.0. This adaptation is prepared for FIT@HCMUS - CS423 / CSC15003 Software Testing course.*

## **1. Student Information**

| Field | Value |
| :---- | :---- |
| **Student name (printed):** | Nguyen Hien Tuan Anh |
| **Student ID:** | 23127280 |
| **Class / Cohort:** | 23KTPM2 |
| **Assignment ID (e.g., HW#00, HW#02):** | HW02-AI |
| **Assignment date:** | 2026-07-04 |
| **AI tool(s) used:** | Codex; ChatGPT/Codex-style AI assistant |
| **AI tool(s) used:** | [x] Yes  [ ] No |

## **2. Instructions (read before filling)**

* Add one row per AI-generated artifact (test case, script, checklist, OpenAPI spec, JMeter plan, etc.).
* Paste the verbatim prompt - DO NOT paraphrase.
* Paste the verbatim AI output (or include a labelled screenshot in the report).
* Tag the verdict: VALID / INVALID / INCOMPLETE.
* Reasoning must cite a course slide, ISTQB section, or technical RFC.
* Show the corrected artifact with the change highlighted.
* Sample rows are in italic - replace them before submission.

## **3. Audit Table - one row per artifact**

| (1) Prompt + Tool | (2) AI Output | (3) Verdict | (4) Reasoning (ISTQB) | (5) Student Fix |
| :---- | :---- | :---- | :---- | :---- |
| **Artifact #1 - HW02 repository documentation structure and assignment artifacts**<br>Tool: Codex<br>Time: 2026-06-29<br>Prompt excerpt: Asked Codex to act as an experienced Software Testing teacher and guide the initial HW02 repository setup after the repository was cloned. | The AI created assignment folders, report skeletons, feature skeleton files, evidence folders, logs, and traceability templates. | INCOMPLETE | ISTQB CTFL v4.0.1 study guide, Sec. 1.4 explains that test work products must be based on the test basis and verified by execution where applicable. The generated structure was only a scaffold and did not prove SUT behavior. | I manually verified that the backend, Web User app, Admin Web app, and mobile/Expo setup ran locally, then kept the generated structure only as a documentation scaffold. |
| **Artifact #2 - Requirement analysis and detailed requirement gaps for selected features**<br>Tool: Codex<br>Time: 2026-06-29<br>Prompt excerpt: Asked Codex to perform requirement analysis and make the requirement gap sections detailed and broad enough to cover real missing or ambiguous requirement issues. | The AI expanded requirement analysis for FR-06 Product Detail View, FR-10 Order State Machine, FR-15 Product Management CRUD, and FR-05-M Product Listing and Search on Mobile. It added detailed gap IDs, risk levels, temporary assumptions, verification approaches, and updated the global assumptions/gaps file and requirement traceability matrix. | INCOMPLETE | ISTQB CTFL v4.0.1 study guide, Sec. 1.4 emphasizes traceability from test basis to test work products. AI-generated gaps can be incomplete or over-assumptive, so each one required human review against the SRS and observed behavior. | I reviewed the gap list, clarified assumptions, removed implementation-based conclusions, and used only reviewed assumptions when designing equivalence classes, boundary values, transition cases, and expected results. |
| **Artifact #3 - FR-06 Domain Testing/BVA artifacts and reusable Agent Skill**<br>Tool: Codex<br>Time: 2026-07-02<br>Prompt excerpt: Asked Codex to complete FR-06 Domain Testing and Boundary Value Analysis, create 16-22 test cases, and build a reusable Agent Skill with templates, FR-06 example, raw output, human review, guardrails, and skill change log. | The AI created the FR-06 domain model, BVA, 21 test cases, FR-06 AI gap analysis, FR-06 prompt/raw-output logs, reusable `.agent` skill workflow, templates, FR-06 worked example, skill evaluation, and skill change log. | INCOMPLETE | ISTQB CTFL v4.0.1 study guide, Sec. 1.4 describes test analysis and test design as work products that require review and later execution evidence. Generated test cases are not automatically valid until checked against the SRS and SUT behavior. | I reviewed the FR-06 partitions, boundaries, and test cases before using them for manual execution and defect confirmation. |
| **Artifact #4 - FR-06 execution results, bug reports, and AI gap analysis**<br>Tool: Codex<br>Time: 2026-07-02<br>Prompt excerpt: Asked Codex to compare the student's manual FR-06 testing results with the generated test table, update execution results, separate empty/whitespace and decimal/scientific notation defects, draft GitHub Issue content, and complete execution, bug report, AI gap, skill evaluation, audit, and log documentation. | The AI updated FR-06 test cases and execution results, recorded 21 executed cases with 11 passed and 10 failed, mapped failed tests to 9 GitHub Issues, updated `STUDENT_ID_Bug_Report.md`, revised FR-06 AI gap analysis based on execution, and evaluated the reusable skill using FR-06 results. | INCOMPLETE | ISTQB CTFL v4.0.1 study guide, Sec. 1.4 states that test execution compares actual and expected results and produces defect reports. AI can draft reports, but only human execution and screenshots can confirm the actual failures. | I reviewed the issue list, confirmed 9 open FR-06 issues, attached evidence, and requested separate tracking for empty versus whitespace and decimal versus scientific-notation defects. |
| **Artifact #5 - FR-10 frontend order-state execution and defect drafts**<br>Tool: Codex Browser<br>Time: 2026-07-02<br>Prompt excerpt: Asked Codex to use the in-app browser to execute FR-10 test cases from the Web User and Admin frontend applications, create necessary test data, keep the data for retesting, and draft bug reports with screenshot placeholders. | The AI created FR-10 order-state test data, executed 29 FR-10 test cases through Frontend UI, updated `05-test-cases.csv` and `06-test-execution.md`, and created `features/FR10_Order_State_Machine/bug-draft.md` with two defect drafts. | INCOMPLETE | ISTQB CTFL v4.0.1 Sec. 4 supports state-transition testing, but the UI execution result and defect validity still require human review, especially because the teacher clarified functional testing should be based on the frontend UI. | I reviewed the FR-10 defect drafts, created GitHub Issues `#10` and `#11`, and applied teacher clarification that backend/API was used only as data setup support. |
| **Artifact #6 - Supplemental FR-10 coverage and final traceability update**<br>Tool: Codex Browser<br>Time: 2026-07-03<br>Prompt excerpt: Asked Codex to use the in-app browser to think extensively, test both Web User and Admin frontend applications, check whether additional bugs exist, and ensure FR-10 test coverage is complete. | The AI recreated FR-10 test data, confirmed the two existing FR-10 defects, checked User final-state action visibility, checked Admin cancellation from `confirmed`, added three supplemental Domain Testing cases, and updated execution/report/traceability counts. | INCOMPLETE | ISTQB CTFL v4.0.1 Sec. 1.4 requires that execution results and traceability be reviewed against the test basis. Supplemental AI exploration can improve coverage but may add cases that need scope review. | I reviewed the supplemental FR-10 rows and kept the added coverage only where it matched the intended frontend functional testing scope. |
| **Artifact #7 - FR-15 Product CRUD Admin Domain Testing/BVA design**<br>Tool: Codex<br>Time: 2026-07-03<br>Prompt excerpt: Asked Codex to read and use `.agent/SKILL.md`, use templates in `.agent/templates/`, and create Domain Testing and Boundary Value Analysis for FR-15 Product CRUD Admin with raw output, human review, and final output. | The AI created `.agent/examples/FR15-example/` with input requirement, raw skill output, human review, and final output. It updated FR-15 domain model, BVA, 48 draft test cases, and AI gap analysis. | INCOMPLETE | ISTQB CTFL v4.0.1 Sec. 4 supports equivalence partitioning and boundary value analysis, but generated CRUD validation cases must be checked for UI reachability and requirement wording. | I reviewed optional fields, price ambiguity, category constraints, update-isolation checks, and UI/API reachability before execution. |
| **Artifact #8 - FR-15 Admin Web execution and issue records**<br>Tool: Codex Browser<br>Time: 2026-07-03<br>Prompt excerpt: Asked Codex to use the in-app browser to execute the created FR-15 test cases and complete the related documentation files. | The AI executed 48 FR-15 Product CRUD Admin test cases from Admin Web UI, updated `04-test-cases.csv`, created the execution summary, recorded UI-scope blocked cases, drafted six defect reports, linked available evidence screenshots, updated the main report, AI gap analysis, RTM, and execution log. | INCOMPLETE | ISTQB CTFL v4.0.1 Sec. 1.4 states that actual results must be compared with expected results. AI execution support required human confirmation of screenshots, issue text, and whether decimal price was a true defect. | I reviewed FR-15 bug drafts, created GitHub Issues `#12` to `#17`, attached evidence screenshots, and changed decimal price to `REVIEW-FR15-006` because it passes the current `price > 0` wording unless integer-only VND is confirmed. |
| **Artifact #9 - FR-05-M Mobile Product Listing/Search Domain Testing/BVA design**<br>Tool: Codex<br>Time: 2026-07-04<br>Prompt excerpt: Asked Codex to read and use `.agent/SKILL.md`, use templates in `.agent/templates/`, create Domain Testing and BVA for FR05_Product_Search_Mobile, record raw output, human review, final output, create seed data for manual evidence capture, and provide a short Vietnamese draft checklist for execution. | The AI created `.agent/examples/FR05-example/` with input requirement, raw skill output, human review, and final output. It updated FR-05-M domain model, BVA, 24 draft test cases, execution skeleton, AI gap analysis, main report, RTM, execution log, and added `test-data/seed-fr05-mobile-products.js`. | INCOMPLETE | ISTQB CTFL v4.0.1 Sec. 4 supports partition and boundary design, but FR-05-M is a mobile feature, so generated cases needed real device/emulator execution and screenshots before pass/fail conclusions. | I used the generated checklist for mobile manual testing, then provided actual results and corrections for the execution files. |
| **Artifact #10 - FR-05-M mobile execution review, emulator check, and final issue links**<br>Tool: Codex + Android emulator check<br>Time: 2026-07-04<br>Prompt excerpt: Asked Codex to use the student's `Execution.xlsx` actual results, treat remaining `TODO` cells as no issue, run emulator double-check where possible, and update bug report plus related documentation. | The AI updated FR-05-M execution results to 25 executed cases with 20 passed, 5 failed, and 0 blocked. It split search defects into untrimmed whitespace input, missing empty-state message, header/Home navigation keeping previous search results, and long-keyword layout break. It updated `04-test-cases.csv`, `Execution.xlsx`, `05-test-execution.md`, `06-ai-gap-analysis.md`, `bug-draft.md`, `STUDENT_ID_Bug_Report.md`, main report, RTM, and execution log. | INCOMPLETE | ISTQB CTFL v4.0.1 Sec. 1.4 requires real observed actual results and evidence. The emulator check was limited by insufficient storage, so student-provided mobile execution remained the primary evidence. | I identified the Home reset issue, requested that whitespace and no-result defects be separated, created GitHub Issues `#18` to `#21`, and added available mobile screenshot evidence. |

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 10 | 100% |
| **VALID (correct, accepted as-is)** | 0 | 0% |
| **INVALID (wrong; rejected)** | 0 | 0% |
| **INCOMPLETE (acceptable after edits)** | 10 | 100% |

## **5. Conclusion - When should AI be used (or not)?**

* AI was useful for starting HW02 quickly: it organized the assignment structure, clarified setup work, drafted documentation templates, and prepared reusable places for Domain Testing, Boundary Value Analysis, state-transition analysis, bug reporting, evidence, and AI gap analysis.
* However, AI output cannot be submitted as-is. The student must verify the SUT behavior, capture screenshots, design and review equivalence classes and boundary values, execute tests, compare actual results with expected results, and report confirmed bugs with evidence.
* My recommendation is to use AI as a structured testing assistant for drafting and cross-checking, but always validate against the EShop SRS, the ISTQB CTFL v4.0.1 study guide, and the executed behavior of the running application.

## **6. Mandatory Disclosure (paste verbatim)**

The HW02 setup structure, AI documentation adaptation, requirement analysis, Domain Testing/BVA planning, state-transition analysis, execution documentation, bug report drafts, and AI gap analysis were assisted by Codex. I reviewed and modified the generated materials to match the EShop SUT requirements, the selected features FR-06, FR-10, FR-15, and FR-05-M, teacher clarification about frontend functional testing, and the course requirement to submit AI-02 and AI-03. I confirm I did not use AI to generate any artifact listed in the prohibited category.

## **Signature**

| Student name (printed): | NGUYEN HIEN TUAN ANH |
| :---- | :---- |
| **Student ID:** | 23127280 |
| **Class / Cohort:** | 23KTPM2 |
| **Course:** | CSC13003 - Software Testing |
| **Instructor:** | Truong Phuoc Loc; Ho Tuan Thanh; Lam Quang Vu |
| **Date:** | 2026-07-04 |
| **Signature:** | Anh |

## **References**

* Kharbach, M. (2026). AI Use Policy Templates for Higher Education. CC BY-NC-SA 4.0.
* ISTQB Foundation Level Syllabus (latest version).
* ISTQB Foundation Level (CTFL v4.0.1) study guide.
* Hardman, P. (2025). A Post-AI Learning Taxonomy.
* Fuster Rabella, M. (2025). OECD Education Working Paper No. 338.
* Perkins, M., Roe, J., & Furze, L. (2025). AI Assessment Scale.
* Anthropic (2025). Building reliable AI test agents - engineering blog.
* DeepEval & Promptfoo documentation - testing frameworks for LLM systems.

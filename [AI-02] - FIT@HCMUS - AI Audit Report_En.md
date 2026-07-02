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
| **Assignment date:** | 2026-06-29 |
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
| **Artifact #1 - HW02 Day 1 setup and documentation structure**<br>Tool: Codex<br>Time: 2026-06-29<br>Prompt excerpt: Hãy đóng vai thầy giáo dạy môn Kiểm thử phần mềm, có kinh nghiệm trên 10 năm, có thể áp dụng AI vào việc chấm bài và đánh giá học sinh, hãy chỉ em thực hiện bài tập HW2 này theo kế hoạch trên, bắt đầu từ các công việc của ngày 1, hiện tại em mới clone repo về. | The AI reviewed the HW02 assignment brief, the provided 1.5-week plan, and the cloned EShop SUT repository. It created or organized the Day 1 assignment structure, feature folders, report skeletons, evidence folders, setup logs, test-data placeholders, AI documentation files, and an initial Agent Skill skeleton. | INCOMPLETE | ISTQB CTFL v4.0.1 study guide, Sec. 1.4 explains that test work products should be based on the test basis and that test execution compares actual and expected results. The AI output is a setup and documentation scaffold only. It does not prove that the SUT works, that screenshots are valid, or that test cases have been reviewed and executed. | I manually verified that the backend, web user app, admin web app, and mobile/Expo setup run locally. I captured setup evidence, filled environment details, and kept the SUT README as the test basis instead of replacing it. |
| **Artifact #2 - HW02 AI documentation format update**<br>Tool: Codex<br>Time: 2026-06-29<br>Prompt excerpt: sử dụng 2 file này cho HW2 không cần AI-05, đồng thời chỉnh skill $homework-ai-docs chỉ cần 2 file AI-02, AI-03, dựa trên format, định dạng đã có trong 2 file đã gửi, chỉ chỉnh sửa nội dung cho phù hợp với phần bài tập tuần này. | The AI updated the local `homework-ai-docs` skill so that it creates or updates only AI-02 and AI-03, not AI-05. It also adapted the HW02 AI-02 and AI-03 documents from the HW01 Markdown format and changed the content to match HW02 Domain Testing. | INCOMPLETE | ISTQB CTFL v4.0.1 study guide, Sec. 1.5 states that tools support testing but do not replace human judgment. The AI correctly adjusted the documentation workflow, but the final audit must still be reviewed after all HW02 artifacts, prompts, test cases, bugs, and execution evidence are complete. | I will review the final AI-02/AI-03 documents before submission, add all later prompts and outputs, update artifact counts, and remove or correct any incomplete AI-generated statements. |
| **Artifact #3 - Day 2 requirement analysis and requirement gap identification**<br>Tool: Codex<br>Time: 2026-06-29<br>Prompt excerpt: Thực hiện tiếp kế hoạch ngày 2 các phần requirement gap nên cần liệt kê kĩ và bao quát để bao quát hết các vấn đề thực sự thiếu của requirement. | The AI expanded the requirement analysis for FR-06 Product Detail View, FR-10 Order State Machine, FR-15 Product Management CRUD, and FR-05-M Product Listing and Search on Mobile. It added detailed requirement summaries, actors/preconditions, input variables, requirement gaps, temporary assumptions, verification plans, risk notes, and a global assumptions/gaps index. | INCOMPLETE | ISTQB CTFL v4.0.1 study guide, Sec. 1.4 emphasizes traceability from the test basis to test work products. The AI output is useful for test analysis, but it is not final proof of correctness. The student must review each gap against the SRS, course materials, and observed SUT behavior before using it to derive Domain Testing and BVA test cases. | I will review the gap list, confirm ambiguous points where needed, and use only reviewed assumptions when designing equivalence classes, boundary values, transition cases, and expected results. |
| **Artifact #4 - FR-06 Domain Testing and Boundary Value Analysis test design**<br>Tool: Codex<br>Time: 2026-07-02<br>Prompt excerpt: Đây là kế hoạch ngày 3 đã chỉnh sửa hãy thực hiện và cho em review, khoan commit vội, cho em một đoạn tổng hợp việc đã làm ngắn gọn để e dễ check lại. | The AI created the FR-06 domain model, BVA, 21 test cases, quantity test data, prompt log, raw output summary, and AI gap analysis. It also built a reusable Agent Skill with templates and an FR-06 worked example. | INCOMPLETE | ISTQB CTFL v4.0.1 study guide, Sec. 1.4 describes test analysis, test design, and test implementation as work products that must be traceable to the test basis. The generated FR-06 artifacts are still test design, not execution evidence. They must be reviewed by the student and executed before any pass/fail verdict or bug report is accepted. | I will review the FR-06 equivalence partitions, boundary values, and 21 test cases, then execute them on the running SUT and attach evidence before marking results as passed or failed. |
| **Artifact #5 - Domain Testing and BVA test case generation for remaining FR-10, FR-15, and FR-05-M**<br>Tool: TODO<br>Time: TODO<br>Prompt excerpt: TODO | TODO: Paste or summarize the AI output used to draft Domain Testing and Boundary Value Analysis artifacts for the remaining selected features. | INCOMPLETE | ISTQB CTFL v4.0.1 study guide, Sec. 1.4 describes test analysis, test design, and traceability from test basis to test cases. AI-generated test cases must be checked against the EShop SRS, the ISTQB technique definitions, and actual feature behavior. | TODO: Review and correct generated equivalence classes, boundary values, state-transition cases, expected results, and traceability before final submission. |
| **Artifact #6 - Bug report drafting and AI gap analysis**<br>Tool: TODO<br>Time: TODO<br>Prompt excerpt: TODO | TODO: Paste or summarize the AI output used to draft bug reports, GitHub issue text, and AI gap analysis. | INCOMPLETE | ISTQB CTFL v4.0.1 study guide, Sec. 1.4 states that test execution records results and defect reports when actual results differ from expected results. AI can draft bug text, but it cannot replace screenshots, reproduction, and human confirmation of expected vs actual behavior. | TODO: Verify every bug on the running SUT, attach screenshots to GitHub Issues, and correct the AI gap analysis based on what the AI missed. |

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | TODO | 100% |
| **VALID (correct, accepted as-is)** | TODO | TODO |
| **INVALID (wrong; rejected)** | TODO | TODO |
| **INCOMPLETE (acceptable after edits)** | TODO | TODO |

## **5. Conclusion - When should AI be used (or not)?**

* AI was useful for starting HW02 quickly: it organized the assignment structure, clarified Day 1 setup work, drafted documentation templates, and prepared reusable places for Domain Testing, Boundary Value Analysis, bug reporting, evidence, and AI gap analysis.
* However, AI output cannot be submitted as-is. The student must verify the SUT behavior, capture screenshots, design and review equivalence classes and boundary values, execute tests, compare actual results with expected results, and report confirmed bugs with evidence.
* My recommendation is to use AI as a structured testing assistant for drafting and cross-checking, but always validate against the EShop SRS, the ISTQB CTFL v4.0.1 study guide, and the executed behavior of the running application.

## **6. Mandatory Disclosure (paste verbatim)**

The HW02 setup structure, AI documentation adaptation, and initial Domain Testing/BVA planning were assisted by Codex; I reviewed and modified the generated materials to match the EShop SUT requirements, the selected features FR-06, FR-10, FR-15, and FR-05-M, and the course requirement to submit AI-02 and AI-03. I confirm I did not use AI to generate any artifact listed in the prohibited category.

## **Signature**

| Student name (printed): | NGUYEN HIEN TUAN ANH |
| :---- | :---- |
| **Student ID:** | 23127280 |
| **Class / Cohort:** | 23KTPM2 |
| **Course:** | CSC13003 - Software Testing |
| **Instructor:** | Truong Phuoc Loc; Ho Tuan Thanh; Lam Quang Vu |
| **Date:** | 2026-06-29 |
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

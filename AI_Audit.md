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
| **Assignment ID (e.g., HW#00, HW#02):** | HW#06 |
| **Assignment date:** | 2026-08-18 |
| **AI tool(s) used:** | Codex |
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
| **Artifact #1 - Test-case file initialization**<br>Tool: Codex (primary agent)<br>Time: 2026-08-18 23:21 GMT+7<br>Full prompt: see Artifact #1 verbatim record below. | Proposed an Excel workbook with five sheets and a test-case column schema.<br>Full output: see Artifact #1 verbatim record below. | INCOMPLETE | The structure captured traceability, expected results, execution status, and AI-review fields, but the chosen `.xlsx` format no longer matched the student's explicit follow-up requesting CSV. ISTQB CTFL test-work-product principles require the documented format to remain usable and consistent with the agreed test process. | Replace the workbook deliverable with `test-cases/API_Test_Cases.csv` while retaining the traceability and audit columns. |
<!-- AUDIT_TABLE_ROWS_END -->

### Verbatim Artifact Records

### Artifact #1 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-18 23:21 GMT+7
- **Agent Used:** Codex (primary agent)
- **Prompt:**

````text
excel test case là tạo luôn có data hay tạo file thôi
````

- **AI Output:**

````text
Tạo file Excel và cấu trúc cột ngay, chưa cần điền test data.

Tạo `test-cases/API_Test_Cases.xlsx` với 5 sheet:

1. `Summary`
2. `Register`
3. `Checkout`
4. `CreateCoupon`
5. `Legend`

Ba sheet API dùng các cột:

Test ID
Requirement
Source (AI/Human)
Technique
Test Objective
Preconditions
Request Data
Expected Status
Expected Response
Audit Label
Audit Reason
Correction
Actual Result
Execution Status
Bug ID
Evidence

Sau đó:

- AI sinh test → điền vào các sheet.
- Audit → điền `VALID / INVALID / INCOMPLETE`.
- Chạy Postman → điền `Actual Result`, `Execution Status`, `Bug ID`.
- `Summary` → tổng hợp generated, added, executed, passed, failed và bugs.

Không điền dữ liệu giả để lấp chỗ trống.

Bước tiếp theo: tạo workbook với 5 sheet và hàng tiêu đề trên.
````

- **File Modifications:** None.

- **Verification Evidence:** The student's next instruction explicitly replaced the Excel deliverable with CSV. The corrected CSV is stored at `test-cases/API_Test_Cases.csv`.
- **Verdict:** INCOMPLETE
- **Reasoning:** The proposed fields were usable, but the output format required a subsequent correction from `.xlsx` to `.csv`.
- **Student Fixes:** Use one CSV file with explicit API and feature columns instead of separate workbook sheets.

<!-- ARTIFACT_DETAILS_END -->

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 1 | 100% |
| **VALID (correct, accepted as-is)** | 0 | 0% |
| **INVALID (wrong; rejected)** | 0 | 0% |
| **INCOMPLETE (acceptable after edits)** | 1 | 100% |

## **5. Conclusion - When should AI be used (or not)?**

AI is useful for proposing traceable test-case structures and reducing setup effort. Its output still requires human review because a technically reasonable artifact may not match the student's chosen submission format. The student should confirm the required format, preserve requirement-to-test traceability, and verify generated test content against the API specification before execution.

## **6. Mandatory Disclosure (paste verbatim)**

I used Codex to review the HW06 requirements, plan the API-testing workflow, configure the Postman and Newman setup, propose the test-case structure, and initialize the AI audit and CSV test-case files. I reviewed the outputs and changed the proposed Excel format to CSV. I remain responsible for validating every generated test case and for executing the tests. Console screenshots, Newman runs, GitHub Actions runs, bug reproductions, the self-drawn test-generator diagram, and submission evidence are not treated as genuine unless I produce and verify them myself.

## **Signature**

| Student name (printed): | NGUYEN HIEN TUAN ANH |
| :---- | :---- |
| **Student ID:** | 23127280 |
| **Class / Cohort:** | 23KTPM2 |
| **Course:** | CSC13003 - Software Testing |
| **Instructor:** | Truong Phuoc Loc; Ho Tuan Thanh; Lam Quang Vu |
| **Date:** | 2026-08-18 |
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


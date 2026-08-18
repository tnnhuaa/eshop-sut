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
| **Artifact #2 - Postman/Newman and CI preparation**<br>Tool: Codex (primary agent)<br>Time: 2026-08-18 23:43 GMT+7<br>Full prompt: see Artifact #2 verbatim record below. | Created sanitized Newman-compatible Postman JSON files, a backend HTTP 200 GitHub Actions smoke workflow, and updated the execution plan.<br>Full output: see Artifact #2 verbatim record below. | VALID | The collection structure, empty committed secrets, Newman run, HTML report, commit `88b21d3`, and successful GitHub Actions run provide direct evidence. This follows ISTQB test-environment preparation and test-execution evidence principles. | None required. |
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

### Artifact #2 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-18 23:43 GMT+7
- **Agent Used:** Codex (primary agent)
- **Prompt:**

````text
Chỉ 2 bước này, bước kiểm tra backend đã thành công trả status 200
````

- **AI Output:**

````text
Đã hoàn thành đúng hai phần yêu cầu.

1. Postman JSON cho Newman

   - postman/HW06_API_Testing.postman_collection.json
   - postman/HW06_LOCAL.postman_environment.json

   Đã kiểm tra:

   - Đúng schema Postman Collection v2.1.
   - Có LoginUser, LoginAdmin, GetProducts.
   - Có collection pre-request script cho X-Student-Id.
   - studentId, userToken, adminToken đều rỗng trong bản commit.

2. CI smoke

   - .github/workflows/api-tests.yml

   Workflow thực hiện:

   checkout
   → Node.js 22
   → npm ci backend
   → chạy backend
   → chờ GET /api/products
   → yêu cầu HTTP 200
   → upload backend log nếu fail

Plan.md đã cập nhật trạng thái. CI chưa được gọi là “pass” vì workflow chưa push và chưa có GitHub Actions run thật.

Bước tiếp theo: chạy collection JSON bằng Newman với studentId=23127280, sau đó push để kiểm tra CI smoke.
````

- **File Modifications:**
  - **File:** `postman/HW06_API_Testing.postman_collection.json`; **Action:** created; **Details:** added a Postman Collection v2.1 JSON containing Login User, Login Admin, Get Products, response assertions, and the student-header pre-request script.
  - **File:** `postman/HW06_LOCAL.postman_environment.json`; **Action:** created; **Details:** added a sanitized local environment with empty student ID and token values.
  - **File:** `.github/workflows/api-tests.yml`; **Action:** created; **Details:** added a GitHub Actions smoke job that installs backend dependencies, starts the SUT, and requires HTTP 200 from `/api/products`.
  - **File:** `Plan.md`; **Action:** edited; **Details:** recorded the created preparation artifacts and set Newman plus CI verification as the next action.

- **Verification Evidence:** Newman executed 3 requests, 3 test scripts, 3 pre-request scripts, and 3 assertions with 0 failures; see `postman/reports/setup-smoke.html` and `evidence/newman/preparation-newman-pass.png`. GitHub Actions run for commit `88b21d3` completed successfully; see `evidence/cicd/preparation-ci-smoke-pass.png`. The required student header is visible in `evidence/header/x-student-id-console.png`.
- **Verdict:** VALID
- **Reasoning:** Current files and student-produced execution evidence confirm that the exported collection and CI smoke workflow behaved as specified. The GitHub Actions deprecation annotation did not change the successful job result.
- **Student Fixes:** None required.

<!-- ARTIFACT_DETAILS_END -->

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 2 | 100% |
| **VALID (correct, accepted as-is)** | 1 | 50% |
| **INVALID (wrong; rejected)** | 0 | 0% |
| **INCOMPLETE (acceptable after edits)** | 1 | 50% |

## **5. Conclusion - When should AI be used (or not)?**

AI is useful for proposing traceable test structures, creating repeatable Postman/Newman setup artifacts, and drafting CI configuration. Human review remains necessary because a technically reasonable proposal may use the wrong deliverable format or remain unverified until the student executes it. AI should support test design and automation, while the student must choose the accepted format, verify behavior against the specification, and produce genuine execution evidence.

## **6. Mandatory Disclosure (paste verbatim)**

I used Codex to review the HW06 requirements, plan the API-testing workflow, create sanitized Postman/Newman configuration, draft the GitHub Actions smoke workflow, propose the test-case structure, and maintain the AI audit and CSV test-case files. I reviewed the outputs, changed the proposed Excel format to CSV, ran Newman, and verified the CI smoke result. I remain responsible for validating every generated test case and reproducing every reported defect. The console screenshots, Newman run, GitHub Actions run, future bug reproductions, self-drawn test-generator diagram, and submission evidence are student-produced evidence rather than AI-generated evidence.

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

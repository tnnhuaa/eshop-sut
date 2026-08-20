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
| **Artifact #3 - AI-assisted API test design**<br>Tool: Codex (primary agent)<br>Time: 2026-08-19 00:02 GMT+7<br>Full prompt: see Artifact #3 verbatim record below. | Added and structurally validated 105 AI-assisted test cases across the three selected APIs, then updated the plan and audit record.<br>Full output: see Artifact #3 verbatim record below. | VALID | Artifact #4 records the student's completed review, the six corrected non-valid cases, and 17 accepted student-designed extensions. The generated inventory is now supported by the human review required by the assignment and ISTQB test-work-product review principles. | Completed in Artifact #4. |
| **Artifact #4 - Human test extension and AI-case audit**<br>Tool: Codex (primary agent)<br>Time: 2026-08-20 11:29 GMT+7<br>Full prompt: see Artifact #4 verbatim record below. | Evaluated 18 proposed student cases, accepted 17, normalized their IDs/source, audited all 105 AI cases, corrected six non-valid cases, and updated the test-design records.<br>Full output: see Artifact #4 verbatim record below. | VALID | The final CSV has 122 unique cases with at least five human-designed cases per API. All AI rows have an allowed audit verdict and reasoning; every `INCOMPLETE` or `INVALID` row has a concrete correction. Structural checks and requirement comparison support the result. | None required before execution; commit the verified workstream artifacts. |
| **Artifact #5 - Test Design commit**<br>Tool: Codex (primary agent)<br>Time: 2026-08-20 11:42 GMT+7<br>Full prompt: see Artifact #5 verbatim record below. | Verified and committed the three Test Design artifacts with explicit staging while excluding the runtime database.<br>Full output: see Artifact #5 verbatim record below. | VALID | The staged file list contained only the CSV, plan, and AI audit; `git diff --check` passed; the runtime database remained unstaged. This provides an identifiable, reviewable configuration-management baseline for the completed workstream. | None required. |
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

### Artifact #3 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-19 00:02 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
Thực hiện tiếp tục phần B.Test Design, những phần cần em làm thì tổng hợp lại thành checklist để em làm sau khi anh đã làm xong tất cả phần việc anh có thể làm trong B.
````

- **AI Output:**

````text
Đã hoàn thành phần AI có thể thực hiện trong B.Test Design:

- Đã thêm 105 AI-assisted test cases vào test-cases/API_Test_Cases.csv: 35 Register, 35 Checkout và 35 Create Coupon.
- Đã kiểm tra đủ 21 cột, 105 ID duy nhất, không trùng mục tiêu và đúng endpoint.
- Không tạo 15 student-designed cases hoặc tự gán kết luận audit thay cho sinh viên.
- Đã cập nhật Plan.md và AI_Audit.md.
````

- **File Modifications:**
  - **File:** `test-cases/API_Test_Cases.csv`; **Action:** edited; **Details:** added 105 AI-assisted test cases with traceability, techniques, inputs, expected status and expected response.
  - **File:** `Plan.md`; **Action:** edited; **Details:** recorded the verified case counts, completed AI-generation checklist items, and set the next human-review action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended this verbatim interaction and refreshed the accuracy summary, conclusion, and disclosure.

- **Verification Evidence:** CSV parsing found 105 rows and 21 required columns; each API has 35 rows; all 105 test IDs and objectives are unique; all endpoints match the selected API; all rows remain `NOT_EXECUTED` with blank audit labels, actual results, and evidence.
- **Verdict:** VALID
- **Reasoning:** Artifact #4 records the completed student review and sufficient independent extensions, resolving the pending human work without changing the original generated inventory.
- **Student Fixes:** Completed in Artifact #4: all AI rows were reviewed and corrected where necessary, and at least five original cases were added per API.

### Artifact #4 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-20 11:29 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
Đây là test-case em đã bổ sung thủ công, hãy đánh giá độ hiệu quả cũng như có trùng với các test case khác không, nếu đạt thì bổ sung vào file đi a, phần audit hãy đánh dấu em đã duyệt tất cả.
````

- **AI Output:**

````text
Đã đánh giá và cập nhật B.Test Design:

- Chấp nhận 17/18 test case thủ công: 6 Register, 6 Checkout và 5 Create Coupon.
- Loại case chuẩn hóa khoảng trắng coupon vì yêu cầu không định nghĩa hành vi này và nó chồng lấn nhóm duplicate-code.
- Đã ghi nhận sinh viên duyệt đủ 105 AI cases: 99 VALID, 5 INCOMPLETE và 1 INVALID; sáu case không VALID đã được sửa.
- CSV hiện có 122 case với 122 ID và mục tiêu duy nhất. Plan.md và AI_Audit.md đã được cập nhật.
- Nội dung B.Test Design đã đủ; chưa commit và không stage backend/database.sqlite.

Đánh giá hiệu quả: 8.5/10. Không có mục tiêu trùng hoàn toàn; độ tương đồng cao nhất là 0.714 giữa kiểm tra max_uses_per_user bằng 0 và bằng 1.5, nhưng đây là hai phân vùng biên/kiểu dữ liệu khác nhau.

CSV đã cập nhật: :codex-file-citation{path="test-cases/API_Test_Cases.csv" purpose="output"}

Bước tiếp theo: kiểm tra diff rồi commit ba file Test Design, tiếp tục loại backend/database.sqlite khỏi staging.
````

- **File Modifications:**
  - **File:** `test-cases/API_Test_Cases.csv`; **Action:** edited; **Details:** added 17 accepted student-designed rows with `*-H-###` IDs, recorded the student's review of all 105 AI rows, and corrected five incomplete plus one invalid AI case.
  - **File:** `Plan.md`; **Action:** edited; **Details:** recorded 122 verified cases, completed the design/audit/extension checklist, and set the explicit commit as the next action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #4, refreshed Artifact #3 from INCOMPLETE to VALID using later evidence, and updated the summary and disclosure.

- **Verification Evidence:** The final CSV parses as 122 rows and 21 columns. It contains 41 Register, 41 Checkout, and 40 Create Coupon cases; 105 AI and 17 Human sources; 122 unique IDs and objectives; audit counts of 99 VALID, 5 INCOMPLETE, and 1 INVALID for AI rows; and a non-empty correction for every non-valid AI row. All cases remain `NOT_EXECUTED` with no fabricated execution evidence.
- **Verdict:** VALID
- **Reasoning:** The accepted cases cover distinct JSON types, schema shape, ownership isolation, stale state, concurrency, mass assignment, and date/time boundaries. The rejected whitespace-normalization case lacked a supporting requirement and overlapped existing duplicate-code coverage.
- **Student Fixes:** The student's past-expiry coupon case was corrected from expected 400 to 200 because FR-17 requires an expiry value but does not require it to be in the future. No other accepted human case required correction.

### Artifact #5 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-20 11:42 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
kiểm tra diff rồi commit ba file Test Design, tiếp tục loại backend/database.sqlite khỏi staging.
````

- **AI Output:**

````text
Đã commit xong ba file Test Design.

- Commit: test: complete reviewed API test design
- Đã commit: AI_Audit.md, Plan.md và test-cases/API_Test_Cases.csv.
- backend/database.sqlite vẫn chỉ là runtime state bị modified; file này không được stage hoặc commit.
- git diff --check không phát hiện lỗi và staged diff chỉ chứa đúng ba file yêu cầu.
- Plan.md đã đánh dấu B.Test Design hoàn tất; bước tiếp theo là triển khai REG-AI-001 đến REG-AI-008 trong Postman.

Artifacts 5-5 successfully appended to AI_Audit.md.
````

- **File Modifications:**
  - **File:** `Plan.md`; **Action:** edited; **Details:** marked the Test Design commit complete and set the first Register implementation batch as the single next action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #5 and refreshed the accuracy summary, conclusion, and disclosure.

- **Verification Evidence:** `git diff --check` passed. Explicit staging included only `AI_Audit.md`, `Plan.md`, and `test-cases/API_Test_Cases.csv`; `backend/database.sqlite` remained unstaged. The commit subject is `test: complete reviewed API test design`.
- **Verdict:** VALID
- **Reasoning:** The commit creates the required version-control baseline and preserves runtime database isolation.
- **Student Fixes:** None required.

<!-- ARTIFACT_DETAILS_END -->

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 5 | 100% |
| **VALID (correct, accepted as-is)** | 4 | 80% |
| **INVALID (wrong; rejected)** | 0 | 0% |
| **INCOMPLETE (acceptable after edits)** | 1 | 20% |

## **5. Conclusion - When should AI be used (or not)?**

AI is useful for proposing traceable test structures, generating broad technique-based test inventories, comparing candidate cases, creating repeatable Postman/Newman setup artifacts, and checking version-control scope. Human review was decisive: it identified five incomplete assumptions and one invalid percentage boundary, supplied 17 distinct extensions, and rejected an unsupported coupon-normalization scenario. AI should support design, consistency checks, and safe artifact handling, while execution results, defect confirmation, and evidence must still come from observed student runs.

## **6. Mandatory Disclosure (paste verbatim)**

I used Codex to review the HW06 requirements, plan the API-testing workflow, create sanitized Postman/Newman configuration, draft the GitHub Actions smoke workflow, generate 105 AI-assisted test cases, compare 18 student-proposed extensions, maintain the AI audit and CSV test-case files, and commit the verified Test Design artifacts with explicit file staging. I reviewed all AI cases, accepted 17 original cases, rejected one unsupported duplicate-code variant, and approved corrections for five incomplete and one invalid AI case. I remain responsible for executing the 122 final cases and reproducing every reported defect. The console screenshots, Newman runs, GitHub Actions runs, future bug reproductions, self-drawn test-generator diagram, and submission evidence are student-produced evidence rather than AI-generated evidence.

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

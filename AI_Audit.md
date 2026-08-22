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
| **Artifact #6 - Full API execution and local bug reporting**<br>Tool: Codex (primary agent)<br>Time: 2026-08-20 12:11 GMT+7<br>Full prompt: see Artifact #6 verbatim record below. | Implemented and executed all 122 Postman cases, recorded 35 pass / 87 fail results, sanitized reports, reproduced concurrency, and drafted 10 local bug groups.<br>Full output: see Artifact #6 verbatim record below. | VALID | Actual Newman output and file checks support the local execution. Artifact #7 verified the genuine screenshots, and Artifact #9 verified the 10 student-created public GitHub Issues with two uploaded images each. | Completed through Artifacts #7 and #9. |
| **Artifact #7 - Student execution evidence review**<br>Tool: Codex (primary agent)<br>Time: 2026-08-22 13:55 GMT+7<br>Full prompt: see Artifact #7 verbatim record below. | Verified 22 student-produced screenshots, corrected two filenames, and advanced the plan to public GitHub Issue creation.<br>Full output: see Artifact #7 verbatim record below. | VALID | The evidence set contains two readable Newman images plus 10 distinct Postman request/result pairs with matching Bug and Test IDs. The student later authorized Issue creation, then explicitly chose manual creation from prepared drafts. | Completed in Artifact #8. |
| **Artifact #8 - Manual GitHub Issue drafts**<br>Tool: Codex (primary agent)<br>Time: 2026-08-22 14:02 GMT+7<br>Full prompt: see Artifact #8 verbatim record below. | Stopped browser automation and created 10 copy-ready Markdown Issue bodies with matching evidence filenames.<br>Full output: see Artifact #8 verbatim record below. | VALID | File inspection found exactly 10 drafts; each contains severity, environment, reproduction steps, expected result, actual result, and two matching evidence image paths. No Issue was falsely claimed as published. | Completed and verified in Artifact #9. |
| **Artifact #9 - Public Issue verification and CI handoff**<br>Tool: Codex (primary agent)<br>Time: 2026-08-22 14:20 GMT+7<br>Full prompt: see Artifact #9 verbatim record below. | Verified 10 student-created public Issues, recorded their links in the Bug Report and CSV, closed Part C, and prepared a full-suite Newman GitHub Actions job with sanitized artifact upload.<br>Full output: see Artifact #9 verbatim record below. | VALID | GitHub's public API returned Issues #24–#33 with matching Bug IDs/titles, Expected/Actual sections, and two image URLs each. CSV inspection found 122 rows, 10 unique Issue URLs, and no unknown Bug ID. Local CI-path verification reproduced 35 passed / 87 failed cases and zero JWT patterns after sanitization. The response does not claim an unobserved GitHub Actions run. | Commit/push the prepared workflow and capture the real run/artifact evidence. |
| **Artifact #10 - Execution and CI preparation commit**<br>Tool: Codex (primary agent)<br>Time: 2026-08-22 14:39 GMT+7<br>Full prompt: see Artifact #10 verbatim record below. | Committed the verified Part C deliverables and full-suite CI preparation, preserved runtime-database isolation, and reduced the next student action to pushing the branch.<br>Full output: see Artifact #10 verbatim record below. | VALID | Commit `90067ce` contains 184 deliverable files under the expected subject. Cached diff validation passed after formatting cleanup; the staged file list excluded `backend/database.sqlite` and ignored raw Newman JSON. Artifact #11 verifies the resulting public Actions run and artifact. | Completed in Artifact #11. |
| **Artifact #11 - Full-suite CI run verification**<br>Tool: Codex (primary agent)<br>Time: 2026-08-22 14:45 GMT+7<br>Full prompt: see Artifact #11 verbatim record below. | Verified the student-provided Actions run and screenshots, saved two CI evidence images, closed D1, and advanced the plan to the controlled CI demonstration pair.<br>Full output: see Artifact #11 verbatim record below. | VALID | GitHub's public API confirms run `32560329025` completed for commit `ddb3900`: smoke succeeded, full Newman failed, and non-expired artifact `hw06-newman-report` exists. The screenshots show 122 cases, 35 passed / 87 failed, 100 assertion failures, token redaction, exit code 1, and successful evidence upload. | Create the separate all-pass and exactly-one-controlled-failure CI demonstration runs. |
| **Artifact #12 - Controlled CI demonstration baseline**<br>Tool: Codex (primary agent)<br>Time: 2026-08-22 14:53 GMT+7<br>Full prompt: see Artifact #12 verbatim record below. | Created a separate four-request products/login demonstration with all-pass and controlled-failure modes.<br>Full output: see Artifact #12 verbatim record below. | INVALID | The mechanics were locally verified and did not alter the genuine suite, but the sample did not exercise Register, Checkout, and Create Coupon. It therefore missed the assignment's selected-API scope. | Replaced by the selected-API sample suite in Artifact #14. |
| **Artifact #13 - All-pass CI verification and controlled-failure commit**<br>Tool: Codex (primary agent)<br>Time: 2026-08-22 15:15 GMT+7<br>Full prompt: see Artifact #13 verbatim record below. | Verified the public all-pass run and artifact, then prepared a controlled-failure commit based on a four-request demonstration.<br>Full output: see Artifact #13 verbatim record below. | INVALID | The public metadata and local counts were real, but the demonstration's test cases targeted products/login rather than the three selected APIs. This did not safely satisfy the assignment's literal requirement for all API test cases passing and one API test case failing. | Corrected in Artifact #14 by replacing the demo with selected-API cases for Register, Checkout, and Create Coupon. |
| **Artifact #14 - Selected-API CI sample correction**<br>Tool: Codex (primary agent)<br>Time: 2026-08-22 15:32 GMT+7<br>Full prompt: see Artifact #14 verbatim record below. | Replaced the generic CI demonstration with a deterministic sample suite covering all three selected APIs, verified all-pass and exactly-one-failure modes, and prepared the corrected green baseline.<br>Full output: see Artifact #14 verbatim record below. | VALID | The collection now contains target cases for `POST /api/register`, `POST /api/checkout`, and `POST /api/admin/coupons`, with setup requests labelled separately. Local Newman evidence shows 6 requests/16 assertions/0 failures in green mode and exactly one failed assertion inside `CPN-CI-001` in controlled mode. | Push and capture the corrected green run before creating the red commit that changes only the mode flag. |
| **Artifact #15 - Selected-API all-pass CI evidence**<br>Tool: Codex (primary agent)<br>Time: 2026-08-22 16:16 GMT+7<br>Full prompt: see Artifact #15 verbatim record below. | Verified two student-produced GitHub Actions screenshots, saved them as repository evidence, recorded the public run and artifact, and closed the corrected all-pass checklist item.<br>Full output: see Artifact #15 verbatim record below. | VALID | Public metadata and the screenshots agree on run `32562812190`, commit `929ce04`, the successful selected-API job, uploaded artifact, all three selected target cases, and Newman's 6 requests/16 assertions/0 failures. | Create the red sample commit by changing only `controlledFailure` to `true`, then capture the genuine one-failure run. |
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

### Artifact #6 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-20 12:11 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
Oke tiếp theo hãy thực hiện phần C, nếu cần xác nhận hay setup gì thí dừng lại yêu cầu em làm.
````

- **AI Output:**

````text
Đã hoàn thành phần local/automation của C; Part C chưa thể đóng vì còn ảnh thật và GitHub Issues cần em thực hiện hoặc xác nhận.

- Đã triển khai đủ 122 Postman cases: 41 Register, 41 Checkout, 40 Create Coupon.
- Final Newman run: 122/122 executed, 35 passed, 87 failed; không có lỗi setup/test environment.
- Đã ghi kết quả, trạng thái, evidence và Bug_ID cho toàn bộ CSV.
- Đã gom 87 failed cases thành 10 product-defect groups và tái hiện riêng lỗi concurrent checkout: hai request đều trả 200, tạo hai order và không xóa cart.
- Đã tạo Newman HTML + summary đã redacted token; raw JSON chứa runtime token được giữ ngoài Git.
- Chưa commit vì em chưa yêu cầu commit phần C.

Em cần làm tiếp:

1. Chạy Newman lại và chụp terminal có `localhost:3000` cùng bảng tổng kết.
2. Trong Postman, chụp request/response thật cho 10 bug ID theo checklist cuối Bug Report.
3. Nhắn: “đã chụp xong, cho phép tạo GitHub Issues” để anh tạo/cập nhật 10 issue và gắn link. Anh dừng tại đây vì đây là thao tác public cần em xác nhận.

Các file chính:

- test-cases/API_Test_Cases.csv
- reports/23127280_Bug_Report.md
- postman/reports/final-newman.html
- Plan.md

Artifacts 6-6 successfully appended to AI_Audit.md.
````

- **File Modifications:**
  - **File:** `.gitignore`; **Action:** edited; **Details:** excluded raw Newman JSON because it contains runtime tokens.
  - **File:** `api-tests/package.json`; **Action:** edited; **Details:** added collection-build and local Newman scripts.
  - **File:** `api-tests/scripts/build-full-collection.js`; **Action:** created; **Details:** generated setup and 122 API requests with deterministic data, authentication, and assertions.
  - **File:** `api-tests/scripts/analyze-newman.js`; **Action:** created; **Details:** reduced Newman executions to 122 unique per-case results and failure categories.
  - **File:** `api-tests/scripts/sanitize-newman-reports.js`; **Action:** created; **Details:** removed JWT values from the committed-candidate HTML and summary.
  - **File:** `api-tests/scripts/reproduce-concurrent-checkout.js`; **Action:** created; **Details:** sent two same-cart checkout requests concurrently and saved sanitized evidence.
  - **File:** `postman/HW06_API_Testing.postman_collection.json`; **Action:** replaced content; **Details:** expanded the setup-only collection into the full 122-case suite.
  - **File:** `postman/data/*.json`; **Action:** created; **Details:** added generated per-API data files.
  - **File:** `postman/reports/final-newman.html`; **Action:** created and sanitized; **Details:** stored the full Newman HTML execution report without runtime JWTs.
  - **File:** `postman/reports/final-newman-summary.json`; **Action:** created and sanitized; **Details:** stored 122 unique results and aggregate counts without runtime JWTs.
  - **File:** `test-cases/API_Test_Cases.csv`; **Action:** edited; **Details:** corrected two authentication oracles and recorded actual result, execution status, Bug ID, and evidence for all 122 cases.
  - **File:** `evidence/execution/concurrent-checkout.json`; **Action:** created; **Details:** recorded two HTTP 200 responses, two created orders, null totals, and a nonempty cart.
  - **File:** `reports/23127280_Bug_Report.md`; **Action:** created; **Details:** documented 10 reproducible product-defect groups and the remaining screenshot/Issue checklist.
  - **File:** `Plan.md`; **Action:** edited; **Details:** recorded final execution counts, completed local execution items, and set the next student evidence action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #6 and refreshed accuracy, conclusion, and disclosure.

- **Verification Evidence:** A clean Newman run executed 125 collection items, 287 HTTP requests, and 678 assertions. The analyzer found 122 unique cases: 35 passed and 87 failed, with no duplicate case execution records or failed setup assertions. CSV validation found 122 unique IDs, 35 `PASSED`, 87 `FAILED`, no `NOT_EXECUTED` rows, and evidence for every row. Ten unique Bug IDs cover all failed rows. The HTML and summary contain zero JWT-shaped strings; committed environment token values remain empty. The focused concurrency reproduction produced `[200, 200]`, two orders, and a nonempty cart.
- **Verdict:** VALID
- **Reasoning:** Local implementation, execution, defect grouping, and sanitization are supported by observed tool output. Artifact #7 verified the genuine screenshots, and Artifact #9 verified all 10 student-created public Issues and their uploaded evidence.
- **Student Fixes:** Completed through Artifacts #7 and #9.

### Artifact #7 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-22 13:55 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
A kiểm tra lại và chuyển sang bước kế tiếp theo plan
````

- **AI Output:**

````text
Đã kiểm tra xong: evidence đạt và Plan đã chuyển sang bước tạo GitHub Issues. :codex-annotation{index="1"}

- Có 22 ảnh: 2 ảnh Newman và 20 ảnh Postman cho 10 Bug ID.
- Ảnh Newman thể hiện `localhost:3000`, 287 requests, 678 assertions và 100 assertion failures.
- Mỗi Bug ID có đúng một ảnh request và một ảnh result; 20 ảnh có nội dung khác nhau.
- Không thấy JWT, token hoặc cookie trong vùng ảnh.
- Đã đổi hai tên sai từ `BUG-REG-003_CHK-AI-035_*` thành `BUG-REG-003_REG-AI-035_*`.
- Đã cập nhật `Plan.md`, checklist evidence và `reports/23127280_Bug_Report.md`.

Bước hiện tại bị chặn trước thao tác public: môi trường chưa có lệnh `gh`, và anh cần quyền rõ ràng trước khi tạo 10 Issues công khai.

Trả lời đúng câu này để tiếp tục:

`Cho phép anh tạo 10 GitHub Issues public trên tnnhuaa/eshop-sut.`

Sau đó anh sẽ dùng giao diện GitHub đã đăng nhập; nếu GitHub yêu cầu đăng nhập lại, anh sẽ dừng để em xử lý.

Artifacts 7-7 successfully appended to AI_Audit.md.
````

- **File Modifications:**
  - **File:** `evidence/bugs/BUG-REG-003_REG-AI-035_request.png`; **Action:** renamed; **Details:** corrected the Test ID segment from `CHK-AI-035` to `REG-AI-035`.
  - **File:** `evidence/bugs/BUG-REG-003_REG-AI-035_result.png`; **Action:** renamed; **Details:** corrected the Test ID segment from `CHK-AI-035` to `REG-AI-035`.
  - **File:** `Plan.md`; **Action:** edited; **Details:** marked execution evidence complete, corrected audit totals, and set public Issue authorization as the single next action.
  - **File:** `reports/23127280_Bug_Report.md`; **Action:** edited; **Details:** recorded the verified evidence files and completed the screenshot checklist item.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #7, refreshed Artifact #6's remaining student action, and updated the accuracy summary.

- **Verification Evidence:** Directory inspection found exactly 20 bug PNGs: 10 request and 10 result files with 20 unique hashes, plus two execution PNGs. Visual inspection confirmed readable Test IDs, request bodies or failed results, `localhost:3000`, 287 requests, 678 assertions, and 100 assertion failures. No JWT, token, or cookie value appeared in the visible screenshot regions.
- **Verdict:** VALID
- **Reasoning:** The evidence review and local document updates are complete. The student later authorized Issue creation, then explicitly selected manual creation from prepared drafts in Artifact #8.
- **Student Fixes:** Completed in Artifact #8.

### Artifact #8 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-22 14:02 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
à thôi cho em nội dung đi để em tự tạo
````

- **AI Output:**

````text
Đã chuẩn bị xong 10 nội dung GitHub Issue; chưa có Issue nào được AI đăng.

Mỗi file có sẵn title, severity, environment, steps, expected/actual result, affected tests và đúng hai tên ảnh cần đính kèm:

- Register: `BUG-REG-001.md`, `BUG-REG-002.md`, `BUG-REG-003.md`
- Checkout: `BUG-CHK-001.md`, `BUG-CHK-002.md`, `BUG-CHK-003.md`, `BUG-CHK-004.md`
- Coupon: `BUG-CPN-001.md`, `BUG-CPN-002.md`, `BUG-CPN-003.md`

Thư mục: `reports/github-issues/`

Cách tạo mỗi Issue:

1. Mở một file Markdown.
2. Copy dòng đầu, bỏ `# `, rồi dán vào ô Title.
3. Copy từ `## Severity` đến cuối file vào Description.
4. Kéo hai ảnh trong mục `Evidence to attach` vào Description.
5. Kiểm tra ảnh hiển thị rồi bấm `Submit new issue`.

Sau khi tạo đủ 10 Issue, gửi lại 10 link public để anh cập nhật Bug Report, CSV, Plan và kiểm tra tính khớp.

Artifacts 8-8 successfully appended to AI_Audit.md.
````

- **File Modifications:**
  - **File:** `reports/github-issues/BUG-REG-001.md` through `BUG-REG-003.md`; **Action:** created; **Details:** added three copy-ready Register Issue bodies and evidence mappings.
  - **File:** `reports/github-issues/BUG-CHK-001.md` through `BUG-CHK-004.md`; **Action:** created; **Details:** added four copy-ready Checkout Issue bodies and evidence mappings.
  - **File:** `reports/github-issues/BUG-CPN-001.md` through `BUG-CPN-003.md`; **Action:** created; **Details:** added three copy-ready Coupon Issue bodies and evidence mappings.
  - **File:** `Plan.md`; **Action:** edited; **Details:** recorded manual Issue creation as an approved decision and set the public links as the next verification input.
  - **File:** `reports/23127280_Bug_Report.md`; **Action:** edited; **Details:** referenced the Issue drafts and marked draft preparation complete.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #8, resolved Artifact #7, and refreshed the accuracy summary and disclosure.

- **Verification Evidence:** File inspection found exactly 10 `BUG-*.md` drafts. Every draft contains `Severity`, `Expected result`, and `Actual result` sections plus exactly two `evidence/bugs/*.png` paths. `Plan.md` identifies manual creation and link return as the single next action.
- **Verdict:** VALID
- **Reasoning:** The response follows the student's explicit manual-creation decision, supplies complete copy-ready content, and does not claim that any external Issue exists.
- **Student Fixes:** Completed and verified in Artifact #9.

### Artifact #9 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-22 14:20 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
Đã hoàn tất báo issue chuyển đến táks tiếp theo
````

- **AI Output:**

````text
Đã chuyển sang phần D1 — CI/CD.

Hoàn tất:

- Xác minh 10/10 GitHub Issues public #24–#33; mỗi issue có đúng Bug ID/title, Expected/Actual và hai ảnh.
- Cập nhật Bug Report, Plan, AI Audit và CSV (87 failed rows liên kết tới 10 issue): :codex-file-citation{path="test-cases/API_Test_Cases.csv" purpose="output"}
- Mở rộng GitHub Actions để chạy full Newman suite và luôn upload HTML + summary đã làm sạch.
- Kiểm tra local: 122 cases, 35 passed / 87 failed, không còn JWT trong artifact đã sanitize.
- `backend/database.sqlite` vẫn không được đưa vào staging.

Chưa hoàn tất: workflow chưa commit/push nên chưa có GitHub Actions run và artifact thật.

Việc tiếp theo: cho anh commit nhóm file Part C + CI này; sau đó em push và gửi link/screenshot run `Newman full suite` để anh xác minh.

Artifacts 9-9 successfully appended to AI_Audit.md.
````

- **File Modifications:**
  - **File:** `reports/23127280_Bug_Report.md`; **Action:** edited; **Details:** replaced all pending Issue cells with public links #24–#33 and recorded public-API verification.
  - **File:** `reports/github-issues/BUG-CPN-002.md`; **Action:** edited; **Details:** synchronized one harmless wording difference with the published Issue.
  - **File:** `reports/github-issues/BUG-REG-002.md`; **Action:** edited; **Details:** synchronized punctuation with the published Issue.
  - **File:** `test-cases/API_Test_Cases.csv`; **Action:** edited; **Details:** appended matching public Issue URL evidence to all 87 failed rows while preserving 122 rows and 21 columns.
  - **File:** `.github/workflows/api-tests.yml`; **Action:** edited; **Details:** added the full Newman job, report sanitization, and always-run artifact upload.
  - **File:** `api-tests/scripts/analyze-newman.js`; **Action:** edited; **Details:** accepted optional CI input/output report paths while preserving local defaults.
  - **File:** `api-tests/scripts/sanitize-newman-reports.js`; **Action:** edited; **Details:** accepted explicit report targets while preserving local defaults.
  - **File:** `postman/reports/final-newman.html`; **Action:** edited; **Details:** re-sanitized the final report and removed 79 runtime JWT values discovered during the final privacy scan.
  - **File:** `.gitignore`; **Action:** edited; **Details:** ignored generated `postman/reports/ci/` output.
  - **File:** `Plan.md`; **Action:** edited; **Details:** closed public-Issue reporting, recorded verified CI preparation, and set commit/push verification as the single next action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #9, resolved Artifact #6 and #8 follow-ups, and refreshed the summary, conclusion, and disclosure.

- **Verification Evidence:** GitHub's public API returned 10 open Issues (#24–#33), each with the expected Bug ID/title, Expected and Actual content, and exactly two `github.com/user-attachments/assets/` image URLs. Draft comparison found only two harmless wording/punctuation differences, which were synchronized locally. Spreadsheet inspection found 122 rows, 21 columns, 10 unique Issue URLs, and zero unknown Bug IDs. The CI report scripts passed Node syntax checks; local CI-path analysis reproduced 122 cases (35 passed / 87 failed), and sanitization removed all JWT-shaped strings from the verification HTML and summary. No GitHub Actions run is claimed before push.
- **Verdict:** VALID
- **Reasoning:** The work closes the externally verified defect-reporting requirement and safely prepares the next CI step without fabricating pipeline evidence or suppressing genuine product failures.
- **Student Fixes:** Commit/push the prepared workflow and capture the real GitHub Actions run plus uploaded artifact.

### Artifact #10 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-22 14:39 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
oke commit r chỉ em bước tiếp theo ngắn gọn
````

- **AI Output:**

````text
1. Chạy `git push origin hw6-tanh` (khoảng 1–2 phút).
2. Mở GitHub → **Actions** → workflow **HW06 API Tests** → run mới nhất.
3. Mở job **Newman full suite**, kiểm tra artifact `hw06-newman-report`, rồi gửi anh link run hoặc ảnh chụp.

Đã commit phần chính: `90067ce` — `test: complete API execution and CI preparation`. Commit tài liệu audit dùng subject `docs: record execution commit and push step`. `backend/database.sqlite` vẫn nằm ngoài commit.

Job `Newman full suite` dự kiến màu đỏ vì 87 lỗi SUT thật; artifact vẫn phải xuất hiện ở cuối trang run.

Artifacts 10-10 successfully appended to AI_Audit.md.
````

- **File Modifications:**
  - **File:** `Plan.md`; **Action:** edited; **Details:** recorded commit `90067ce`, confirmed database exclusion, and set branch push as the single next action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #10 and refreshed the accuracy summary and mandatory disclosure.

- **Verification Evidence:** Git created commit `90067ce` with subject `test: complete API execution and CI preparation`, reporting 184 files changed. The cached diff check passed after removing generated trailing whitespace. Before commit, `git diff --cached --name-only -- backend/database.sqlite` returned no path; afterward, `git status --short -- backend/database.sqlite` continued to show only an unstaged runtime modification. Raw `postman/reports/final-newman.json` remained ignored and unstaged.
- **Verdict:** VALID
- **Reasoning:** The requested commit exists and is identifiable, required deliverables were included, runtime state was excluded, and the response gives a bounded next action without claiming an unobserved push or Actions run.
- **Student Fixes:** Completed and verified in Artifact #11.

### Artifact #11 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-22 14:45 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
[https://github.com/tnnhuaa/eshop-sut/actions/runs/32560329025/job/97000811781](https://github.com/tnnhuaa/eshop-sut/actions/runs/32560329025/job/97000811781)
````

- **AI Output:**

````text
Bước D1 đã đạt. Tiếp theo là D2: tạo một run all-pass và một run có đúng một controlled failure.

Đã xác minh:

- Run `32560329025` thuộc commit `ddb3900` trên nhánh `hw6-tanh`.
- `Backend smoke test` pass; `Newman full suite` fail đúng theo kết quả thật: 122 cases, 35 passed / 87 failed và 100 assertion failures.
- Artifact `hw06-newman-report` đã upload thành công: 114,354 bytes, chưa hết hạn.
- Hai ảnh đã lưu tại `evidence/cicd/`; Plan và AI Audit đã cập nhật. Các thay đổi này chưa commit.

Bước tiếp theo: nhắn `thực hiện D2` để anh chuẩn bị cặp CI demonstration.

Artifacts 11-11 successfully appended to AI_Audit.md.
````

- **File Modifications:**
  - **File:** `evidence/cicd/full-suite-run-32560329025.png`; **Action:** created; **Details:** copied the student's genuine full Actions job screenshot into repository evidence.
  - **File:** `evidence/cicd/full-suite-summary-artifact-32560329025.png`; **Action:** created; **Details:** copied the student's focused summary, redaction, exit-code, and upload screenshot into repository evidence.
  - **File:** `Plan.md`; **Action:** edited; **Details:** recorded run/job/artifact verification, closed D1, and set the controlled CI pair as the single next action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #11, resolved Artifact #10's follow-up, and refreshed the accuracy summary and disclosure.

- **Verification Evidence:** GitHub's public Actions API returned run `32560329025` as completed/failure for push commit `ddb3900f96d9730b39d8ae94d08e0845c46be1cb` on `hw6-tanh`. Job `97000811685` (`Backend smoke test`) concluded success; job `97000811781` (`Newman full suite`) concluded failure. Artifact `9472588715`, named `hw06-newman-report`, is 114,354 bytes and not expired. Visual inspection of the student screenshots found the 122/35/87 case summary, 678 assertions with 100 failed, 79 HTML and two summary token redactions, exit code 1, and a successful `Upload sanitized Newman evidence` step.
- **Verdict:** VALID
- **Reasoning:** The response records only observed public metadata and genuine student screenshots, distinguishes genuine SUT failures from the still-pending controlled demonstration, and advances the plan without fabricating a passing run.
- **Student Fixes:** Create and capture the separate all-pass and exactly-one-controlled-failure runs.

### Artifact #12 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-22 14:53 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
`thực hiện D2`
````

- **AI Output:**

````text
Mốc D2.1 xong. Việc tiếp theo: chạy `git push origin hw6-tanh` (khoảng 1–2 phút).

- Workflow riêng: `HW06 CI Demonstration`; không thay đổi full suite 122 cases.
- Baseline `controlledFailure: false`: 4 requests, 8 assertions, 0 failures, exit 0.
- Mode kiểm chứng `true`: đúng 1/8 assertion fail, exit 1.
- HTML demo đã sanitize: xóa hai runtime JWT, còn 0 JWT pattern.
- Đã commit baseline với subject `ci: add controlled all-pass demonstration` và vẫn loại `backend/database.sqlite`.

Sau khi push: mở **Actions → HW06 CI Demonstration**, chụp run xanh và artifact `hw06-ci-demo-report`, rồi gửi anh link. Anh sẽ đổi đúng một giá trị sang `true` cho commit D2.2.

Artifacts 12-12 successfully appended to AI_Audit.md.
````

- **File Modifications:**
  - **File:** `.github/workflows/ci-demo.yml`; **Action:** created; **Details:** added a path-filtered Actions workflow that starts the SUT, runs the disclosed demo mode, sanitizes the HTML, preserves Newman's exit code, and always uploads evidence.
  - **File:** `api-tests/ci-demo-mode.json`; **Action:** created; **Details:** set the baseline to `controlledFailure: false` and documented that `true` is reserved for the disclosed failure commit.
  - **File:** `postman/HW06_CI_Demo.postman_collection.json`; **Action:** created; **Details:** added four deterministic requests, collection-level student header injection, seven stable assertions, and one controlled assertion.
  - **File:** `api-tests/package.json`; **Action:** edited; **Details:** added the local `test:ci-demo` script for all-pass verification.
  - **File:** `.gitignore`; **Action:** edited; **Details:** ignored generated `postman/reports/ci-demo/` output.
  - **File:** `Plan.md`; **Action:** edited; **Details:** recorded both local mode results and set the all-pass baseline push as the single next action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #12 and refreshed the accuracy summary and disclosure.

- **Verification Evidence:** JSON parsing passed for the collection, mode file, and package file. Direct Newman execution against `localhost:3000` with `controlledFailure=false` executed four requests and eight assertions with zero failures and exit code 0. Repeating with `controlledFailure=true` executed the same inventory with exactly one failed assertion (`CI-CONTROL-001 | controlled demonstration assertion`) and exit code 1. HTML-extra generation in all-pass mode produced a 104,040-byte report; sanitization redacted two JWTs, and a follow-up scan found zero JWT-shaped strings. The sandbox's `npm` shim was broken, so verification used the same installed Newman binary directly; this is an environment issue, not a test failure.
- **Verdict:** INVALID
- **Reasoning:** Although the all-pass and controlled-failure mechanics were real, the four cases targeted products/login rather than the three selected APIs. The design therefore did not meet the literal CI sample scope in the assignment.
- **Student Fixes:** Replaced by the selected-API sample suite in Artifact #14.

### Artifact #13 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-22 15:15 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
[https://github.com/tnnhuaa/eshop-sut/actions/runs/32560969372/job/97002335125](https://github.com/tnnhuaa/eshop-sut/actions/runs/32560969372/job/97002335125)
````

- **AI Output:**

````text
Mốc D2.2 đã chuẩn bị. Việc tiếp theo: chạy `git push origin hw6-tanh` (khoảng 1–2 phút).

- Run all-pass `32560969372` đã được GitHub API xác minh: workflow `HW06 CI Demonstration` pass và artifact `hw06-ci-demo-report` tồn tại.
- Đã đổi duy nhất `controlledFailure` từ `false` sang `true`.
- Local verification: 4 requests, 8 assertions, đúng 1 failure, exit 1.
- Đã commit với subject `ci: demonstrate exactly one controlled failure`; `backend/database.sqlite` vẫn ngoài commit.

Sau khi push: mở run đỏ của **HW06 CI Demonstration**, chụp phần summary `8 assertions / 1 failed` và artifact upload thành công, rồi gửi link + ảnh. Giữ lại ảnh run xanh `32560969372` nữa.

Artifacts 13-13 successfully appended to AI_Audit.md.
````

- **File Modifications:**
  - **File:** `api-tests/ci-demo-mode.json`; **Action:** edited; **Details:** changed only `controlledFailure` from `false` to `true` for the disclosed one-failure commit.
  - **File:** `Plan.md`; **Action:** edited; **Details:** verified the all-pass public run/artifact and set the controlled-failure push as the single next action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #13 and refreshed the accuracy summary and disclosure.

- **Verification Evidence:** GitHub's public API returned run `32560969372` and job `97002335125` as completed/success for commit `ada303f6ac8e8fe417ad3e63dfab2bc22a9752cd`; artifact `9472760275`, named `hw06-ci-demo-report`, is 11,760 bytes, unexpired, and tied to the same commit. The first local attempt was rejected as environment-invalid because the backend was not running. After `GET /api/products` returned HTTP 200, Newman executed four requests and eight assertions with zero request failures, exactly one failed controlled assertion, and exit code 1.
- **Verdict:** INVALID
- **Reasoning:** The public metadata and local execution counts were genuine, but later review against the assignment showed that the four test cases covered products/login rather than Register, Checkout, and Create Coupon. Treating that run as the final all-pass API sample would create a material scope mismatch.
- **Student Fixes:** Corrected in Artifact #14 by replacing the generic demonstration with selected-API sample cases and restoring an all-pass baseline before push.

### Artifact #14 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-22 15:32 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
chỉ làm theo đúng đề
````

- **AI Output:**

````text
Baseline D2 đã sửa theo đúng đề. Bước tiếp theo: chạy `git push origin hw6-tanh` (khoảng 1–2 phút).

- Workflow `HW06 Selected API Sample Runs` kiểm thử đúng Register, Checkout và Create Coupon; ba request login/cart được ghi rõ là setup.
- Baseline `false`: 6 requests, 16 assertions, 0 failures, exit 0.
- Kiểm chứng `true`: đúng 1 assertion fail trong `CPN-CI-001`, exit 1.
- Full suite 122 cases không thay đổi; HTML baseline đã redacted 5 JWT và còn 0 JWT pattern.
- Đã commit với subject `ci: align sample runs with selected APIs`; `backend/database.sqlite` vẫn ngoài commit.

Sau khi push: gửi link run xanh mới và ảnh phần summary + artifact `hw06-selected-api-sample-report`. Chỉ sau khi run xanh được xác minh mới tạo commit đỏ đổi `controlledFailure` sang `true`.

Artifacts 14-14 successfully appended to AI_Audit.md.
````

- **File Modifications:**
  - **File:** `postman/HW06_CI_Demo.postman_collection.json`; **Action:** replaced content; **Details:** added three selected-API target cases plus three separately labelled setup requests, deterministic run data, the student header, and one controlled assertion inside the coupon case.
  - **File:** `api-tests/ci-demo-mode.json`; **Action:** edited; **Details:** restored the corrected selected-API baseline to `controlledFailure: false`.
  - **File:** `.github/workflows/ci-demo.yml`; **Action:** edited; **Details:** renamed the workflow, job, execution step, and artifact to identify the selected-API sample explicitly.
  - **File:** `Plan.md`; **Action:** edited; **Details:** rejected the earlier generic demo as final evidence, recorded the literal assignment scope, and set the corrected green push as the single next action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** changed Artifact #13 to INVALID, appended Artifact #14, and refreshed the accuracy summary and disclosure.

- **Verification Evidence:** JSON parsing found six unique requests: three selected-API targets (`REG-CI-001`, `CHK-CI-001`, `CPN-CI-001`) mapped to the required endpoints and three setup requests. Against a ready localhost backend, green mode executed 6 requests and 16 assertions with zero failures and exit code 0; controlled mode executed the same inventory with exactly one failed assertion inside `CPN-CI-001` and exit code 1. HTML-extra generation passed in green mode; sanitization redacted five JWT occurrences, and a follow-up regex scan found zero JWT-shaped strings.
- **Verdict:** VALID
- **Reasoning:** The correction maps the CI sample directly to the three APIs fixed in the assignment scope, isolates setup from test cases, keeps the genuine 122-case suite unchanged, and creates traceable green/red behavior without masking product defects.
- **Student Fixes:** Push and capture the corrected green run and artifact, then create the one-failure commit by changing only `controlledFailure` to `true`.

### Artifact #15 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-22 16:16 GMT+7
- **Agent Used:** Codex (primary agent; no sub-agents)
- **Prompt:**

````text
[Attached Image #1: GitHub Actions summary for the successful `HW06 Selected API Sample Runs` run, including commit, branch, successful job, and artifact.]

[Attached Image #2: Expanded `Run selected API sample suite` log showing `controlledFailure=false`, the three selected API cases, and the Newman summary.]
````

- **AI Output:**

````text
Mốc all-pass hợp lệ và đủ bằng chứng. Anh sẽ lưu hai ảnh dưới `evidence/cicd/`, ghi nhận run `32562812190`, artifact `9473264343`, commit `929ce04`, rồi đóng checklist all-pass. Bước kế tiếp là tạo commit chỉ đổi `controlledFailure` từ `false` sang `true`; chưa được coi là hoàn tất cho đến khi có run đỏ đúng một failure và ảnh thật từ em.
````

- **File Modifications:**
  - **File:** `evidence/cicd/selected-api-all-pass-run-32562812190.png`; **Action:** created; **Details:** preserved the student's genuine run-summary and artifact screenshot.
  - **File:** `evidence/cicd/selected-api-all-pass-log-32562812190.png`; **Action:** created; **Details:** preserved the student's genuine expanded selected-API Newman log screenshot.
  - **File:** `Plan.md`; **Action:** edited; **Details:** recorded the public run, artifact, log counts, evidence paths, closed the green checklist item, and set the controlled one-failure commit as the single next action.
  - **File:** `AI_Audit.md`; **Action:** edited; **Details:** appended Artifact #15 and refreshed the accuracy summary and mandatory disclosure.

- **Verification Evidence:** GitHub's public API returned run `32562812190` as completed/success for commit `929ce04a514960af15167f34617bb3935f4cd131` on `hw6-tanh`. Job `97006923432` (`Selected API Newman sample`) concluded success. Artifact `9473264343`, named `hw06-selected-api-sample-report`, is 12,666 bytes and unexpired. Visual inspection of the student screenshots found the matching workflow, commit, branch, successful job, artifact, `controlledFailure=false`, all three target cases, localhost endpoints, 6 executed requests, 16 executed assertions, and zero failures.
- **Verdict:** VALID
- **Reasoning:** The public metadata, student-produced screenshots, and local baseline verification agree. The evidence directly satisfies the assignment's all-passing selected-API sample requirement without substituting the genuine 122-case defect run or fabricating execution results.
- **Student Fixes:** None for the green sample. The separate controlled one-failure run remains pending.

<!-- ARTIFACT_DETAILS_END -->

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 15 | 100% |
| **VALID (correct, accepted as-is)** | 12 | 80.00% |
| **INVALID (wrong; rejected)** | 2 | 13.33% |
| **INCOMPLETE (acceptable after edits)** | 1 | 6.67% |

## **5. Conclusion - When should AI be used (or not)?**

AI is useful for proposing traceable test structures, generating broad technique-based inventories, implementing deterministic Postman setup, analyzing Newman results, linking execution records to published defects, and finding privacy leaks in generated reports. Execution also showed why AI output cannot be trusted without review: two authentication oracles were initially too strict, asynchronous setup had to be isolated, and raw reports exposed runtime JWTs until sanitized. Human review supplied 17 distinct extensions, corrected unsupported assumptions, captured genuine evidence, and manually published the 10 Issues. AI should support automation, consistency checks, and preliminary defect clustering, while pipeline runs, screenshots, public publication, and defect claims must remain tied to observed evidence and student verification.

## **6. Mandatory Disclosure (paste verbatim)**

I used Codex to review the HW06 requirements, plan the workflow, create sanitized Postman/Newman configuration, draft and extend the CI workflows, generate 105 AI-assisted cases, compare 18 student-proposed extensions, implement and execute the 122-case local Newman suite, analyze results, sanitize runtime tokens, reproduce a concurrency defect, maintain the CSV and AI audit, draft a 10-group bug report, verify student-produced screenshots and public Issue/Actions metadata, prepare 10 GitHub Issue drafts, commit the verified Part C/CI artifacts, and create a disclosed selected-API CI sample suite. I reviewed all AI cases, accepted 17 original cases, rejected one unsupported variant, approved corrections for the non-valid AI cases, captured the genuine screenshots, manually published Issues #24–#33, pushed the branch, provided the genuine full-suite CI evidence, rejected the earlier generic products/login demonstration as final sample evidence, and captured the corrected selected-API all-pass run. I remain responsible for pushing and capturing the selected-API controlled one-failure run, drawing the test-generator diagram, and assembling submission evidence; no unobserved pipeline run or evidence was fabricated or claimed as complete.

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

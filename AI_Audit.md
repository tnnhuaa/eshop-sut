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
| **Assignment ID (e.g., HW#00, HW#02):** | HW04-AI |
| **Assignment date:** | 2026-08-10 |
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

Only interactions that materially affected the automation, human evidence gates, defect reporting, or final submission are retained. Meta-prompts about audit formatting and routine status questions are intentionally omitted.

| (1) Prompt + Tool | (2) AI Output | (3) Verdict | (4) Reasoning (ISTQB / technical evidence) | (5) Student Fix |
| :---- | :---- | :---- | :---- | :---- |
| **Artifact #1 - Finalize data-driven automation and browser evidence**<br>Tool: Codex<br>Time: 2026-08-10 00:49:10 GMT+7<br>Full prompt: see Artifact #1 verbatim record below. | Refactored remaining inline data, executed 36 cases on three browsers, verified nine reports, and prepared separate human-review and video workflows.<br>Full output: see Artifact #1 below. | VALID | TypeScript, scenario validation, 108-test discovery, executed HTML reports, metadata verification, and prohibited-pattern scans support the technical output. ISTQB test implementation and execution require traceability and comparison of actual versus expected results. | The student reviewed and accepted eight corrections, signed the human-review record, confirmed nine defect groups, and recorded both videos. |
| **Artifact #2 - Record videos and confirmed candidate defects**<br>Tool: Codex<br>Time: 2026-08-10 15:57:08 GMT+7<br>Full prompt: see Artifact #2 verbatim record below. | Added the two student-provided video URLs and recorded the nine confirmed groups, but could not publish the new GitHub Issue because the available browser session was signed out.<br>Full output: see Artifact #2 below. | INCOMPLETE | Repository diffs verify the documentation changes, but Task 1 also requires a screenshot-bearing GitHub Issue for a genuine new defect. Authentication prevented that external side effect at this stage. | The student manually captured the meaningful HTML-report error screenshot and later created Issue #23. |
| **Artifact #3 - Verify and link authorization defect Issue #23**<br>Tool: Codex<br>Time: 2026-08-10 16:09:41 GMT+7<br>Full prompt: see Artifact #3 verbatim record below. | Verified the public issue title, expected/actual response, label, browser scope, and screenshot, then linked #23 in active HW04 documentation.<br>Full output: see Artifact #3 below. | VALID | Public Issue #23 and the committed README/defect-record changes directly verify the result. The screenshot shows the Playwright report error rather than the blank page produced by an API-only test. | The student created the issue, selected the `bug` label, and uploaded the report screenshot; Codex only verified and documented it. |
| **Artifact #4 - Complete curated HW04 submission documentation**<br>Tool: Codex<br>Time: 2026-08-10 16:18:08 GMT+7<br>Full prompt: see Artifact #4 verbatim record below. | Replaced stale HW02 active reports with HW04 Markdown/text deliverables, created traceability and packaging documentation, curated the audit, and intentionally generated no PDFs.<br>Full output: see Artifact #4 below. | VALID | Cross-document scans, word count, CSV row validation, file-state checks, and Git diff checks verify the requested documentation scope. The reports use the executed 36-case/9-run evidence rather than fabricated results. | The student will perform the requested manual PDF exports and final visual review; no Markdown correction has been requested yet. |
<!-- AUDIT_TABLE_ROWS_END -->

### Verbatim Artifact Records

### Artifact #1 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-10 00:49:10 GMT+7
- **Agent Used:** Codex (primary agent); feature sub-agents contributed earlier scoped automation work, which the primary agent reviewed and integrated
- **Prompt:**

````text
oke a cứ thực hiện những gì cần làm trước đi, phần kịch bản quay video tách ra để em quay 2 clip riêng biệt task 2 và demo agent skill
````

- **AI Output:**

````text
Phần chuẩn bị của agent đã hoàn tất. Chưa có GitHub Issue, chữ ký hoặc quyết định defect nào được tạo thay em.

Đã hoàn tất

- Loại bỏ dữ liệu hardcode còn lại: FR06 lấy expected name từ JSON; FR10 dispatch theo workflow/actionLabel trong JSON; FR15 dùng environment và fixture JSON.
- Chạy lại đủ 3 feature × 3 browser và tạo 9 HTML report mới.
- Xác minh cả 9 report đều render `Run by: 23127280` cùng ISO timestamp.
- Tạo 9 evidence manifest với `humanReview: PENDING` và `defectStatus: UNCONFIRMED`.
- Chuẩn bị human review, bug confirmation, submission checklist và hai kịch bản video tách riêng.

Kết quả kiểm chứng

- TypeScript pass; cả ba validator pass với 12 scenario/feature.
- Playwright phát hiện 108 test-browser combinations.
- Kết quả: FR06 3 pass/9 fail, FR10 7 pass/5 fail, FR15 7 pass/5 fail trên mỗi browser; tổng cộng 51 pass/57 fail.
- `report:verify` pass cho 9 report mới. Matrix trả exit code 1 vì assertion failure thật, không phải thiếu browser hay report.
- Scan không còn fixed wait, tên sản phẩm/credential/URL FR15 hoặc FR10 TestCaseID arrays bị hardcode trong ba spec.

Tài liệu em dùng

- `manual/01-human-review-runbook-vi.md`
- `manual/02-task2-video-script-vi.md`
- `manual/03-agent-skill-video-script-vi.md`
- `manual/04-bug-confirmation-runbook-vi.md`
- `manual/05-submission-checklist-vi.md`

Hai video đã được tách hoàn toàn: Task 2 demo FR06 multi-browser; Agent Skill dùng task Codex mới và prompt tại `skill-demo/input/video-demo-prompt.md`. Các thay đổi hiện chưa được commit.

Việc tiếp theo của em: mở `manual/01-human-review-runbook-vi.md` và thực hiện human review trước.
````

- **File Modifications:**
  - **File:** `tests/fr06/product-detail.spec.ts`; **Action:** edited; **Details:** replaced remaining hardcoded product headings with JSON-backed expected values.
  - **File:** `test-data/fr06/product-detail-scenarios.json`; **Action:** edited; **Details:** added expected values required by the negative and feedback scenarios.
  - **File:** `tests/fr10/fr10-state-machine.spec.ts`; **Action:** edited; **Details:** replaced inline TestCaseID groups and action maps with one JSON-driven workflow dispatcher.
  - **File:** `test-data/fr10/state-machine-scenarios.json`; **Action:** edited; **Details:** added workflow, action-label, final-label, and final-action-count data.
  - **File:** `tests/fr15/product-crud-admin.spec.ts`; **Action:** edited; **Details:** moved URLs, credentials, and fixture payload values to shared external configuration.
  - **File:** `test-data/fr15/fixture-config.json`; **Action:** created; **Details:** added reusable FR15 fixture data.
  - **File:** `tests/support/data-loader.ts`; **Action:** edited; **Details:** added validated JSON-object loading.
  - **File:** `scripts/verify-reports.mjs`; **Action:** edited; **Details:** selected and rendered the final report for each feature-browser pair while preserving history.
  - **File:** `manual/01-human-review-runbook-vi.md` through `manual/05-submission-checklist-vi.md`; **Action:** created; **Details:** prepared student-owned review, video, defect, and submission steps.
  - **File:** `artifacts/html-reports/FR06/`, `FR10/`, and `FR15/`; **Action:** created report bundles; **Details:** added nine executed Playwright HTML reports across Chromium, Firefox, and Edge.

- **Verification Evidence:** `npm run typecheck` passed. Scenario validators reported FR06 12 scenarios/8 assertion categories, FR10 12/6, and FR15 12/4. `npm run test:list` discovered 108 browser combinations. `npm run test:matrix` completed nine feature-browser invocations with 51 passes and 57 genuine assertion failures. `npm run report:verify` confirmed Student ID and ISO timestamp metadata in all nine reports. Targeted scans found no fixed waits or prohibited inline scenario mappings.
- **Verdict:** VALID
- **Reasoning:** The output completed the requested agent-owned preparation and kept student-only gates explicitly pending. The executed reports and repository state support the claims. This follows ISTQB's separation between test implementation/execution evidence and human evaluation of observed failures.
- **Student Fixes:** The student completed and signed `manual/01-human-review-record-en.md`, accepted eight documented corrections, confirmed the nine candidate groups, recorded and uploaded both videos, and supplied their URLs. These actions replaced the initial `PENDING` human gates with genuine student evidence.

### Artifact #2 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-10 15:57:08 GMT+7
- **Agent Used:** Codex (primary agent)
- **Prompt:**

````text
Link video task 2: https://youtu.be/XXYWit38OCQ
Link agenskill demo: https://youtu.be/J4cTY_ij4hk
Em đã xác nhận canđiate defect luôn
````

- **AI Output:**

````text
Đăng nhập GitHub trong tab anh vừa mở, rồi nhắn **“đã đăng nhập”** để anh tạo issue `FR10-DT-017` kèm screenshot.

Đã hoàn thành:

1. Ghi hai video vào `README.md`.
2. Lưu quyết định xác nhận 9 nhóm defect tại `reports/23127280_HW04_Confirmed_Defects.md`.
3. Ánh xạ 8 nhóm với 14 GitHub Issues cũ, tránh tạo defect trùng.
4. Commit: `d067989 docs(submission): record videos and confirmed defects`.
5. Các runbook tiếng Việt và artifact quay video vẫn local, không bị commit.

::git-commit{cwd="."}
````

- **File Modifications:**
  - **File:** `README.md`; **Action:** replaced content; **Details:** converted the active README from HW02 to HW04, added the 36-case/9-run summary and both student-provided video URLs.
  - **File:** `reports/23127280_HW04_Confirmed_Defects.md`; **Action:** created; **Details:** recorded the nine student-confirmed automation groups and mapped reproduced failures to existing issues.

- **Verification Evidence:** Commit `d067989` contains exactly the README and confirmed-defect record changes. The two public YouTube URLs were supplied by the student. The repository's public issue list showed the existing FR06, FR10, and FR15 issue records. The available browser session was signed out, so no new issue was claimed at this stage.
- **Verdict:** INCOMPLETE
- **Reasoning:** The documentation and duplicate-avoidance mapping were correct, but the workstream still lacked the required GitHub Issue and screenshot for the newly identified FR10 authorization failure. A report is not complete until the observed defect is linked to attributable evidence.
- **Student Fixes:** The student opened the HTML report instead of using the blank screenshot from the API-only page, captured `Expected: 403` and `Received: 200`, and manually published Issue #23 with the `bug` label.

### Artifact #3 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-10 16:09:41 GMT+7
- **Agent Used:** Codex (primary agent)
- **Prompt:**

````text
https://github.com/tnnhuaa/eshop-sut/issues/23

Đã xong
````

- **AI Output:**

````text
Không cần sửa thêm Issue #23; nội dung và screenshot đều hợp lệ.

Đã cập nhật:

- `README.md`
- `reports/23127280_HW04_Confirmed_Defects.md`
- Tổng: **9 nhóm defect, ánh xạ tới 15 GitHub Issues**
- Commit: `68f4cad docs(defects): link confirmed authorization issue`

Next: giữ Issue #23 ở trạng thái `Open`.

::git-commit{cwd="."}
````

- **File Modifications:**
  - **File:** `README.md`; **Action:** edited; **Details:** linked Issue #23 and updated the GitHub Issue record count to 15.
  - **File:** `reports/23127280_HW04_Confirmed_Defects.md`; **Action:** edited; **Details:** replaced the pending authorization issue with public Issue #23 and described its report screenshot.

- **Verification Evidence:** The public page `https://github.com/tnnhuaa/eshop-sut/issues/23` showed the expected title, test case `FR10-DT-017`, Chromium/Firefox/Edge reproduction, expected HTTP 403, actual HTTP 200, Major severity, `bug` label, and an attached image. Commit `68f4cad` contains the two documentation updates.
- **Verdict:** VALID
- **Reasoning:** The public issue and repository diff directly support the AI's verification and mapping. The evidence correctly uses the HTML report error because an API-only Playwright request leaves the page screenshot blank.
- **Student Fixes:** The student performed the external, attributable actions: creating Issue #23, applying the label, and attaching the screenshot. Codex did not create or fabricate those actions.

### Artifact #4 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-10 16:18:08 GMT+7
- **Agent Used:** Codex (primary agent)
- **Prompt:**

````text
Cập nhật các docs còn thiếu đi anh, cập nhật AI_audit chỉ lấy những prompt thật sự đáng giá để ghi vào, nhớ bổ sung student fix và resonable, không xuất PDF cho file nào hết em sẽ tự xuất
````

- **AI Output:**

````text
Không cần xuất PDF lúc này; toàn bộ tài liệu HW04 dạng Markdown/text đã hoàn tất.

1. Đã tạo Main Report HW04, thay Bug Report và AI Critique HW02 bằng bản HW04.
2. Đã làm mới traceability 36 test cases, report index, submission manifest và git commit log.
3. AI Audit chỉ giữ 4 workstream đáng giá; mỗi artifact có prompt/output thật, verification evidence, Reasoning và Student Fixes.
4. Kiểm tra hoàn tất: AI Critique nằm trong 200–300 từ, traceability có 36 dòng, không còn tài liệu active nào mang assignment ID `HW02-AI`, và không có PDF mới.
5. Các runbook tiếng Việt, report quay video ngày 10/08 và skill-demo helper vẫn local, không được commit.

Next: em đọc Main Report và AI Audit, sau đó tự xuất ba PDF theo submission manifest.

::git-commit{cwd="."}
````

- **File Modifications:**
  - **File:** `reports/23127280_HW04_Main_Report.md`; **Action:** created; **Details:** documented scope, AI-first workflow, data-driven design, human corrections, report matrix, results, defect classification, traceability, videos, Agent Skill, and responsibility.
  - **File:** `reports/23127280_Bug_Report.md`; **Action:** replaced content; **Details:** replaced stale HW02 content with the nine-group HW04 automation defect report and 15 Issue links.
  - **File:** `reports/23127280_AI_Critique.md`; **Action:** replaced content; **Details:** added the required HW04 200–300 word critique and student responsibility statement.
  - **File:** `supporting/requirement-traceability-matrix.csv`; **Action:** replaced content; **Details:** added one row for each of 36 test cases with spec, JSON data, browsers, result, defect group, Issue, and report paths.
  - **File:** `reports/README.md`; **Action:** replaced content; **Details:** created the active HW04 report index.
  - **File:** `reports/23127280_HW04_Submission_Manifest.md`; **Action:** created; **Details:** listed required content, manual PDF exports, and exclusion rules.
  - **File:** `AI_Audit.md` and `reports/23127280_AI_Audit_Report.md`; **Action:** replaced content; **Details:** retained four valuable evidence-backed workstreams and added explicit Reasoning and Student Fixes.
  - **File:** `reports/git_commit_log.txt`; **Action:** replaced content; **Details:** refreshed the active HW04 branch history.

- **Verification Evidence:** Markdown headings and assignment IDs were scanned; the critique word count was checked against the 200–300 requirement; the traceability CSV was validated for 36 unique rows and three browsers per row; test/report metrics were cross-checked as 36 unique cases, 108 browser executions, 51 passes, 57 failures, and nine reports; Git diff checks found no patch errors; no PDF was created.
- **Verdict:** VALID
- **Reasoning:** The requested active deliverables were created from committed scripts, external test data, executed report paths, signed review, and public Issue evidence. The work intentionally excludes PDF generation and avoids presenting HW02 reference material as HW04 execution evidence.
- **Student Fixes:** The student explicitly chose to export PDFs manually and must visually review the exported Main Report, AI Critique, and AI Audit. No correction to the generated Markdown has been requested at this point.

<!-- ARTIFACT_DETAILS_END -->

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 4 | 100% |
| **VALID (correct, accepted as-is)** | 3 | 75% |
| **INVALID (wrong; rejected)** | 0 | 0% |
| **INCOMPLETE (acceptable after edits)** | 1 | 25% |

## **5. Conclusion - When should AI be used (or not)?**

* AI was effective at converting reviewed test cases into reusable data-driven Playwright structure, running a repeatable browser matrix, and organizing traceable reports.
* AI initially optimized for convenient code and missed strict external-data boundaries, DOM ambiguity, asynchronous persistence, and shared-database isolation. These limitations required student-reviewed fixes.
* AI was useful for grouping failures and drafting defect evidence, but it could not decide the final oracle or perform attributable student actions. The student confirmed the groups, captured the meaningful report screenshot, and created Issue #23.
* AI should be used to generate, refactor, check, and summarize artifacts when its output can be verified through source files, executed tests, reports, and public records.
* AI should not replace human review, signatures, identity evidence, narration, video publication, defect confirmation, PDF visual inspection, or Moodle submission.

## **6. Mandatory Disclosure (paste verbatim)**

I used Codex to generate and refine data-driven Playwright automation for FR06, FR10, and FR15; configure Chromium, Firefox, and Edge execution; verify HTML report metadata; create a reusable EShop Playwright Agent Skill; classify automation failures; and prepare the HW04 Markdown and text documentation. I reviewed and accepted the documented script corrections, confirmed the nine product-defect groups, recorded both narrated videos with authorship evidence, captured the meaningful Playwright report screenshot, and manually created GitHub Issue #23. The executed HTML reports, traces, screenshots, identity evidence, narration, YouTube publication, student signature, GitHub actions, PDF export, and Moodle submission were not fabricated by AI.

## **Signature**

| Student name (printed): | NGUYEN HIEN TUAN ANH |
| :---- | :---- |
| **Student ID:** | 23127280 |
| **Class / Cohort:** | 23KTPM2 |
| **Course:** | CSC13003 - Software Testing |
| **Instructor:** | Truong Phuoc Loc; Ho Tuan Thanh; Lam Quang Vu |
| **Date:** | 2026-08-10 |
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

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
| **Assignment date:** | 2026-08-06 |
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
| **Artifact #1 - Adapt HW04 AI audit skills**<br>Tool: Codex<br>Time: 2026-08-06 00:18:38 GMT+7<br>Full prompt: see Artifact #1 verbatim record below. | Created and validated two repository-local audit skills and initialized the HW04 audit.<br>Full output: see Artifact #1 verbatim record below. | VALID | Repository state and the official skill validator confirmed both requested skills and the initialized audit. | None required. |
| **Artifact #2 - Clean and archive the HW04 repository baseline**<br>Tool: Codex<br>Time: 2026-08-06 12:19:40 GMT+7<br>Full prompt: see Artifact #2 verbatim record below. | Removed approved mobile/runtime/dependency content and archived reusable HW02 evidence under `reference/hw02/`.<br>Full output: see Artifact #2 verbatim record below. | VALID | Resolved-path safety checks, final path checks, archive listing, and Git status confirmed the requested cleanup. | None required. |
| **Artifact #3 - Reuse the official FIT audit template**<br>Tool: Codex<br>Time: 2026-08-06 12:35:29 GMT+7<br>Full prompt: see Artifact #3 verbatim record below. | Replaced the audit presentation layer with the prior FIT/HCMUS template while preserving the stricter HW04 evidence and privacy policies.<br>Full output: see Artifact #3 verbatim record below. | VALID | The canonical asset, migrated audit, insertion markers, unchanged identity/signature fields, and two successful skill validations confirm the requested template-only adaptation. | None required. |
| **Artifact #4 - Finalize Task 1 automation evidence and manual runbooks**<br>Tool: Codex<br>Time: 2026-08-10 00:49:10 GMT+7<br>Full prompt: see Artifact #4 verbatim record below. | Removed remaining inline test data, reran and verified the nine-browser-feature matrix, generated evidence manifests, and prepared separate Task 2 and Agent Skill video runbooks plus human-review and defect-decision forms.<br>Full output: see Artifact #4 verbatim record below. | VALID | TypeScript, three scenario validators, 108-test discovery, real Playwright execution, rendered report verification, prohibited-pattern scanning, and diff checks support the completed agent-owned scope. | Student must still review/sign, confirm or reject defect candidates, record both videos, and provide the YouTube URLs. |
<!-- AUDIT_TABLE_ROWS_END -->

### Verbatim Artifact Records

### Artifact #1 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-06 00:18:38 GMT+7
- **Agent Used:** Codex (primary agent)
- **Prompt:**

````text
external-skills/ai-export-audit/
external-skills/ai-audit-initializer/

Lấy skill này qua để viết audit đi a, cập nhật skill hiện có theo skill trên em đã dùng trong hw3
````

- **AI Output:**

````text
Đã chuyển và nâng cấp hai skill audit từ HW03 sang HW04.

- `.codex/skills/ai-audit-initializer/` tạo mẫu audit cá nhân cho HW04-AI, Student ID 23127280.
- `.codex/skills/ai-export-audit/` giữ workflow HW03 và bổ sung verification evidence cùng ràng buộc HTML report, video, screenshot và defect thật.
- `AI_Audit.md` đã được khởi tạo và tương tác này được ghi thành Artifact 1.
- Cả hai skill đều vượt qua `quick_validate.py`: `Skill is valid!`.
- Không sửa bản skill nguồn HW03 hoặc skill global; `.codegraph/` đang untracked được giữ nguyên.

Next: gửi yêu cầu triển khai Playwright; các tương tác hoàn tất tiếp theo sẽ được nối vào `AI_Audit.md` bằng `$ai-export-audit`.
````

- **File Modifications:**
  - **File:** `.codex/skills/ai-audit-initializer/SKILL.md`; **Action:** created; **Details:** adapted the HW03 initializer for individual HW04-AI use with a complete six-section audit template and evidence guardrails.
  - **File:** `.codex/skills/ai-audit-initializer/agents/openai.yaml`; **Action:** created; **Details:** added Codex UI metadata and disabled implicit invocation.
  - **File:** `.codex/skills/ai-export-audit/SKILL.md`; **Action:** created; **Details:** adapted the HW03 export workflow for HW04 automation evidence, individual authorship, and browser-report constraints.
  - **File:** `.codex/skills/ai-export-audit/agents/openai.yaml`; **Action:** created; **Details:** added Codex UI metadata and enabled implicit invocation.
  - **File:** `AI_Audit.md`; **Action:** created and appended; **Details:** initialized the individual HW04 audit and recorded Artifact 1.

- **Verification Evidence:** Both skill directories were checked with the official `skill-creator/scripts/quick_validate.py` under UTF-8 mode; each returned `Skill is valid!`. `git status --short` showed the new `.codex/` and `AI_Audit.md` paths.
- **Verdict:** VALID
- **Reasoning:** Repository state confirms both requested HW04-local skills and the initialized audit exist. Official skill validation succeeded for both skills, and the HW03 source/global skill directories were not modified.
- **Student Fixes:** None required.

### Artifact #2 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-06 12:19:40 GMT+7
- **Agent Used:** Codex (primary agent)
- **Prompt:**

````text
# Response annotations:
Each item contains text selected from an earlier Codex response and may include a user comment. Treat items as Annotation 1, Annotation 2, and so on in array order. Use every selection as context and address every comment. When addressing multiple comments, label each answer with its annotation number (for example, `Annotation 1`) so the user can match it to the numbered annotation.
<response-annotations>
[{"text":"4. Thư mục nên lược bỏ khỏi cây HW04Thư mục/mụcQuyết địnhLý dofrontend-mobile/BỏPool D không thuộc HW04features/FR05_Product_Search_Mobile/BỏFeature mobile không được automation trong bài nàyDữ liệu mobile-*, seed-fr05-*BỏKhông phục vụ ba feature webTất cả node_modules/Bỏ và cài lạiKhông commit hoặc đóng gói dependencyDemoSkill/Bỏ khỏi active treeDemo Domain/BVA của HW02, không phải automation skill.agent/examples/FR05-example/BỏVí dụ mobile không liên quanreports/*.pdf và screenshot tổng hợp HW02Chuyển khỏi active deliverablesChỉ giữ làm reference; không trộn với report HW04features/*/evidence/ cũChuyển sang reference hoặc bỏKhông được dùng như execution evidence HW04backend/database.sqlite đang chạyKhông dùng làm bản chuẩnTrạng thái đã bị thay đổi trong quá trình testapi/, demo-agent-skill/Bỏ nếu vẫn rỗngKhông có artifact để tái sử dụnglogs/ cũ và prompt_log.md cũKhông đưa vào deliverable HW04HW04 cần log và timestamp mớiai/raw-outputs/ cũChỉ giữ referenceKhông được trình bày như output AI của HW04","annotation":"Thực hiện mục này trước"}]
</response-annotations>

## My request for Codex:
````

- **AI Output:**

````text
Annotation 1 — cleanup đã hoàn tất.

- Đã xóa `frontend-mobile/`, `features/FR05_Product_Search_Mobile/`, hai mobile test-data file, `DemoSkill/`, `.agent/examples/FR05-example/`, ba `node_modules/`, runtime `backend/database.sqlite`, `api/` và `demo-agent-skill/` rỗng.
- Đã chuyển PDF, ảnh tổng hợp, evidence FR06/FR10/FR15, logs, prompt log và AI raw output HW02 sang `reference/hw02/`.
- Đã giữ `backend/database-baseline.sqlite`, SUT web/admin/backend, ba feature web, `.codex/skills/` và `AI_Audit.md`.
- Kiểm tra cuối xác nhận toàn bộ target cần xóa không còn và reference archive có đủ file.
- Không chạy test vì đây là cleanup cấu trúc; file tracked đã xóa vẫn phục hồi được từ Git, còn dependency có thể cài lại từ lockfile.
- Workstream này đã được ghi thành Artifact 2 trong `AI_Audit.md`.

Next: dựng cấu hình Playwright dùng chung trước khi giao FR06, FR10 và FR15 cho sub-agent.
````

- **File Modifications:**
  - **File:** `reference/hw02/`; **Action:** created and populated; **Details:** archived the HW02 PDFs, aggregate issue screenshots, FR06/FR10/FR15 evidence, execution logs, prompt log, and FR06 raw AI output.
  - **File:** `frontend-mobile/`, `features/FR05_Product_Search_Mobile/`, `DemoSkill/`, and `.agent/examples/FR05-example/`; **Action:** deleted; **Details:** removed mobile-only and HW02 demo artifacts excluded from HW04.
  - **File:** `test-data/seed-fr05-mobile-products.js` and `test-data/mobile-fr05-search-keywords.csv`; **Action:** deleted; **Details:** removed Pool D test data.
  - **File:** `backend/node_modules/`, `frontend-web/node_modules/`, and `frontend-admin/node_modules/`; **Action:** deleted; **Details:** removed reinstallable dependencies while preserving package lockfiles.
  - **File:** `backend/database.sqlite`; **Action:** deleted; **Details:** removed the mutated runtime database and retained `backend/database-baseline.sqlite`.
  - **File:** `api/` and `demo-agent-skill/`; **Action:** deleted; **Details:** removed empty directory structures after verifying they contained no files.
  - **File:** `AI_Audit.md`; **Action:** appended; **Details:** recorded Artifact 2 and refreshed the accuracy summary, conclusion, and disclosure.

- **Verification Evidence:** All delete targets were resolved beneath the repository root before removal. The final path check returned `False` for every approved delete target and `True` for `backend/database-baseline.sqlite`, `.codex/skills/ai-export-audit/SKILL.md`, and `AI_Audit.md`. `rg --files reference/hw02` listed the archived reports, logs, raw output, and 24 web-feature evidence images. `git status --short` showed the expected tracked deletions and the new reference archive.
- **Verdict:** VALID
- **Reasoning:** The requested cleanup was executed only against approved workspace targets, references were archived before source removal, effectively empty directories were inspected before deletion, and final filesystem checks confirmed both removal and preservation requirements.
- **Student Fixes:** None required.

### Artifact #3 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-06 12:35:29 GMT+7
- **Agent Used:** Codex (primary agent)
- **Prompt:**

````text
em muốn sử dụng template của [23127280_AI_Audit_Report.md](reports/23127280_AI_Audit_Report.md) cho Skill [$ai-export-audit](.codex/skills/ai-export-audit/SKILL.md) vẫn giữ các ràng buộc chỉ thay đổi template, phần info và signature đem y chan qua chỉ sửa các nội dung cho phù hợp hw hiện tại, còn lại giữ nguyên, lưu để làm cho các hw trong tương lai
````

- **AI Output:**

````text
Đã đổi template và giữ nguyên toàn bộ policy kiểm chứng của skill.

- Template chuẩn được lưu tại `.codex/skills/ai-export-audit/assets/AI_Audit_Report_Template.md`.
- `AI_Audit.md` hiện dùng đúng header FIT/HCMUS, Student Information, Instructions, bảng audit 5 cột, Signature và References của bản HW02.
- Thông tin cá nhân, class, course, instructors và chữ ký `Anh` được giữ nguyên; chỉ Assignment ID và ngày được đổi thành `HW04-AI` / `2026-08-06`.
- Mỗi artifact có một row tóm tắt trong bảng và một Verbatim Record đầy đủ để giữ prompt/output nguyên văn, file modifications, verification evidence và verdict.
- Template tương lai chỉ cần thay `ASSIGNMENT_ID`, `ASSIGNMENT_DATE` và `AI_TOOLS`; initializer đã được nối với template này.
- `ai-export-audit` và `ai-audit-initializer` đều vượt qua `quick_validate.py`: `Skill is valid!`.
- Artifact 1–2 được giữ nguyên và thay đổi này đã được ghi thành Artifact 3.

Next: commit thay đổi template audit trước khi bắt đầu dựng Playwright.
````

- **File Modifications:**
  - **File:** `.codex/skills/ai-export-audit/assets/AI_Audit_Report_Template.md`; **Action:** created; **Details:** added the canonical FIT/HCMUS audit template with fixed student/signature content, official instructions/references, insertion markers, and three assignment placeholders.
  - **File:** `.codex/skills/ai-export-audit/SKILL.md`; **Action:** edited; **Details:** changed only the report-layout workflow to maintain a five-column summary row plus a full verbatim record while preserving evidence, privacy, verdict, and anti-fabrication policies.
  - **File:** `.codex/skills/ai-audit-initializer/SKILL.md`; **Action:** edited; **Details:** replaced the embedded HW04-only template with canonical-asset initialization and future-homework placeholder replacement.
  - **File:** `AI_Audit.md`; **Action:** migrated and appended; **Details:** applied the FIT/HCMUS template, preserved Artifacts 1–2, added summary rows and insertion markers, restored the original student/signature/reference format with HW04 assignment values, and recorded Artifact 3.

- **Verification Evidence:** Both skill directories were validated with the official `skill-creator/scripts/quick_validate.py` under UTF-8 mode and returned `Skill is valid!`. A targeted structure check confirmed both insertion markers, three assignment placeholders only in the reusable asset, no unresolved placeholders in `AI_Audit.md`, both existing verbatim records, the FIT student information, the original signature fields, and the References section.
- **Verdict:** VALID
- **Reasoning:** The new asset reproduces the selected FIT/HCMUS report structure and fixed identity/signature content, while the exporter still requires exact prompts/outputs, repository-relative privacy normalization, file modifications, verification evidence, evidence-based verdicts, later correction handling, and HW04 anti-fabrication boundaries.
- **Student Fixes:** None required.

### Artifact #4 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-10 00:49:10 GMT+7
- **Agent Used:** Codex (primary agent)
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
  - **File:** `test-data/fr06/product-detail-scenarios.json`; **Action:** edited; **Details:** added the expected product name to negative and feedback scenarios.
  - **File:** `tests/fr10/fr10-state-machine.spec.ts`; **Action:** edited; **Details:** replaced inline TestCaseID groups and action map with one JSON-driven workflow dispatcher.
  - **File:** `test-data/fr10/state-machine-scenarios.json`; **Action:** edited; **Details:** added workflow, action-label, final-label, and final-action-count data.
  - **File:** `tests/fr15/product-crud-admin.spec.ts`; **Action:** edited; **Details:** moved URLs and credentials to the shared environment and fixture payload values to external JSON.
  - **File:** `test-data/fr15/fixture-config.json`; **Action:** created; **Details:** added reusable FR15 fixture price, description, image URL, and category ID.
  - **File:** `tests/support/data-loader.ts`; **Action:** edited; **Details:** added a validated JSON-object loader for external fixture configuration.
  - **File:** `scripts/verify-reports.mjs`; **Action:** edited; **Details:** preserved report history while selecting and rendering the latest report for each of the nine feature-browser pairs.
  - **File:** `package.json`; **Action:** edited; **Details:** made the Agent Skill demo execute FR06 on all three configured browsers.
  - **File:** `manual/01-human-review-runbook-vi.md`; **Action:** created; **Details:** added the student-owned review table, correction rationale, checklist, and blank signature fields.
  - **File:** `manual/02-task2-video-script-vi.md`; **Action:** created; **Details:** added the separate Vietnamese Task 2 recording timeline, commands, narration, and checks.
  - **File:** `manual/03-agent-skill-video-script-vi.md`; **Action:** created; **Details:** added the separate Agent Skill recording timeline and human-gate narration.
  - **File:** `manual/04-bug-confirmation-runbook-vi.md`; **Action:** created; **Details:** grouped 19 failing tests into nine unconfirmed candidate groups with reproduction commands and blank student decisions.
  - **File:** `manual/05-submission-checklist-vi.md`; **Action:** created; **Details:** separated completed agent work from mandatory student actions and ZIP checks.
  - **File:** `skill-demo/input/video-demo-prompt.md`; **Action:** created; **Details:** added the exact multi-step prompt for the separate Agent Skill video.
  - **File:** `artifacts/html-reports/FR06/`, `artifacts/html-reports/FR10/`, and `artifacts/html-reports/FR15/`; **Action:** created report bundles; **Details:** added nine real latest Playwright HTML report bundles across Chromium, Firefox, and Edge.
  - **File:** `artifacts/manifests/FR06/`, `artifacts/manifests/FR10/`, and `artifacts/manifests/FR15/`; **Action:** created; **Details:** added nine report manifests with pending human review and unconfirmed defect status.
  - **File:** `AI_Audit.md`; **Action:** appended; **Details:** recorded Artifact 4 and refreshed accuracy, conclusion, and disclosure sections.

- **Verification Evidence:** `npm run typecheck` passed. The skill validators reported FR06 12 scenarios/8 assertion types, FR10 12/6, and FR15 12/4. `npm run test:list` discovered 108 combinations. `npm run test:matrix` executed all nine feature-browser runs and produced 51 passes and 57 assertion failures with screenshots, video, and traces retained for failures. `npm run report:verify` rendered the latest nine reports and confirmed StudentID plus ISO timestamp metadata. A targeted `rg` scan returned `NO_PROHIBITED_MATCHES`; `git diff --check` returned no patch errors. Nine manifest-builder commands succeeded.
- **Verdict:** VALID
- **Reasoning:** The prompt requested completion of agent-owned prerequisites and two separate recording scripts. The current repository state and executed checks support those outcomes. Student-only human review, defect decisions, identity evidence, narration, YouTube upload, and signatures remain explicitly pending and were not fabricated.
- **Student Fixes:** Complete and sign the human review, confirm or reject candidate defects, record the two separate videos, and provide the unlisted YouTube URLs.

<!-- ARTIFACT_DETAILS_END -->

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 4 | 100% |
| **VALID (correct, accepted as-is)** | 4 | 100% |
| **INVALID (wrong; rejected)** | 0 | 0% |
| **INCOMPLETE (acceptable after edits)** | 0 | 0% |

## **5. Conclusion - When should AI be used (or not)?**

* AI was effective for adapting a previously used audit workflow to the individual HW04 assignment while preserving privacy and evidence-based evaluation rules.
* AI also helped perform a scoped repository cleanup while preserving reusable HW02 evidence in a clearly separated reference archive.
* AI helped reuse the official FIT/HCMUS audit presentation without weakening exact-transcript, verification-evidence, privacy, and anti-fabrication requirements.
* AI effectively refactored the three Playwright suites toward stricter external-data compliance, executed the full browser matrix, verified rendered report metadata, and prepared repeatable human-review and video workflows.
* AI output must be validated against repository state and executable checks; the recorded work used skill validation, resolved-path safety checks, final path checks, and Git status evidence.
* AI must not replace the student's review decisions, signatures, Vietnamese narration, identity evidence, GitHub defect confirmation, or submission actions.

## **6. Mandatory Disclosure (paste verbatim)**

I used Codex to adapt and validate local Agent Skills, maintain the HW04 AI Audit Report, reuse the official FIT/HCMUS audit template, reorganize the repository, refactor data-driven Playwright tests for FR06, FR10, and FR15, execute and verify the three-browser report matrix, generate evidence manifests, and prepare human-review, defect-confirmation, submission, and video runbooks. I reviewed the assignment scope, privacy, verification, and anti-fabrication constraints; the changes were checked through repository state, TypeScript, scenario validators, Playwright discovery and execution, rendered report verification, pattern scans, manifest generation, and Git diff checks. Codex did not fabricate student review decisions, signatures, identity evidence, Vietnamese narration, YouTube uploads, GitHub Issues, or Moodle submission.

## **Signature**

| Student name (printed): | NGUYEN HIEN TUAN ANH |
| :---- | :---- |
| **Student ID:** | 23127280 |
| **Class / Cohort:** | 23KTPM2 |
| **Course:** | CSC13003 - Software Testing |
| **Instructor:** | Truong Phuoc Loc; Ho Tuan Thanh; Lam Quang Vu |
| **Date:** | 2026-08-06 |
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

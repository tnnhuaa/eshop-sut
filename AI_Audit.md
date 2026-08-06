# AI Audit Report

## **1. Student and Assignment Information**

| Field | Value |
| --- | --- |
| Student ID | 23127280 |
| Student Name | Nguyễn Hiền Tuấn Anh |
| Assignment | HW04 – Automation Testing |
| Exercise ID | HW04-AI |
| Date | 2026-08-06 |

## **2. AI Tools Used**

| AI Tool | Purpose |
| --- | --- |
| Codex | Planning, Playwright automation assistance, review, debugging, documentation, and audit logging |

## **3. AI Interaction Log**

### Artifact 1

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

### Artifact 2

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

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 2 | 100% |
| **VALID (correct, accepted as-is)** | 2 | 100% |
| **INVALID (substantively wrong or rejected)** | 0 | 0% |
| **INCOMPLETE (usable only after completion or refinement)** | 0 | 0% |

## **5. Conclusion - When should AI be used (or not)?**

* AI was effective for adapting a previously used audit workflow to the individual HW04 assignment while preserving privacy and evidence-based evaluation rules.
* AI also helped perform a scoped repository cleanup while preserving reusable HW02 evidence in a clearly separated reference archive.
* AI output must be validated against repository state and executable checks; the recorded work used skill validation, resolved-path safety checks, final path checks, and Git status evidence.
* AI must not replace genuine Playwright execution, HTML reports, screenshots, Vietnamese narration, identity evidence, GitHub publication, or student review.

## **6. Mandatory Disclosure (paste verbatim)**

I used Codex to adapt and validate two local Agent Skills for maintaining the HW04 AI Audit Report and to reorganize the repository by removing mobile, dependency, runtime, and obsolete HW02 demo content while archiving reusable HW02 references. I reviewed the assignment-specific scope, privacy, verification, and anti-fabrication constraints; the changes were checked through repository state, resolved-path safety checks, skill validation, and Git status. Codex did not fabricate browser executions, HTML reports, screenshots, videos, identity evidence, GitHub Issues, or submission actions.

## **Signature**

- Student: Nguyễn Hiền Tuấn Anh
- Student ID: 23127280
- Date: 2026-08-06

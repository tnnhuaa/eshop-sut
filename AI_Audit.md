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
| **Assignment ID (e.g., HW#00, HW#02):** | HW#05 |
| **Assignment date:** | 2026-08-15 |
| **AI tool(s) used:** | OpenAI Codex (primary and delegated agents) |
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
| **Artifact #1 - Implement HW05 plan and initialize audit**<br>Tool: Codex primary agent; load_plan_agent; stress_plan_agent; spike_plan_agent<br>Time: 2026-08-15 23:58:31 GMT+7<br>Full prompt: see Artifact #1 verbatim record below. | Created a clean HW05 worktree, guarded Scenario B scaffolding, four static-valid JMX plans, reusable Agent Skill, automation scripts, manual runbooks, demo materials, report skeleton, and CI proposal. Paused for a Java runtime decision after reproducing Java 25/Groovy incompatibility.<br>Full output: see Artifact #1 verbatim record below. | INCOMPLETE | File state and validators support the created artifacts: all four JMX files passed the skill's static validator and the skill passed `quick_validate.py`. Stress plan loading exposed `Unsupported class file major version 69` for bundled Groovy on Java 25. No end-to-end preflight or official evidence exists, so completion cannot be claimed. This follows the assignment evidence boundary and Apache JMeter's recommendation to use a supported Java runtime. | Student must choose JDK 17 isolation or BeanShell/core rewrite, then inspect a real one-VU preflight before measured execution. |
| **Artifact #2 - Select isolated JDK 17 and finish the preflight gate**<br>Tool: Codex primary agent; load_plan_agent; stress_plan_agent; spike_plan_agent<br>Time: 2026-08-16 00:23:18 GMT+7<br>Full prompt: see Artifact #2 verbatim record below. | Installed a portable Temurin JDK 17 for JMeter only, corrected the four Scenario B plans and validators, seeded deterministic data, recorded one rejected preflight and one machine-valid candidate, committed the work in scoped commits, and stopped before official performance execution.<br>Full output: see Artifact #2 verbatim record below. | INVALID | The later student rejection showed that the JTL review instruction did not explicitly distinguish CSV results from JMX/XML plans or explain that the CSV has no response body. Opening the CSV with JMeter **File → Open** fails at `timeStamp`; the run is therefore `REJECTED`, not accepted evidence. | Use the corrected CSV-JTL review procedure and create a new preflight run ID. |
| **Artifact #3 - Correct rejected CSV-JTL review**<br>Tool: Codex primary agent<br>Time: 2026-08-17 21:35:59 GMT+7<br>Full prompt: see Artifact #3 verbatim record below. | Diagnosed the CSV-versus-JMX parsing error, marked preflight `000610` rejected, and corrected the future review procedure without rerunning the SUT.<br>Full output: see Artifact #3 verbatim record below. | VALID | The raw file header is `timeStamp,elapsed,...`, proving CSV format; the recorded parser error is consistent with opening it as XML/JMX. Run record, manifest, README, and runbook were updated to `REJECTED` and checked. | None required before a new preflight; the student must perform the corrected review. |
<!-- AUDIT_TABLE_ROWS_END -->

### Verbatim Artifact Records

### Artifact #1 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-15 23:58:31 GMT+7
- **Agent Used:** Codex (primary agent); load_plan_agent; stress_plan_agent; spike_plan_agent
- **Prompt:**

````text
Thực hiện kế hoạch này, nếu có thắc mắc thì cho em lựa chọn để xác nhận cách thực hiện, sử dụng skill [$ai-export-audit](external-skills/ai-export-audit/SKILL.md) để ghi Audit.
````

- **AI Output:**

````text
Chọn **A (khuyến nghị)** hoặc **B** để anh tiếp tục chặng 3/5:

**A — Dùng JDK 17 riêng cho JMeter:** cài JDK 17 portable cạnh JMeter và cấu hình runner chỉ dùng nó; Java 25 hệ thống vẫn giữ nguyên. Cách này giữ được Groovy compiled, phù hợp hơn cho performance test và ít tạo overhead trong load generator.

**B — Giữ Java 25:** anh chuyển toàn bộ Groovy trong Load/Spike/Soak sang BeanShell hoặc core functions như Stress plan. Không cần cài Java khác, nhưng BeanShell chậm hơn và có thể làm sai lệch số liệu khi tải tăng.

Tiến độ hiện tại:

- Worktree sạch `HW05` trên branch `hw5-tanh` đã tạo; 4.121 file untracked của HW02 được giữ nguyên.
- Load, Stress, Spike và Soak JMX đều qua static validator với đủ 9 request Scenario B.
- Agent Skill `eshop-jmeter-performance` đã qua `quick_validate.py`.
- Seed/runner/summarizer/manifest, 10 manual runbook, skill-demo package, report skeleton và CI proposal đã được tạo.
- `AI_Audit.md` đã ghi Artifact #1 là `INCOMPLETE`; chưa có official JTL, metric hay evidence nào được tạo.

Anh đề xuất **A**. Trả lời đúng một ký tự: **A** hoặc **B**.
````

- **File Modifications:**
  - File: `AGENTS.md`; Action: created; Details: locked Scenario B, CLI execution, human gates, and evidence restrictions.
  - File: `.agents/skills/eshop-jmeter-performance/SKILL.md`; Action: created; Details: reusable guarded JMeter workflow.
  - File: `.agents/skills/eshop-jmeter-performance/agents/openai.yaml`; Action: created; Details: skill UI metadata.
  - File: `.agents/skills/eshop-jmeter-performance/references/scenario-b.md`; Action: created; Details: canonical endpoint and correlation contract.
  - File: `.agents/skills/eshop-jmeter-performance/references/evidence-policy.md`; Action: created; Details: evidence states and human boundaries.
  - File: `.agents/skills/eshop-jmeter-performance/references/rubric-checks.md`; Action: created; Details: assignment completeness checks and rubric discrepancy.
  - File: `.agents/skills/eshop-jmeter-performance/scripts/validate_jmx.py`; Action: created and edited; Details: XML, workflow, CSV, and correlation validator.
  - File: `.agents/skills/eshop-jmeter-performance/scripts/validate_jtl.py`; Action: created; Details: required-column and non-empty JTL validation.
  - File: `.agents/skills/eshop-jmeter-performance/scripts/build_manifest.py`; Action: created; Details: SHA-256 evidence manifest builder.
  - File: `.agents/skills/eshop-jmeter-performance/assets/run-record-template.md`; Action: created; Details: guarded run record.
  - File: `.agents/skills/eshop-jmeter-performance/assets/human-review-template.md`; Action: created; Details: student review form.
  - File: `.agents/skills/eshop-jmeter-performance/assets/ai-critique-template.md`; Action: created; Details: 200–300 word critique structure.
  - File: `performance/common/scenario-b.properties`; Action: created; Details: safe runtime defaults.
  - File: `performance/data/users.csv`; Action: created; Details: external CSV header awaiting deterministic seed.
  - File: `performance/load/23127280_Load_20260815.jmx`; Action: created and corrected; Details: Load plan with nine requests and business assertions.
  - File: `performance/stress/23127280_Stress_20260815.jmx`; Action: created; Details: L-to-3L step-load plan using Java-25-compatible components.
  - File: `performance/stress/README.md`; Action: created; Details: Stress parameters and safety notes.
  - File: `performance/spike/23127280_Spike_20260815.jmx`; Action: created; Details: 0.2L-to-2L spike profile.
  - File: `performance/spike/scenario_b_fragment.jmx`; Action: created and corrected; Details: reusable Scenario B workflow with numeric invariants.
  - File: `performance/soak/23127280_Soak_20260815.jmx`; Action: created and corrected; Details: 0.7L, 10–15 minute guarded plan.
  - File: `performance/results/.gitkeep`; Action: created; Details: reserved raw result directory without fake evidence.
  - File: `performance/reports/.gitkeep`; Action: created; Details: reserved HTML report directory without fake evidence.
  - File: `scripts/seed-performance-data.js`; Action: created; Details: isolated users/fixed coupon seeding and reset manifest.
  - File: `scripts/run-jmeter.ps1`; Action: created; Details: CLI runner that refuses overwrite.
  - File: `scripts/preflight.ps1`; Action: created; Details: one-user validation entry point.
  - File: `scripts/summarize-jtl.py`; Action: created; Details: read-only percentile/error summary.
  - File: `scripts/build-submission-manifest.py`; Action: created; Details: repository file hash manifest.
  - File: `manual/00-decisions-and-approvals.md`; Action: created; Details: locked decisions and human gates.
  - File: `manual/01-environment-hardware.md`; Action: created; Details: real hardware capture steps.
  - File: `manual/02-official-run-runbook.md`; Action: created; Details: reset, calibration, and official run commands.
  - File: `manual/03-run-result-form.md`; Action: created; Details: real metric/evidence record.
  - File: `manual/04-video-script-vi.md`; Action: created; Details: Vietnamese 8–10 minute recording script.
  - File: `manual/05-skill-demo-runbook.md`; Action: created; Details: Agent Skill demo steps.
  - File: `manual/06-human-review-form.md`; Action: created; Details: AI correction form.
  - File: `manual/07-bug-confirmation-form.md`; Action: created; Details: reproduction and `CONFIRM` gate.
  - File: `manual/08-oral-defense.md`; Action: created; Details: evidence-based defense prompts.
  - File: `manual/09-submission-checklist.md`; Action: created; Details: evidence, documentation, and upload checks.
  - File: `skill-demo/input/demo-prompt.md`; Action: created; Details: clean-context skill invocation.
  - File: `skill-demo/input/demo-users.csv`; Action: created; Details: two-user demo input.
  - File: `skill-demo/input/demo.properties`; Action: created; Details: bounded demo profile.
  - File: `skill-demo/expected/acceptance-checklist.md`; Action: created; Details: demo acceptance criteria.
  - File: `skill-demo/recording/demo-shot-list.md`; Action: created; Details: 4–6 minute shot list.
  - File: `docs/continuous-performance-pipeline.md`; Action: created; Details: trigger/gate/trade-off proposal.
  - File: `HW05_Report.md`; Action: created; Details: report skeleton with `NOT_RUN` evidence.
  - File: `README_HW05.md`; Action: created; Details: safe-start summary.
  - File: `AI_Audit.md`; Action: created and appended; Details: initialized HW05 audit and added Artifact #1.

- **Verification Evidence:** Worktree created from commit `85af3ba`; all four JMX files passed `.agents/skills/eshop-jmeter-performance/scripts/validate_jmx.py`; Agent Skill returned `Skill is valid!` from `quick_validate.py`; Node seed script passed `node --check`; Stress JMX loaded in JMeter 5.6.3 and its deliberate missing-CSV guard stopped execution; Java 25/Groovy incompatibility was reproduced as `Unsupported class file major version 69`; no official SUT run or result evidence exists.
- **Verdict:** INCOMPLETE
- **Reasoning:** The requested implementation is materially advanced and statically validated, but a supported runtime approach must be chosen and a real one-user preflight must pass before the test plans can be treated as ready for measured execution.
- **Student Fixes:** Choose option A or B, then personally inspect and accept the real preflight and all later evidence.

### Artifact #2 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-16 00:23:18 GMT+7
- **Agent Used:** Codex (primary agent); load_plan_agent; stress_plan_agent; spike_plan_agent
- **Prompt:**

````text
A
````

- **AI Output:**

````text
Đã hoàn tất phần máy có thể chuẩn bị và dừng đúng human gate đầu tiên. Chưa chạy Load/Stress/Spike/Soak chính thức.

Kết quả:

- Branch `hw5-tanh` trong worktree `HW05`; SUT không bị sửa.
- JMeter 5.6.3 dùng Temurin JDK 17 portable riêng; Java hệ thống không đổi.
- Cả 4 JMX Load, Stress, Spike, Soak đều PASS validator; mỗi flow có đủ 9 request Scenario B, correlation/assertion và listener GUI bị tắt khi chạy CLI.
- Preflight đầu `...000456` bị REJECT vì chạy 602 samples do cấu hình loop sai; evidence được giữ và ghi nhãn đúng.
- Preflight sửa `...000610` có đúng 9 samples, 9/9 HTTP 200, 0 lỗi ở mức máy. Sau đó em `REJECT` vì hướng dẫn review CSV-JTL chưa đủ rõ; run được giữ là `REJECTED`.
- Đã tạo 10 commit implementation tách theo scaffold, data, skill, automation, 4 test plans, preflight và tài liệu; audit nằm ở commit thứ 11; chưa push.

Việc em làm ngay — khoảng 5–10 phút:

1. Mở báo cáo HTML: `performance/reports/23127280_Preflight_20260816_000610/index.html`.
2. Xác nhận tổng samples = 9, error = 0 và các label chạy đúng thứ tự `01` đến `09`.
3. Mở JMeter bằng JDK 17, mở Load JMX, bật Summary Report chỉ để đọc file `performance/results/23127280_Preflight_20260816_000610/23127280_Preflight_20260816_000610.jtl`. Không nhấn nút Run.
4. Nếu khớp, trả lời: `HUMAN_VERIFY PREFLIGHT 23127280_Preflight_20260816_000610`.

Nếu có điểm nào sai, trả lời: `REJECT PREFLIGHT 23127280_Preflight_20260816_000610: <lý do>`.

Sau khi em xác nhận, bước kế tiếp mới là calibration để chọn `L`, rồi mới chạy official Load → Stress → Spike → Soak. `AI_Audit.md` đã thêm Artifact #2 với verdict `INCOMPLETE`, đúng ranh giới evidence.
````

- **File Modifications:**
  - File: `.agents/skills/eshop-jmeter-performance/scripts/validate_jmx.py`; Action: edited; Details: strengthened exact correlation, listener, CSV pool, embedded-workflow, and request-body coupon checks.
  - File: `performance/data/users.csv`; Action: populated; Details: ten isolated Scenario B performance users.
  - File: `performance/data/last-reset.json`; Action: populated; Details: deterministic reset identity and `RUN_UNVERIFIED` state.
  - File: `performance/load/23127280_Load_20260815.jmx`; Action: corrected; Details: finite preflight loop and numeric/order correlation checks.
  - File: `performance/stress/23127280_Stress_20260815.jmx`; Action: corrected; Details: JDK-17 Groovy, staged L profile, global cycling CSV, fixed-coupon invariants, and `orderId` consistency.
  - File: `performance/spike/23127280_Spike_20260815.jmx`; Action: corrected; Details: embedded self-contained workflow, two module controllers, global CSV, and corrected Groovy functions.
  - File: `performance/spike/scenario_b_fragment.jmx`; Action: retained; Details: reference fragment, no longer a runtime dependency.
  - File: `performance/soak/23127280_Soak_20260815.jmx`; Action: corrected; Details: JDK-17-compatible correlations and numeric assertions.
  - File: `scripts/run-jmeter.ps1`; Action: corrected; Details: scoped Temurin 17 runtime, guarded scenario arguments, overwrite protection, and no obsolete Spike fragment parameter.
  - File: `scripts/preflight.ps1`; Action: corrected; Details: forces one finite Scenario B iteration.
  - File: `performance/results/23127280_Preflight_20260816_000456/*`; Action: created; Details: first real preflight retained and explicitly rejected.
  - File: `performance/reports/23127280_Preflight_20260816_000456/*`; Action: created; Details: HTML evidence for the rejected run.
  - File: `performance/results/23127280_Preflight_20260816_000610/*`; Action: created; Details: raw JTL, manifest, and run record for a machine candidate later rejected during human review.
  - File: `performance/reports/23127280_Preflight_20260816_000610/*`; Action: created; Details: HTML dashboard awaiting student review.
  - File: `AI_Audit.md`; Action: appended and refreshed; Details: exact option-A prompt/output, evidence state, agents, modifications, accuracy summary, and disclosure.

- **Verification Evidence:** Temurin `17.0.20+8` and JMeter 5.6.3 were confirmed with a scoped runtime; all four final JMX files passed `validate_jmx.py`; Stress, Soak, and final Spike plans loaded successfully in JMeter with deliberate missing-input guards; the second real preflight produced exactly nine successful HTTP 200 samples. On 2026-08-17, the student rejected it after JMeter parsed the CSV JTL as XML/JMX. The current Python runtimes lacked PyYAML when `quick_validate.py` was re-run, so that validator could not be repeated in this turn.
- **Verdict:** INVALID
- **Reasoning:** The response did not explicitly prevent the student from using JMeter **File → Open** on the CSV JTL, and it implied a level of raw response inspection that this CSV did not retain. The resulting human rejection supersedes machine-only status.
- **Student Fixes:** Follow Artifact #3's corrected review procedure and rerun preflight with a new run ID.

### Artifact #3 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-17 21:35:59 GMT+7
- **Agent Used:** Codex (primary agent)
- **Prompt:**

````text
REJECT PREFLIGHT 23127280_Preflight_20260816_000610: only whitespace content allowed before start tag and not t (position: START_DOCUMENT seen t... @1:2) khi mở file raw jtl bị vây
````

- **AI Output:**

````text
Đúng: raw JTL này là CSV, không phải XML/JMX. Header thật của file là `timeStamp,elapsed,...`; ký tự `t` trong lỗi chính là chữ đầu của `timeStamp`.

`File → Open` trong JMeter chỉ mở Test Plan `.jmx` dạng XML, nên dùng nó cho `.jtl` sẽ báo lỗi parser này.

Anh đã:

- Đổi evidence `23127280_Preflight_20260816_000610` thành `REJECTED`; chưa chạy lại preflight hay official test.
- Cập nhật run record và manifest, giữ nguyên raw JTL làm rejected evidence.
- Sửa README và runbook: CSV JTL xem qua Summary Report's Browse field, VS Code hoặc Excel; không dùng File → Open.
- Ghi rõ CSV hiện tại chỉ lưu outcome/metrics, không có response body để tự xem orderId.
- Sửa script tóm tắt để đọc trạng thái từ run record thay vì luôn in `RUN_UNVERIFIED`.
- Cập nhật AI Audit: Artifact #2 là INVALID vì hướng dẫn review chưa đủ rõ; Artifact #3 ghi correction này.

Khi chạy preflight mới:

1. Mở Load `.jmx` bằng File → Open.
2. Enable Summary Report trong plan.
3. Dùng Browse của Summary Report chọn `.jtl` CSV.
4. Mở HTML report để check 9 labels và 0 failures.
5. Nếu cần nhìn response/orderId, chỉ bật View Results Tree cho preflight GUI riêng; không bật nó khi official CLI run.

Next: không cần mở lại file `000610`; khi em sẵn sàng, gửi `PREPARE PREFLIGHT RERUN`.
````

- **File Modifications:**
  - File: `performance/results/23127280_Preflight_20260816_000610/run-record.md`; Action: edited; Details: state changed to `REJECTED`, reason and evidence limitation recorded.
  - File: `performance/results/23127280_Preflight_20260816_000610/manifest.json`; Action: edited; Details: every evidence item marked `REJECTED`.
  - File: `manual/00-decisions-and-approvals.md`; Action: edited; Details: rejected preflight and new-preflight requirement recorded.
  - File: `manual/02-official-run-runbook.md`; Action: edited; Details: explicit CSV-JTL review procedure and response-body limitation added.
  - File: `README_HW05.md`; Action: edited; Details: rejected-preflight status and corrected review reference added.
  - File: `scripts/summarize-jtl.py`; Action: edited; Details: evidence state can be supplied or read from sibling `run-record.md`.
  - File: `AI_Audit.md`; Action: appended and refreshed; Details: Artifact #2 reassessed and Artifact #3 added.

- **Verification Evidence:** The first JTL line is `timeStamp,elapsed,label,...`; that is CSV. The rejection reason is consistent with JMeter parsing it as XML via File → Open. Updated evidence states and instructions were checked without executing the SUT.
- **Verdict:** VALID
- **Reasoning:** The correction matches the actual JTL format and preserves the student's rejection. No unsupported test-pass claim was made.
- **Student Fixes:** Create and review a new preflight before calibration.

<!-- ARTIFACT_DETAILS_END -->

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 3 | 100% |
| **VALID (correct, accepted as-is)** | 1 | 33.33% |
| **INVALID (wrong; rejected)** | 1 | 33.33% |
| **INCOMPLETE (acceptable after edits)** | 1 | 33.33% |

## **5. Conclusion - When should AI be used (or not)?**

AI was effective for parallel artifact generation, reusable validation, exposing a runtime compatibility risk, and preserving traceable rejected evidence. It made a review-procedure mistake by not explicitly distinguishing CSV JTL results from JMX/XML plans and by overstating what the CSV could show. AI should be used for repeatable structure, static checks, and evidence-backed analysis; it must not choose unobserved workload limits, claim human acceptance, or replace the student's review, resource observation, narration, issue confirmation, or submission.

## **6. Mandatory Disclosure (paste verbatim)**

I used OpenAI Codex to help design and implement HW05 JMeter plans, supporting scripts, an Agent Skill, runbooks, and documentation. I will personally review the generated work and provide all real executions, raw JTL files, resource and hardware evidence, narration, human judgments, issue confirmations, uploads, and submission actions; none of those items may be fabricated or marked verified by AI.

## **Signature**

| Student name (printed): | NGUYEN HIEN TUAN ANH |
| :---- | :---- |
| **Student ID:** | 23127280 |
| **Class / Cohort:** | 23KTPM2 |
| **Course:** | CSC13003 - Software Testing |
| **Instructor:** | Truong Phuoc Loc; Ho Tuan Thanh; Lam Quang Vu |
| **Date:** | 2026-08-15 |
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

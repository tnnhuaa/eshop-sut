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
| **Artifact #4 - Accept official Soak evidence**<br>Tool: Codex primary agent; eshop-jmeter-performance<br>Time: 2026-08-18 02:26:15 GMT+7<br>Full prompt: see Artifact #4 verbatim record below. | Recorded the student's Soak `_002` acceptance, updated the evidence state and manifest, and committed the human decision without changing raw JTL data.<br>Full output: see Artifact #4 verbatim record below. | VALID | The accepted run has 16,759 successful samples, raw p95 9 ms, stable first/last-half throughput, and matching manifest hashes. The short CPU excursion is reported as a warning, not hidden. | None required. |
| **Artifact #5 - Verify official Load rerun**<br>Tool: Codex primary agent; eshop-jmeter-performance; clear-writing<br>Time: 2026-08-18 02:56:35 GMT+7<br>Full prompt: see Artifact #5 verbatim record below. | Checked Load `_002` raw JTL, HTML report, resource CSV, and four screenshots; recorded it as the accepted replacement for contaminated Load `_001`; created two scoped commits.<br>Full output: see Artifact #5 verbatim record below. | VALID | JTL and HTML evidence support 7,120 samples, 0.00% errors, raw p95 9 ms, and 16.983 samples/s. The accepted rerun preserves `_001` rather than repairing raw evidence. | None required. |
| **Artifact #6 - Record Task 2 human review**<br>Tool: Codex primary agent; eshop-jmeter-performance; clear-writing<br>Time: 2026-08-18 03:17:07 GMT+7<br>Full prompt: see Artifact #6 verbatim record below. | Applied the student's hardware and Task 2 decisions, retained indexes and pagination as feasible, rejected generic pooling and immediate clustering, and committed the two reviews separately.<br>Full output: see Artifact #6 verbatim record below. | VALID | The review cites raw JTL corrections: Stress has 799 parent rows, and Spike raw/HTML p95 values use different populations. The optimization decisions match the SQLite and process-local cart architecture. | None required. |
| **Artifact #7 - Draft continuous performance proposal**<br>Tool: Codex primary agent; eshop-jmeter-performance; clear-writing<br>Time: 2026-08-18 03:22:54 GMT+7<br>Full prompt: see Artifact #7 verbatim record below. | Created a Task 3 proposal with path-based triggers, a flow chart, execution tiers, p95/error gates, baseline controls, and cost/false-alarm trade-offs; left it awaiting student review.<br>Full output: see Artifact #7 verbatim record below. | INCOMPLETE | The proposal satisfied the content requirements, but the response correctly kept it `RUN_UNVERIFIED` until the student reviewed its policy choices. Artifact #8 supplies that later acceptance. | Student reviewed and accepted the decisions in Artifact #8. |
| **Artifact #8 - Accept continuous performance proposal**<br>Tool: Codex primary agent; clear-writing<br>Time: 2026-08-18 03:27:40 GMT+7<br>Full prompt: see Artifact #8 verbatim record below. | Recorded the student's acceptance of Task 3 path rules, tiers, p95 rule, and non-production restriction; kept the pipeline described as a proposal rather than an implemented workflow.<br>Full output: see Artifact #8 verbatim record below. | VALID | The current file and commits `3eef521` and `0ec4533` preserve the accepted proposal and human decision. No GitHub Actions execution is falsely claimed. | None required. |
| **Artifact #9 - Extend and demonstrate the Agent Skill**<br>Tool: Codex primary agent; eshop-jmeter-performance; skill-creator<br>Time: 2026-08-18 03:32:51 GMT+7<br>Full prompt: see Artifact #9 verbatim record below. | Added reusable endpoint contracts, a template and extension guide, validated all four JMX plans and Load `_002` JTL, committed the skill update, and produced a concise recording script.<br>Full output: see Artifact #9 verbatim record below. | VALID | Commit `baeedd1` and the current skill show contract-driven sampler, CSV, correlation, listener, filename, and forbidden-literal rules. The demo audits existing evidence without executing JMeter or modifying the SUT. | None required. |
| **Artifact #10 - Record video evidence links**<br>Tool: Codex primary agent; eshop-jmeter-performance; clear-writing<br>Time: 2026-08-18 03:55:52 GMT+7<br>Full prompt: see Artifact #10 verbatim record below. | Linked the four accepted performance runs and Agent Skill demo in the report, README, decisions, run records, and manifests; recalculated metadata hashes and committed the changes.<br>Full output: see Artifact #10 verbatim record below. | VALID | Commit `fbf26fd` contains the five student-provided URLs and associates them only with accepted runs. The response explicitly leaves playback, privacy, audio, and duration checks to the student. | Student must complete the final incognito playback gate before submission. |
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

### Artifact #4 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-18 02:26:15 GMT+7
- **Agent Used:** Codex (primary agent); eshop-jmeter-performance skill
- **Prompt:**

````text
ACCEPT OFFICIAL SOAK 23127280_Soak_Official_20260818_002;
VERDICT PASS LATENCY ERROR AND STABILITY WITH TRANSIENT CPU WARNING
````

- **AI Output:**

````text
Soak `_002` đã chính thức là `HUMAN_VERIFIED`.

- Verdict: PASS latency/error/stability
- Warning: CPU tăng thoáng qua
- Manifest: toàn bộ SHA-256 khớp
- Commit: `5603fcb docs(evidence): accept official soak run`
- Chưa push

Tiến độ Task 1: Stress ✅ Spike ✅ Soak ✅ Load 🔴 cần quay lại `_002`.

**Bước tiếp theo:** khởi động backend rồi gửi:

```text
LOAD RERUN BACKEND READY
```
````

- **File Modifications:**
  - File: `performance/results/23127280_Soak_Official_20260818_002/run-record.md`; Action: edited; Details: recorded the student's accepted verdict and human verification.
  - File: `performance/results/23127280_Soak_Official_20260818_002/manifest.json`; Action: edited; Details: changed accepted evidence entries to `HUMAN_VERIFIED` while preserving file hashes.
  - File: `HW05_Report.md`; Action: edited; Details: recorded the accepted Soak metrics and warning.
  - File: `manual/00-decisions-and-approvals.md`; Action: edited; Details: recorded the explicit student decision.

- **Verification Evidence:** Commit `5603fcb`; accepted raw JTL with 16,759 successful samples; matching SHA-256 manifest; student acceptance in the prompt above.
- **Verdict:** VALID
- **Reasoning:** The response preserved the distinction between a short CPU warning and sustained instability, and only changed the evidence state after explicit student approval.
- **Student Fixes:** None required.

### Artifact #5 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-18 02:56:35 GMT+7
- **Agent Used:** Codex (primary agent); eshop-jmeter-performance skill; clear-writing skill
- **Prompt:**

````text
# Files mentioned by the user:

## load-summary-report.png: attachments/load-summary-report.png
## load-html-dashboard.png: attachments/load-html-dashboard.png
## load-terminal-final.png: attachments/load-terminal-final.png
## load-task-manager.png: attachments/load-task-manager.png

## My request:
Xong load_002, cập nhật docs em đã verified rồi commit đi anh
````

- **AI Output:**

````text
Xong rồi em — `Load_002` đã được ghi nhận `HUMAN_VERIFIED` và commit riêng biệt.

1. `46796cf` — `test(evidence): record verified official load rerun`
   - JTL, HTML report
   - 4 ảnh minh chứng
   - resource CSV
   - manifest và preflight

2. `e6f7b3d` — `docs(hw5): replace contaminated load evidence with rerun`
   - Cập nhật [HW05_Report.md](HW05_Report.md)
   - Cập nhật README, decisions
   - Đánh dấu `_002` thay thế `_001`

Kết quả Load chính thức:

- Samples: `7.120`
- Errors: `0.00%`
- Average: `3.57 ms`
- P95: `9 ms`
- P99: `12 ms`
- Throughput: `16.98 req/s`
- Peak CPU: `89.54%`
- Peak RAM: `79.17%`
- Kết luận: `PASS latency/error SLO; CPU và RAM không vượt ngưỡng dừng`

Task 1 hiện đã có đủ bốn lần chạy được em xác minh: Load, Stress, Spike và Soak. Các file runtime/database và evidence cũ `_001` không bị đưa nhầm vào commit.

Bước tiếp theo: gửi anh URL các clip sau khi upload để anh cập nhật video evidence và hoàn tất phần tài liệu Task 1.
````

- **File Modifications:**
  - File: `performance/results/23127280_Load_Official_20260818_002/*`; Action: created; Details: raw JTL, summary, run record, snapshots, and manifest for the accepted rerun.
  - File: `performance/reports/23127280_Load_Official_20260818_002/*`; Action: created; Details: generated JMeter HTML report.
  - File: `docs/evidence/load/23127280_Load_Official_20260818_002/*`; Action: created; Details: four student screenshots, resource counters, and evidence notes.
  - File: `HW05_Report.md`; Action: edited; Details: replaced Load `_001` with accepted Load `_002` in the results and submission sections.
  - File: `README_HW05.md`; Action: edited; Details: recorded Load `_002` as the accepted run.
  - File: `manual/00-decisions-and-approvals.md`; Action: edited; Details: recorded the student's human verification.

- **Verification Evidence:** Commits `46796cf` and `e6f7b3d`; raw JTL summary of 7,120 samples with 0 failures; HTML statistics; resource CSV; four screenshots; manifest hashes.
- **Verdict:** VALID
- **Reasoning:** The rerun uses a unique run ID and replaces, rather than repairs, the contaminated `_001` evidence. Reported values agree with the accepted raw and rendered evidence.
- **Student Fixes:** None required.

### Artifact #6 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-18 03:17:07 GMT+7
- **Agent Used:** Codex (primary agent); eshop-jmeter-performance skill; clear-writing skill
- **Prompt:**

````text
HARDWARE VERIFIED TUANANH;
ACCEPT TASK2 ANALYSIS 1817ba9;
FEASIBLE: indexes and order-history pagination;
REJECT: generic connection pool and immediate Node clustering
````

- **AI Output:**

````text
Đã xong và commit tách riêng. :codex-annotation{index="1"}

1. ✅ Hardware → `HUMAN_VERIFIED`
   - Commit: `e6cdccb`
   - Đã kiểm tra hostname `TUANANH` và SHA-256 ảnh.

2. ✅ Task 2 → `HUMAN_VERIFIED`
   - Commit: `200e3c9`
   - Giữ: composite indexes, order-history pagination.
   - Loại: generic connection pool, immediate Node clustering.
   - `AI_Critique.md` đúng 247 từ.

3. ⏭️ Tiến độ tiếp theo
   - Task 1: hoàn thành phần kỹ thuật và evidence.
   - Task 2: hoàn thành.
   - Task 3: chưa thực hiện/chốt.
   - Sau Task 3: thêm URL video, Agent Skill demo và hoàn thiện AI Audit.

Các file runtime và evidence cũ chưa theo dõi vẫn được giữ nguyên, không đưa nhầm vào commit.

Bước tiếp theo: gửi **`START TASK 3`** để anh hướng dẫn và hoàn thiện Task 3.
````

- **File Modifications:**
  - File: `docs/evidence/hardware/README.md`; Action: edited; Details: recorded the student's hardware verification for host `TUANANH`.
  - File: `docs/task2-ai-analysis.md`; Action: edited; Details: changed the review state to `HUMAN_VERIFIED` and recorded accepted/rejected recommendations.
  - File: `AI_Critique.md`; Action: edited; Details: recorded the student's acceptance of the 247-word critique.
  - File: `manual/06-human-review-form.md`; Action: edited; Details: completed the evidence correction and optimization review.
  - File: `HW05_Report.md`; Action: edited; Details: linked the accepted Task 2 analysis and decisions.

- **Verification Evidence:** Commits `e6cdccb` and `200e3c9`; hardware evidence hash and hostname; raw-JTL corrections in `docs/task2-ai-analysis.md`; explicit student decision in the prompt.
- **Verdict:** VALID
- **Reasoning:** The response records the student's own review and keeps only recommendations supported by the SQLite and process-local cart implementation.
- **Student Fixes:** None required.

### Artifact #7 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-18 03:22:54 GMT+7
- **Agent Used:** Codex (primary agent); eshop-jmeter-performance skill; clear-writing skill
- **Prompt:**

````text
Làm task 3 cho em luôn đi dựa trên những cái em review để rút ra nội dung để hoàn thành task 3
````

- **AI Output:**

````text
Mở [Task 3 proposal](docs/continuous-performance-pipeline.md) và kiểm tra 5 quyết định cuối file.

1. ✅ Đã hoàn thành nội dung Task 3:
   - Commit watcher và điều kiện bỏ qua.
   - Flow chart đầy đủ.
   - PR, nightly, weekly và release tiers.
   - Ngưỡng p95/error và xử lý false alarm.
   - Phân tích cost, baseline drift và production safety.

2. ✅ Đã dùng kết quả em review:
   - Baseline Load p95 = `9 ms`.
   - Giữ indexes và pagination.
   - Loại generic connection pool và immediate Node clustering.
   - Không trộn raw-JTL p95 với HTML Total.

3. ✅ Commit riêng:
   - `3eef521 docs(task3): propose continuous performance model`

4. ⏳ Trạng thái: `RUN_UNVERIFIED`
   - Chờ em xác nhận để chuyển thành `HUMAN_VERIFIED`.
   - Form: [07-task3-review-form.md](manual/07-task3-review-form.md)

Nếu đồng ý, gửi đúng:

```text
ACCEPT TASK3 3eef521;
PATH RULES OK;
TIERS OK;
P95 RULE OK;
STRESS SPIKE NONPROD ONLY
```
````

- **File Modifications:**
  - File: `docs/continuous-performance-pipeline.md`; Action: replaced content; Details: created the evidence-based Task 3 model, flow chart, gates, tiers, baseline controls, artifacts, and trade-offs.
  - File: `manual/07-task3-review-form.md`; Action: edited; Details: added the five decisions requiring student review.
  - File: `HW05_Report.md`; Action: edited; Details: linked the Task 3 proposal while preserving `RUN_UNVERIFIED` status.
  - File: `README_HW05.md`; Action: edited; Details: recorded Task 3 as awaiting review.

- **Verification Evidence:** Commit `3eef521`; current proposal contains the required commit watcher, flow chart, p95 regression policy, and cost/false-alarm discussion.
- **Verdict:** INCOMPLETE
- **Reasoning:** The content met Task 3's design requirements, but the response correctly withheld human verification pending the student's policy decisions.
- **Student Fixes:** The student supplied the acceptance recorded in Artifact #8.

### Artifact #8 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-18 03:27:40 GMT+7
- **Agent Used:** Codex (primary agent); clear-writing skill
- **Prompt:**

````text
ACCEPT TASK3 3eef521;
PATH RULES OK;
TIERS OK;
P95 RULE OK;
STRESS SPIKE NONPROD ONLY
````

- **AI Output:**

````text
Task 3 đã hoàn tất và chuyển thành `HUMAN_VERIFIED`.

1. ✅ Proposal commit: `3eef521`
2. ✅ Student acceptance commit: `0ec4533`
3. ✅ Task 1, Task 2 và Task 3 hiện đã hoàn thành.
4. ⏳ Còn lại:
   - URL video Load/Stress/Spike/Soak.
   - Video demo Agent Skill.
   - AI Audit và Git commit log.
   - Kiểm tra, đóng gói submission.

Các file runtime và evidence cũ ngoài phạm vi vẫn được giữ nguyên, không đưa nhầm vào commit.

Bước tiếp theo: upload các clip lên YouTube ở chế độ **Unlisted**, rồi gửi anh các URL.
````

- **File Modifications:**
  - File: `docs/continuous-performance-pipeline.md`; Action: edited; Details: recorded the student's acceptance and `HUMAN_VERIFIED` state.
  - File: `manual/07-task3-review-form.md`; Action: edited; Details: recorded the accepted path, tier, p95, and non-production decisions.
  - File: `HW05_Report.md`; Action: edited; Details: changed Task 3 to human-verified while retaining its proposal scope.
  - File: `README_HW05.md`; Action: edited; Details: updated the progress summary.

- **Verification Evidence:** Commits `3eef521` and `0ec4533`; explicit student acceptance in the prompt; current proposal and review form.
- **Verdict:** VALID
- **Reasoning:** The response accurately records the human decision and does not claim that the proposed CI/CD workflow was implemented or executed.
- **Student Fixes:** None required.

### Artifact #9 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-18 03:32:51 GMT+7
- **Agent Used:** Codex (primary agent); eshop-jmeter-performance skill; skill-creator skill
- **Prompt:**

````text
BỔ SUNG SKILL và cho lại phần kịch bản hoàn chỉnh cần quay
````

- **AI Output:**

````text
Mở [kịch bản quay hoàn chỉnh](manual/11-agent-skill-demo-script-vi.md) và để cạnh cửa sổ OBS.

Skill đã được nâng cấp để tái sử dụng thật sự:

- Scenario B chuyển thành endpoint contract mặc định.
- Endpoint mới dùng JSON contract, không cần sửa validator.
- Bốn JMX hiện tại đều `PASS`.
- Raw Load JTL đọc được `7120 samples`.
- Commit: `baeedd1 feat(skill): support reusable endpoint contracts`

Skill Creator định hướng việc giữ `SKILL.md` ngắn gọn và tách cấu hình mở rộng vào `references/` cùng `assets/`.

## Kịch bản quay 2–3 phút

### 1. Giới thiệu — 20 giây

Hiển thị thư mục skill và nói:

> Đây là Agent Skill em xây dựng cho performance testing và log analysis bằng JMeter. Skill bao gồm workflow, validator, endpoint contract, evidence policy và các template human review. Scenario B là contract mặc định, nhưng validator cũng nhận contract khác để tái sử dụng cho endpoint group mới.

### 2. Chứng minh khả năng mở rộng — 25 giây

Mở [endpoint-contract-template.json](.agents/skills/eshop-jmeter-performance/assets/endpoint-contract-template.json).

Nói:

> Với endpoint group mới, em không cần sửa validator. Em chỉ khai báo thứ tự sampler, CSV fields, correlation, listener, filename pattern và các giá trị không được hardcode. Quy trình preflight, approval, CLI execution, JTL validation và bảo vệ evidence vẫn được tái sử dụng.

### 3. Gọi skill — 20 giây

Trong Codex, gõ `$`, chọn `eshop-jmeter-performance`, rồi gửi:

```text
Use $eshop-jmeter-performance to audit the accepted Load run
23127280_Load_Official_20260818_002.

Use a working Python 3 runtime and run the bundled validate_jmx.py on
performance/load/23127280_Load_20260815.jmx. Then run validate_jtl.py on
performance/results/23127280_Load_Official_20260818_002/23127280_Load_Official_20260818_002.jtl.

Confirm:
1. the nine Scenario B requests;
2. external CSV variables, correlations, assertions, and disabled GUI listener;
3. samples, errors, raw p95, throughput, and recorded evidence state;
4. how endpoint-contract-template.json adapts the workflow to another endpoint group;
5. which evidence-safety rules were enforced.

Do not execute JMeter, do not change the SUT, and do not modify any evidence.
```

Nói:

> Em yêu cầu skill chạy validator thật trên JMX và raw JTL đã có. Em cấm chạy JMeter hoặc sửa evidence nên demo này không tạo measured run mới.

### 4. Trình bày output — 60 giây

Chỉ vào kết quả và nói:

> JMX validator báo PASS theo Scenario B contract. Plan có đủ chín request từ login đến order history, sử dụng CSV bên ngoài, có các correlation cần thiết và listener bị disable khi chạy CLI.

> JTL validator đọc được 7.120 samples. Summary của run ghi nhận 0 errors, raw p95 9 mili giây và throughput 16,983 samples mỗi giây.

> Validator luôn bắt đầu với RUN_UNVERIFIED vì script không được tự cấp human verification. Run này chỉ trở thành HUMAN_VERIFIED sau khi em trực tiếp kiểm tra JTL, HTML report, Summary Report và resource evidence.

### 5. Kết luận — 25 giây

Mở [extension-guide.md](.agents/skills/eshop-jmeter-performance/references/extension-guide.md).

Nói:

> Khi áp dụng cho endpoint khác, em thay endpoint contract, CSV schema, correlation, assertion và business sequence. Các guardrail về preflight, approval, immutable JTL, manifest và human review không thay đổi. Vì vậy skill có thể tái sử dụng cho những performance-testing workflow khác mà vẫn giữ evidence có thể kiểm chứng.

Video Agent Skill không cần Task Manager; yêu cầu resource monitor cùng khung hình đã được đáp ứng trong các video performance test.

Bước tiếp theo: bật OBS, mở sẵn ba file được liên kết ở trên và bắt đầu quay cảnh 1.
````

- **File Modifications:**
  - File: `.agents/skills/eshop-jmeter-performance/SKILL.md`; Action: edited; Details: documented the reusable endpoint-contract workflow.
  - File: `.agents/skills/eshop-jmeter-performance/references/scenario-b-contract.json`; Action: created; Details: moved Scenario B validation rules into the default contract.
  - File: `.agents/skills/eshop-jmeter-performance/references/extension-guide.md`; Action: created; Details: documented adaptation to another endpoint group.
  - File: `.agents/skills/eshop-jmeter-performance/assets/endpoint-contract-template.json`; Action: created; Details: added a reusable contract template.
  - File: `.agents/skills/eshop-jmeter-performance/scripts/validate_jmx.py`; Action: edited; Details: added `--contract` support without weakening default Scenario B validation.
  - File: `manual/11-agent-skill-demo-script-vi.md`; Action: created; Details: added the complete 2–3 minute demonstration script.
  - File: `HW05_Report.md`; Action: edited; Details: documented the contract-driven skill extension.

- **Verification Evidence:** Commit `baeedd1`; four canonical JMX plans passed the default contract; a custom contract path was exercised; Load `_002` JTL validation returned 7,120 samples.
- **Verdict:** VALID
- **Reasoning:** The skill now separates endpoint-specific rules from reusable validation and evidence controls, directly addressing the requirement to reuse the workflow for additional endpoints.
- **Student Fixes:** None required.

### Artifact #10 - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** 2026-08-18 03:55:52 GMT+7
- **Agent Used:** Codex (primary agent); eshop-jmeter-performance skill; clear-writing skill
- **Prompt:**

````text
Đã xong quay demo Agent skill, cập nhật các url:
- Load: [https://youtu.be/SvDzvYLyzRQ](https://youtu.be/SvDzvYLyzRQ)
- Stress: [https://youtu.be/aem-M4Twah4](https://youtu.be/aem-M4Twah4)
- Spike: [https://youtu.be/q1NMVWSS-98](https://youtu.be/q1NMVWSS-98)
- Soak: [https://youtu.be/J4wv5SuVCFA](https://youtu.be/J4wv5SuVCFA)
- Agent Skill: [https://youtu.be/WmdhTCnFddQ](https://youtu.be/WmdhTCnFddQ)
````

- **AI Output:**

````text
✅ Đã cập nhật đủ 5 URL và commit thành công.

- Commit: `fbf26fd docs(evidence): record demo video links`
- Đã cập nhật [HW05_Report.md](HW05_Report.md)
- Đã cập nhật [README_HW05.md](README_HW05.md)
- Đã tạo bảng tổng hợp [video-evidence.md](docs/video-evidence.md)
- Đã cập nhật run-record và manifest của Load `_002`, Stress `_001`, Spike `_002`, Soak `_002`
- Checksum trong manifest đã được tính lại và xác nhận khớp
- Không sửa JTL, HTML hoặc raw evidence
- Các file database/reset ngoài phạm vi không được commit

Lưu ý: công cụ không mở được trang YouTube rút gọn, nên tài liệu ghi chính xác là “URL do sinh viên cung cấp”, chưa tự nhận đã kiểm tra nội dung.

Bước tiếp theo duy nhất: mở cả 5 link bằng cửa sổ ẩn danh, kiểm tra xem được, có tiếng, đúng video và đáp ứng yêu cầu thời lượng. Sau đó mình làm AI Audit + kiểm tra package cuối.
````

- **File Modifications:**
  - File: `docs/video-evidence.md`; Action: created; Details: mapped five student-provided URLs to accepted runs and the Agent Skill.
  - File: `HW05_Report.md`; Action: edited; Details: added the video-evidence table and final playback limitation.
  - File: `README_HW05.md`; Action: edited; Details: added the five demo links.
  - File: `manual/00-decisions-and-approvals.md`; Action: edited; Details: associated each URL with the accepted run.
  - File: `manual/09-submission-checklist.md`; Action: edited; Details: marked the link-listing and skill-video items complete while preserving the playback gate.
  - File: `performance/results/23127280_Load_Official_20260818_002/run-record.md`; Action: edited; Details: recorded the Load URL.
  - File: `performance/results/23127280_Stress_Official_20260818_001/run-record.md`; Action: edited; Details: recorded the Stress URL.
  - File: `performance/results/23127280_Spike_Official_20260818_002/run-record.md`; Action: edited; Details: recorded the corrected Spike URL.
  - File: `performance/results/23127280_Soak_Official_20260818_002/run-record.md`; Action: edited; Details: recorded the Soak URL.
  - File: `performance/results/23127280_Load_Official_20260818_002/manifest.json`; Action: edited; Details: added the URL and refreshed the run-record hash.
  - File: `performance/results/23127280_Stress_Official_20260818_001/manifest.json`; Action: edited; Details: added the URL and refreshed the run-record hash.
  - File: `performance/results/23127280_Spike_Official_20260818_002/manifest.json`; Action: edited; Details: added the URL and refreshed the run-record hash.
  - File: `performance/results/23127280_Soak_Official_20260818_002/manifest.json`; Action: edited; Details: added the URL and refreshed the run-record hash.

- **Verification Evidence:** Commit `fbf26fd`; four manifests parse and their updated run-record hashes match. URL playback could not be independently verified by the web tool.
- **Verdict:** VALID
- **Reasoning:** The response records only student-provided links, maps them to accepted runs, updates dependent checksums, and leaves final playback and privacy checks to the student.
- **Student Fixes:** Open all five links in an incognito window and verify access, privacy, audio, and duration before submission.

<!-- ARTIFACT_DETAILS_END -->

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 10 | 100% |
| **VALID (correct, accepted as-is)** | 7 | 70.00% |
| **INVALID (wrong; rejected)** | 1 | 10.00% |
| **INCOMPLETE (acceptable after edits)** | 2 | 20.00% |

## **5. Conclusion - When should AI be used (or not)?**

AI was effective for generating guarded JMeter plans, validating endpoint contracts, checking immutable evidence, analysing raw JTL files, and turning reviewed findings into a continuous-testing proposal. It also made consequential mistakes: it failed to distinguish CSV JTL results from JMX/XML plans, matched a Stress count difference to the wrong label, and initially copied a Spike dashboard percentile without naming the sample population. AI should generate structure, hypotheses, and repeatable checks. The student must decide workload limits, inspect raw and rendered evidence, correct metric scope, approve recommendations, record narration, and control publication and submission.

## **6. Mandatory Disclosure (paste verbatim)**

I used OpenAI Codex to design and revise the HW05 JMeter plans, data fixtures, guarded runners, evidence manifests, raw-JTL analysis, AI Critique, continuous performance-testing proposal, reusable Agent Skill, runbooks, and submission documentation. I personally ran and recorded the performance tests, supplied the raw JTL and HTML reports, captured hardware and resource evidence, reviewed metric corrections and optimization recommendations, accepted the final Task 2 and Task 3 decisions, narrated the videos, and supplied their URLs. Codex did not generate the execution evidence, recordings, human approvals, upload state, or Moodle submission.

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

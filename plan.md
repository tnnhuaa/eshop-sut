# Kế hoạch hoàn thành HW04 Automation Testing

## 1. Annotation 1 — Quyết định đã khóa

- Đặt Agent Skill tại `.agents/skills/eshop-playwright-automation/` trong repository.
- Hai video dùng terminal chạy `whoami` và `hostname`; không dùng face-cam.
- Chỉ tạo GitHub Issue sau khi sinh viên xác nhận defect thật.
- Giữ SUT ở root trên nhánh `hw4-tanh`.
- Report viết bằng tiếng Anh; runbook và lời thoại video viết bằng tiếng Việt.
- Làm hai video riêng: Task 2 và Agent Skill.
- Không sửa hành vi SUT để làm test pass; automation phải phản ánh lỗi thật.
- Bỏ lịch phân bổ commit khỏi tiến trình kỹ thuật; sinh viên tự quản lý phần đó.

Mục tiêu hoàn thành: ít nhất 36 test automation, 9 browser run/report, Agent Skill hợp lệ, hai video có kịch bản sẵn, report/audit/PDF và evidence đầy đủ.

## 2. Kiến trúc và phân công agent

### Giai đoạn A — Agent chính dựng nền tảng

Agent chính sở hữu toàn bộ file dùng chung:

- Root Playwright project, TypeScript, `.env.example`, reporter và npm scripts.
- Fixture đăng nhập user/admin, database preparation, data loader và report metadata.
- `AGENTS.md` quy định CodeGraph-first, file ownership, evidence thật và cấm tự xác nhận bug.
- Thêm `.codegraph/`, secrets và runtime artifacts phù hợp vào `.gitignore`; giữ nguyên index hiện có trên máy.
- Tạo prompt giao việc độc lập cho ba feature agent; mỗi agent nhận context tối thiểu để tiết kiệm token.

Các interface cố định:

```text
STUDENT_ID=23127280
USER_EMAIL=test@eshop.com
USER_PASSWORD=Test1234!
ADMIN_EMAIL=admin@eshop.com
ADMIN_PASSWORD=Admin123!
FEATURE_ID=FR06|FR10|FR15
BROWSER=chromium|firefox|edge
RUN_TIMESTAMP=<ISO-8601>
REPORT_DIR=artifacts/html-reports/<feature>/<browser>/<timestamp>
```

Mỗi JSON scenario dùng schema:

```text
id, title, preconditions, setup, input, expected, assertionTypes
```

Các lệnh public:

```text
npm run test:fr06 -- --project=chromium
npm run test:fr10 -- --project=firefox
npm run test:fr15 -- --project=edge
npm run test:matrix
npm run demo:task2
npm run demo:skill
npm run report:open -- --feature=<id> --browser=<name>
```

`test:matrix` chạy tuần tự 3 feature × 3 browser. Mỗi invocation tạo một HTML report riêng với title:

```text
Run by: 23127280 | <FEATURE> | <BROWSER> | <ISO timestamp>
```

Chuẩn bị browser một lần trước khi chạy automation:

```text
npm install
npx playwright install chromium firefox msedge
```

Project `edge` trong `playwright.config.ts` dùng Chromium engine với `channel: "msedge"`. Bước cài browser phải hoàn tất trước `test:matrix`; không tải browser trong từng test run.

Suite mutate database chạy `workers: 1`. Trước mỗi browser run, script preparation xóa dữ liệu theo prefix và seed lại scenario xác định; không reset database giữa các bước của cùng test.

### Giai đoạn B — Ba sub-agent song song

| Agent | File được phép sửa | Nhiệm vụ |
|---|---|---|
| `fr06_product_detail_agent` | `tests/fr06/`, `test-data/fr06/` | Product detail, quantity, cart và feedback |
| `fr10_state_machine_agent` | `tests/fr10/`, `test-data/fr10/` | User/admin order state, seed và cross-UI assertions |
| `fr15_product_crud_agent` | `tests/fr15/`, `test-data/fr15/` | Product CRUD, validation, cleanup và update isolation |

Không sub-agent nào được sửa config, package, shared fixture, report hoặc file của agent khác. Agent chính review và tích hợp sau khi cả ba hoàn tất.

### Giai đoạn C — Agent Skill

Tạo skill bằng `skill-creator` với cấu trúc:

```text
.agents/skills/eshop-playwright-automation/
├── SKILL.md
├── agents/openai.yaml
├── scripts/
├── references/
└── assets/
```

Skill thực hiện workflow: đọc feature/test basis → kiểm tra requirement gap → tạo data file → tạo Page Object/spec → chạy browser được chọn → phân loại test/environment/product failure → tạo human-review draft → xuất manifest/report path.

Guardrails:

- Không hardcode test data trong spec.
- Không dùng `waitForTimeout` nếu có web-first wait.
- Không tuyên bố defect trước khi reproduce.
- Không tạo video, report, screenshot hoặc identity evidence giả.
- Không đánh dấu human review thay sinh viên.

Validate bằng `quick_validate.py`, sau đó gọi một `skill_forward_test_agent` với context sạch và output riêng trong `skill-demo/output/`. Nếu skill mới chưa xuất hiện trong Codex, runbook yêu cầu mở task mới tại repo để Codex nạp `.agents/skills`.

## 3. Test plan quyết định sẵn

### FR06 — 12 test

```text
FR06-DT-001, DT-002, DT-003, DT-006, DT-008, DT-010,
DT-012, DT-013, DT-015, BVA-001, BVA-004, BVA-005
```

Bao phủ hiển thị sản phẩm, not-found, click đầu, duplicate cart row, empty/scientific quantity, XSS text, feedback, zero/negative/decimal boundaries.

### FR10 — 12 test

```text
FR10-DT-001, DT-002, DT-003, DT-004, DT-005, DT-006,
DT-011, DT-012, DT-016, DT-017, DT-021, DT-022
```

Bao phủ ba transition hợp lệ, user cancel, shipping cancellation, hai final state, unauthenticated/non-admin và đồng bộ trạng thái giữa user/admin UI.

### FR15 — 12 test

```text
FR15-DT-001, DT-002, DT-005, DT-007, DT-008, DT-012,
DT-013, DT-016, DT-021, DT-024, DT-025, BVA-006
```

Bao phủ product list, create, script-looking name, empty/whitespace name, update, isolation, delete, unauthorized access, cancel edit, missing price và tên dài 256 ký tự.

Mỗi feature phải có tối thiểu:

- Assertion hiển thị/nội dung: `toBeVisible`, `toHaveText`.
- Assertion trạng thái/dữ liệu: `toHaveValue`, `toHaveCount`, `expect.poll`.
- Negative assertion: `not.toBeVisible`, trạng thái không thay đổi hoặc row không tồn tại.
- Screenshot, trace và video Playwright khi fail.
- Test title chứa TestCaseID để trace về HW02.

Acceptance:

- 36 test được phát hiện trên cả ba browser.
- 9 HTML report độc lập chứa Student ID và ISO timestamp.
- Failure thật được giữ nguyên trong report; không sửa expected result theo implementation lỗi.
- Flaky/environment failure phải được tách khỏi product defect.

## 4. Tài liệu và phần sinh viên làm thủ công

Agent chuẩn bị sẵn năm tài liệu tiếng Việt:

1. `01-human-review-runbook-vi.md`
2. `02-task2-video-script-vi.md`
3. `03-agent-skill-video-script-vi.md`
4. `04-bug-confirmation-runbook-vi.md`
5. `05-submission-checklist-vi.md`

### Human review — khoảng 20–30 phút

Agent tạo bảng cho từng feature gồm raw AI choice, vấn đề, correction đề xuất và evidence. Sinh viên thực hiện:

1. Mở spec và data file được chỉ rõ.
2. Kiểm tra selector, wait, assertion, expected result và cleanup.
3. Chọn `Accepted`, `Modified`, `Rejected` hoặc `Manually Added`.
4. Viết một câu lý do cho mỗi correction quan trọng.
5. Ký xác nhận cuối bảng.

Agent chuyển kết quả đã ký thành phần Human Review/AI Gap Analysis tiếng Anh. Agent không tự điền quyết định thay sinh viên.

### Xác nhận bug — khoảng 3–5 phút/bug

1. Agent cung cấp TestCaseID, command reproduce, expected, actual, screenshot và report path.
2. Sinh viên chạy command copy-paste trong runbook.
3. Sinh viên trả lời `CONFIRM <BugID>` hoặc `REJECT <BugID>: <reason>`.
4. Chỉ sau `CONFIRM`, agent tạo GitHub Issue.
5. Agent chuẩn bị title/body/labels; sinh viên kiểm tra trang issue và lưu screenshot theo đường dẫn runbook.

Nếu GitHub CLI không đăng nhập, agent tạo sẵn issue-body; runbook hướng dẫn copy lên GitHub và đặt tên screenshot.

### Task 2 video — khoảng 6–7 phút, dùng FR06

Kịch bản được điền bằng kết quả thật trước khi quay:

```text
00:00  Chạy whoami và hostname
00:20  Giới thiệu Student ID, FR06 và ba browser
00:45  Mở JSON data và spec, chỉ ra data-driven mapping
01:30  Giải thích một correction thật từ human review
02:15  Chạy npm run demo:task2
04:30  Mở Chromium/Firefox/Edge report
05:15  Zoom title Run by: 23127280 + ISO timestamp
05:40  Giải thích pass/fail và defect thật nếu có
06:20  Kết luận
```

Agent chuẩn bị file lệnh copy-paste, lời thoại tiếng Việt và checklist OBS. Sinh viên chỉ cần quay, đọc theo kịch bản, upload unlisted và dán URL vào README/report.

### Agent Skill video — quay riêng

```text
00:00  whoami và hostname
00:20  Mở .agents/skills/eshop-playwright-automation/SKILL.md
00:50  Mở task Codex mới trong repo
01:10  Dán prompt đã chuẩn bị để gọi $eshop-playwright-automation
02:00  Cho skill xử lý input bundle FR06 trong skill-demo/
03:30  Kiểm tra generated manifest/data/spec
04:15  Chạy npm run demo:skill
05:15  Mở HTML report và review artifact
05:50  Nêu giới hạn: human review và defect confirmation
```

Agent chuẩn bị input bundle, prompt chính xác, expected manifest, command và narration. Sinh viên thực hiện thao tác Codex/terminal, quay màn hình và upload video unlisted.

### Submission thủ công — khoảng 15–25 phút

Sinh viên chỉ còn:

- Điền self-assessed grade.
- Kiểm tra và ký AI disclosure/audit.
- Upload hai video và điền URL.
- Kiểm tra GitHub repository/Issues ở trạng thái public.
- Tạo ZIP đúng tên và upload Moodle.

## 5. Báo cáo, audit và nghiệm thu

Agent tạo tài liệu tiếng Anh:

- Main Report Markdown + PDF.
- README với self-assessment và test summary.
- AI Critique 200–300 từ.
- Bug Report và GitHub Issue mapping.
- TestCaseID → spec → browser → report traceability.
- Git commit log text.
- Hai video-link sections.
- Final packaging manifest.

`AI_Audit.md` hiện có được giữ làm nguồn sự thật. Sau mỗi workstream hoàn tất, dùng `.codex/skills/ai-export-audit` để:

- Ghi exact prompt/output và agent/sub-agent tham gia.
- Ghi file modifications và verification evidence.
- Đánh giá VALID/INCOMPLETE/INVALID.
- Re-evaluate artifact cũ khi có correction.
- Cập nhật accuracy summary, conclusion và disclosure.
- Xuất bản Markdown/PDF cuối mà không làm lệch bản nguồn.

Nghiệm thu cuối:

- Build/lint Playwright project thành công.
- 36 test chạy trên ba browser.
- Có đúng 9 report folder và metadata bắt buộc.
- Tất cả failure được phân loại test/data/environment/defect.
- Agent Skill hợp lệ và forward-test thành công.
- Hai runbook video không còn placeholder.
- Mọi số liệu trong README, report, audit và Git log khớp artifact thật.
- ZIP mang dạng `23127280_HW04_AI_Automation_<grade>.zip`.
- Không chứa `node_modules`, mobile artifacts, secrets, database runtime hoặc evidence HW02 được trình bày như evidence HW04.

Ước lượng: 5–8 giờ agent/compute, trong đó ba feature chạy song song; phần sinh viên trực tiếp khoảng 60–90 phút cộng thời gian upload video.

## 6. Checklist tổng

### Nền tảng dùng chung

- [x] Khởi tạo Playwright + TypeScript tại root và cài đủ Chromium, Firefox, Microsoft Edge.
- [x] Tạo `.env.example`, fixture user/admin, data loader và database preparation.
- [x] Cấu hình report riêng theo feature/browser với Student ID và ISO timestamp.
- [x] Tạo đủ npm scripts công khai, gồm `test:matrix`, `demo:task2` và `demo:skill`.
- [x] Cập nhật `AGENTS.md` và `.gitignore` theo guardrail đã khóa.

### Ba feature automation

- [x] FR06 có đúng 12 test data-driven và đã được agent chính review.
- [x] FR10 có đúng 12 test data-driven và đã được agent chính review.
- [x] FR15 có đúng 12 test data-driven và đã được agent chính review.
- [x] Mỗi feature sử dụng ít nhất 3 assertion pattern và không có test data hardcode trong spec.
- [x] Toàn bộ 36 test được phát hiện và chạy trên 3 browser.

### Evidence và defect

- [x] Tạo đủ 9 HTML report độc lập, mỗi report có `Run by: 23127280` và ISO timestamp.
- [x] Screenshot, trace và video Playwright được giữ cho các test fail.
- [x] Mọi failure đã được phân loại: test, data, environment hoặc product defect.
- [ ] Sinh viên đã chạy lại từng defect candidate và trả lời `CONFIRM` hoặc `REJECT`.
- [ ] Chỉ defect đã xác nhận mới có GitHub Issue và screenshot issue tương ứng.

### Agent Skill và phần thủ công

- [x] Tạo `.agents/skills/eshop-playwright-automation/` đúng cấu trúc và validate thành công.
- [x] Forward-test skill bằng context sạch và lưu output trong `skill-demo/output/`.
- [ ] Sinh viên hoàn thành và ký human-review table cho cả ba feature.
- [ ] Quay, upload unlisted và lưu URL video Task 2.
- [ ] Quay, upload unlisted và lưu URL video Agent Skill.

### Báo cáo và nộp bài

- [ ] Hoàn tất Main Report, README/test summary, AI Critique 200–300 từ và Bug Report.
- [ ] Cập nhật `AI_Audit.md`, disclosure, traceability và `git_commit_log.txt` theo evidence thật.
- [ ] Xuất đầy đủ Markdown + PDF và kiểm tra các link video/repository/issue.
- [ ] Điền self-assessed grade, kiểm tra repository public và đối chiếu toàn bộ số liệu.
- [ ] Đóng gói `23127280_HW04_AI_Automation_<grade>.zip`, loại runtime/secrets/evidence HW02, rồi upload Moodle.

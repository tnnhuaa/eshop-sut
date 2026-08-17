# Kịch bản demo Agent Skill — 2 đến 3 phút

## Chuẩn bị trước khi quay

Mở sẵn:

- Codex tại repository HW05;
- `.agents/skills/eshop-jmeter-performance/SKILL.md`;
- `assets/endpoint-contract-template.json`;
- OBS với màn hình và microphone.

Không cần bật backend hoặc chạy JMeter. Demo này kiểm tra plan và evidence đã có; nó không tạo measured run mới.

## Cảnh 1 — Giới thiệu skill, 20 giây

Hiển thị thư mục `.agents/skills/eshop-jmeter-performance/` và nói:

> Đây là Agent Skill em xây dựng cho quy trình performance testing và log analysis bằng JMeter. Skill có workflow, validator, endpoint contract, evidence policy và các template phục vụ human review. Scenario B là contract mặc định, nhưng validator cũng nhận contract khác để tái sử dụng cho endpoint group mới.

## Cảnh 2 — Chứng minh khả năng mở rộng, 25 giây

Mở `assets/endpoint-contract-template.json` và nói:

> Với endpoint group mới, em không sửa validator. Em khai báo filename pattern, thứ tự sampler, CSV fields, correlation, listener và các giá trị không được hardcode trong contract này. Phần preflight, approval, CLI execution, JTL validation và bảo vệ evidence được tái sử dụng nguyên vẹn.

## Cảnh 3 — Gọi skill, 20 giây

Trong Codex, gõ `$`, chọn `eshop-jmeter-performance`, rồi gửi prompt:

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

> Em yêu cầu skill chạy validator thật trên JMX và raw JTL đã có. Em cấm chạy JMeter hoặc sửa evidence để demo không tạo thêm measured run.

## Cảnh 4 — Trình bày kết quả, 60 giây

Khi Codex trả kết quả, chỉ vào output và nói:

> JMX validator báo PASS theo Scenario B contract. Plan có đủ chín request từ login đến order history, đọc dữ liệu từ CSV, có các correlation cần thiết và giữ GUI listener ở trạng thái disabled trong CLI run.

> JTL validator đọc được 7.120 samples. Kết quả đã được tổng hợp trước đó là 0 errors, raw p95 9 mili giây và throughput 16,983 samples mỗi giây.

> Validator luôn bắt đầu ở RUN_UNVERIFIED vì script không được tự cấp human verification. Run này chỉ có trạng thái HUMAN_VERIFIED trong evidence record vì em đã trực tiếp kiểm tra JTL, HTML report, Summary Report và resource evidence trước đó.

## Cảnh 5 — Kết luận, 25 giây

Mở `references/extension-guide.md` và nói:

> Khi áp dụng cho endpoint khác, em thay endpoint contract, CSV schema, correlation, assertion và business sequence. Các guardrail về preflight, approval, immutable JTL, manifest và human review không thay đổi. Vì vậy skill tái sử dụng được cho performance-testing và log-analysis workflow khác mà vẫn giữ evidence có thể kiểm chứng.

## Checklist trước khi dừng quay

- Tên skill xuất hiện trên màn hình.
- Prompt có `$eshop-jmeter-performance`.
- Có output `PASS` của JMX validator.
- Có output JTL `7120 samples`.
- Có các số `0 errors`, `p95 9 ms`, `16.983 samples/s`.
- Có endpoint-contract template và giải thích reuse.
- Có giải thích `RUN_UNVERIFIED` khác `HUMAN_VERIFIED`.

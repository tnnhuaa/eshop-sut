# Human Review Record — HW04

## 1. Trạng thái kỹ thuật đã được agent kiểm tra

| Hạng mục             | Kết quả thật                                                  |
| -------------------- | ------------------------------------------------------------- |
| Scenario             | FR06: 12; FR10: 12; FR15: 12                                  |
| Assertion types      | FR06: 8; FR10: 6; FR15: 4                                     |
| Playwright discovery | 108 test-browser combinations                                 |
| Browser              | Chromium, Firefox, Microsoft Edge                             |
| Report cuối          | 9 report mới, đều có `Run by: 23127280` và ISO timestamp      |
| Kết quả mỗi browser  | FR06: 3 pass/9 fail; FR10: 7 pass/5 fail; FR15: 7 pass/5 fail |

## 2. Files reviewed

| Feature | Spec                                    | Dữ liệu                                                               |
| ------- | --------------------------------------- | --------------------------------------------------------------------- |
| FR06    | `tests/fr06/product-detail.spec.ts`     | `test-data/fr06/product-detail-scenarios.json`                        |
| FR10    | `tests/fr10/fr10-state-machine.spec.ts` | `test-data/fr10/state-machine-scenarios.json`                         |
| FR15    | `tests/fr15/product-crud-admin.spec.ts` | `test-data/fr15/product-crud-scenarios.json` và `fixture-config.json` |

## 3. Các correction quan trọng đã review

| ID    | AI ban đầu làm gì chưa tốt                                   | Correction hiện tại                                                     | Vì sao AI bỏ sót                                             | Quyết định của sinh viên | Lý do của sinh viên                                                                                                                                                                                                        |
| ----- | ------------------------------------------------------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HR-01 | Dùng selector nội dung XSS quá rộng                          | Scope description trong `main`, kiểm tra không có `script` và dialog    | AI thiếu context DOM cụ thể                                  | `Accepted`               | `The original selector could match multiple occurrences of the same script-looking text. The corrected selector scopes the assertion to the product description and verifies that no script element or dialog is created.` |
| HR-02 | Cart selector có thể bắt nhầm nhiều phần tử                  | Scope theo row và cell có tên sản phẩm exact                            | Tên sản phẩm xuất hiện ở nhiều vùng UI                       | `Accepted`               | `The product name appears in multiple UI areas. Scoping the locator to a table row containing an exact product-name cell avoids ambiguous matches and verifies the correct cart line.`                                     |
| HR-03 | Tên sản phẩm còn hardcode trong FR06 spec                    | Chuyển tên/expected sang JSON                                           | Prompt đầu tập trung luồng, chưa kiểm tra nghiêm data-driven | `Accepted`               | `The product name is test data and should not be embedded in the spec. Reading it from the external JSON keeps the test fully data-driven and easier to reuse.`                                                            |
| HR-04 | FR10 chia case bằng các mảng TestCaseID và action map inline | Dùng một vòng lặp, dispatch theo `workflow` và `actionLabel` trong JSON | Model dùng grouping code thuận tiện nhưng rủi ro với rubric  | `Accepted`               | `Inline TestCaseID arrays and action mappings could be interpreted as hardcoded test data. Moving workflow and action labels to JSON makes scenario selection and execution consistently data-driven.`                     |
| HR-05 | Kiểm tra trạng thái order có thể đọc quá sớm                 | Dùng `expect.poll` với API state                                        | UI và API cập nhật không đồng thời                           | `Accepted`               | `The UI action and backend state update may not complete at the same time. Using expect.poll verifies the eventual API state without introducing a fixed or flaky delay.`                                                  |
| HR-06 | FR15 dùng selector/update flow dễ race sau reload            | Mở lại Products tab, scope exact row và kiểm tra API count              | UI admin mất tab state sau reload                            | `Accepted`               | `Reloading the admin page resets the selected tab, and broad update selectors may target the wrong row. Reopening the Products tab and using an exact row locator makes the update flow deterministic.`                    |
| HR-07 | URL, credential và fixture FR15 nằm trong spec               | URL/credential lấy từ `environment`; fixture lấy từ JSON                | AI coi config là hằng số kỹ thuật thay vì dữ liệu cần tách   | `Accepted`               | `URLs, credentials, and fixture values should not be repeated inside the spec. Environment configuration and external fixture JSON improve portability and reduce hardcoded data.`                                         |
| HR-08 | Cleanup có thể làm dữ liệu case sau bị nhiễu                 | Cleanup theo toàn bộ tên do scenario quản lý, `workers: 1`              | CRUD dùng chung database giữa các test                       | `Accepted`               | `FR15 tests share a mutable database. Cleaning only names managed by the scenarios and running with one worker prevents cross-test contamination without deleting unrelated products.`                                     |

## 4. Checklist review từng feature

- [x] Test title chứa TestCaseID và đúng test case HW02.
- [x] Input và expected trong JSON đúng yêu cầu, không sửa theo hành vi lỗi của SUT.
- [x] Selector đủ rõ; không dựa vào cấu trúc CSS mong manh.
- [x] Không có `waitForTimeout`; assertion có kiểm tra kết quả thật.
- [x] Cleanup không xóa dữ liệu ngoài phạm vi scenario.

## 5. Xác nhận của sinh viên

Tôi đã review các automation script, dữ liệu và correction được liệt kê phía trên. Tôi chịu trách nhiệm cho phiên bản cuối cùng và sẽ phân loại defect candidate riêng trong `04-bug-confirmation-runbook-vi.md`.

- Họ tên: Nguyễn Hiền Tuấn Anh
- MSSV: 23127280
- Ngày review: 10/08/2026
- Chữ ký/xác nhận: Anh

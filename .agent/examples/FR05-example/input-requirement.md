# FR-05-M Skill Input Requirement

## Feature ID

FR-05-M

## Feature Name

Product Listing and Search on Mobile

## Platform

React Native Mobile

## Actor

Guest mobile user

## Requirement Text

FR-05: Xem danh sách & Tìm kiếm sản phẩm.

- Trang chủ hiển thị danh sách tất cả sản phẩm dạng lưới (grid).
- Mỗi sản phẩm hiển thị: Ảnh (tỷ lệ chuẩn, có alt text mô tả), Tên sản phẩm, Giá (đơn vị: ₫, định dạng phân cách hàng nghìn).
- Thanh tìm kiếm tìm theo tên sản phẩm.
- Từ khóa tìm kiếm phải được hiển thị an toàn (không render HTML).
- Khi đang tải dữ liệu phải hiển thị trạng thái loading.
- Khi không có kết quả tìm kiếm phải hiển thị thông báo empty state phù hợp.
- Trang chủ chỉ có đúng một thẻ `<h1>`.
- Mỗi trang chỉ có 1 `<h1>` duy nhất.

## Known Constraints

- This homework selected the mobile version of FR-05, recorded as FR-05-M.
- Functional execution should be on React Native Mobile using a real device or emulator.
- Browser execution is not representative for FR-05-M.
- Literal HTML concepts such as `grid`, `alt`, and `<h1>` need mobile-equivalent review.

## Expected Output

- Requirement analysis review.
- Domain model.
- Boundary Value Analysis.
- Draft test cases.
- Seed data plan.
- Raw output, human review, and final output according to the repository-local skill workflow.

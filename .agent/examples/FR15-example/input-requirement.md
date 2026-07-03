# FR-15 Skill Input Requirement

## Feature

- Feature ID: FR-15
- Feature name: Product CRUD Admin
- Platform: Admin Web + API context
- Actor: Admin

## Requirement Text

FR-15: Quản lý Sản phẩm (Product CRUD)

Admin có thể:

- Thêm sản phẩm.
- Xem sản phẩm.
- Sửa sản phẩm.
- Xóa sản phẩm.

Ràng buộc đầu vào:

- Tên sản phẩm: bắt buộc, tối đa 255 ký tự.
- Giá: bắt buộc, phải là số dương (`> 0`).
- Danh mục: bắt buộc, phải chọn từ danh sách có sẵn.
- Khi sửa một sản phẩm, chỉ sản phẩm đó bị thay đổi; các sản phẩm khác giữ nguyên.

## Supporting Requirements

- FR-12 Access Control: data-changing product operations require Admin authorization.
- FR-14 Category CRUD: categories provide the available category list.
- FR-21/FR-22 GUI requirements: validation feedback and UI consistency should be visible.

## Known Gaps / Assumptions

- Exact validation message text is not specified.
- The requirement does not say whether validation must occur on frontend, backend, or both.
- `description` and `imageUrl` may exist in the form/API, but FR-15 does not define them as required.
- Product name uniqueness is not specified.
- Price upper bound is not specified.
- Behavior for non-existing product update/delete is not specified.
- Behavior for stale/deleted category references is not specified.

## Expected Output

Use `.agent/SKILL.md` and `.agent/templates/` to produce:

- Requirement/domain analysis for FR-15.
- Equivalence partitions for CRUD, name, price, category, product ID, actor/session, optional fields, and update isolation.
- Boundary Value Analysis for name length and positive price.
- Test cases with execution fields left as `TODO` / `Not Run`.
- Raw output, human review, and final output.

# FR-14 Category Management CRUD - Requirement Analysis

## Requirement Source

- Requirement ID: FR-14.
- Feature name: Quản lý Danh mục (Category CRUD).
- Platform: Admin Web + API.
- Primary test basis: `README.md` - FR-14 Category Management.
- Supporting test basis: `api_specification.md` - Categories endpoints; FR-12 Access Control.

## Requirement Summary

| Requirement Item | Expected Behavior From Specification | Testable? | Notes |
| --- | --- | --- | --- |
| Add category | Admin can add a category | Yes | Requires valid and invalid name classes. |
| View categories | Admin can view the category list | Yes | Verify existing and newly created categories are visible. |
| Delete category | Admin can delete a category | Yes | Need existing target category and list refresh observation. |
| Category name required | Empty category name is rejected | Yes | Exact error wording is not specified. |
| Category name not blank | Name must not be empty | Partly | Whitespace-only is treated as an assumption, not an explicit wording. |
| Update category | API lists update, but README FR-14 bullets do not | Partly | Tracked as a requirement gap, not mandatory final coverage. |

## Actors and Preconditions

| Actor/Condition | Requirement Interpretation |
| --- | --- |
| Admin | Can add, view, and delete categories. |
| Non-admin user | Should not perform Admin category-changing actions by FR-12. |
| Unauthenticated user | Should not access Admin category-changing actions by FR-12. |
| Existing category | Required for positive delete tests. |
| Disposable category | Needed so delete tests do not damage shared product test data. |
| Category referenced by product | Dependency behavior is not specified; use only as integration-risk test. |

## Outputs / Observations

| Output ID | Output / Observation | Expected Behavior |
| --- | --- | --- |
| OUT-01 | Category list | Existing categories are displayed to Admin. |
| OUT-02 | Create result | Valid category is created and visible in the list. |
| OUT-03 | Validation result | Empty or invalid name is rejected and no category is created. |
| OUT-04 | Delete result | Selected disposable category is removed from the list. |
| OUT-05 | Authorization result | Non-admin or unauthenticated category writes are rejected. |

## Business Rules

| Rule ID | Rule | Source / Assumption |
| --- | --- | --- |
| FR14-BR-01 | Admin can add categories. | FR-14 |
| FR14-BR-02 | Admin can view categories. | FR-14 |
| FR14-BR-03 | Admin can delete categories. | FR-14 |
| FR14-BR-04 | Category name is required and cannot be empty. | FR-14 |
| FR14-BR-05 | Whitespace-only name should be rejected after trim. | Assumption; tracked as FR14-GAP-03 |
| FR14-BR-06 | Category-changing actions require Admin authorization. | FR-12 supporting requirement |

## Requirement Gap Table

| Gap ID | Missing / Ambiguous Requirement | Why It Matters For Testing | Temporary Assumption For Test Design | Verification / Follow-up |
| --- | --- | --- | --- | --- |
| FR14-GAP-01 | Feature name says CRUD and API lists `PUT /api/categories/:id`, but FR-14 bullets only say Add / View / Delete. | Test scope may incorrectly include or exclude update. | Do not treat update as mandatory FR-14 coverage; record it as clarification. | Ask whether "Sửa danh mục" is required. |
| FR14-GAP-02 | Requirement does not specify whether validation must happen on frontend, backend, or both. | UI may block invalid input while API still accepts bad data. | Backend must protect data integrity; UI-only blocking is not enough for API tests. | Test UI and API if execution scope allows. |
| FR14-GAP-03 | Whitespace-only category name is not explicitly defined. | Spaces are technically non-empty but not meaningful category names. | Trimmed empty names should be rejected. | Test name containing only spaces. |
| FR14-GAP-04 | No maximum category-name length is specified. | Cannot create official upper-bound BVA. | Very long names are robustness tests only. | Do not fail solely due to missing max unless app crashes/corrupts data. |
| FR14-GAP-05 | Category-name uniqueness is not specified. | Duplicate category names may be allowed or confusing. | Duplicate names are exploratory; data must remain consistent. | Test duplicate name only as domain/UX observation. |
| FR14-GAP-06 | Delete behavior for categories referenced by products is not specified. | Deleting a referenced category may orphan products or be blocked. | Prefer preserving product data; treat as integration risk, not strict bug oracle. | Test only with controlled data if safe. |
| FR14-GAP-07 | Exact validation/error message text is not specified. | Exact assertion may be brittle. | Require clear feedback or unchanged data, not exact wording. | Capture actual text during execution. |
| FR14-GAP-08 | Non-existing or already-deleted category delete behavior is not specified. | Negative delete cases need an oracle. | Request is rejected or no-ops safely; list remains valid. | Test via API if UI cannot target missing IDs. |

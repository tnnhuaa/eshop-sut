# Assumptions and Requirement Gaps

## Current Assumptions

- The repository `README.md` is treated as the primary SRS oracle unless contradicted by the HW02 assignment brief.
- `api_specification.md` and source code are used as implementation context, not as the requirement oracle when they conflict with the SRS.
- Pool D uses requirement ID FR-05-M: FR-05 Product Listing and Search tested through the Mobile application.
- FR-14 Category Management CRUD is used only for Agent Skill demonstration and is not counted as one of the four assessed features.
- ISTQB CTFL v4.0.1 is used to justify traceability from test basis to test design and to separate expected behavior from observed behavior.

## How To Use This File

This file records requirement gaps and assumptions discovered during Day 2. A gap is not automatically a bug. It becomes:

- a **test design assumption** when the requirement is missing but a reasonable expected behavior is needed;
- a **clarification question** when two sources conflict;
- a **bug candidate** only after execution proves actual behavior violates the SRS or a documented assumption.

## Cross-Cutting Gaps To Verify

| ID | Feature | Gap | Source | Risk | Verification Plan | Result |
| --- | --- | --- | --- | --- | --- | --- |
| GAP-01 | Setup/Auth | Admin default password differs between README and setup guide. | `README.md`, `setup_guide.md` | Login evidence may use wrong credential source. | Try both `Admin123!` and `admin123` after database reset. | TODO |
| GAP-02 | All features | Exact error message wording is rarely specified. | SRS | Tests may become too brittle if exact text is asserted. | Assert clear field/state-specific error rather than exact wording unless specified. | Open |
| GAP-03 | All write APIs | Validation location is unclear: frontend only, backend only, or both. | SRS + API spec | UI may reject invalid input while API accepts it. | Include direct API checks for high-risk cases when feasible. | Open |
| GAP-04 | All UI flows | Loading/API failure behavior is under-specified. | SRS | App may hang or show unclear states. | Treat as robustness tests and record observed behavior. | Open |
| GAP-05 | All product data displays | Safe display of admin-created product data is not fully specified outside search. | SRS | XSS-like payloads may appear in detail/listing/admin. | Use HTML/script-looking product names/descriptions as risk tests. | Open |

## Feature-Specific Gap Index

### FR-06 Product Detail View

| Gap ID | Missing / Ambiguous Requirement | Risk Level | Temporary Assumption |
| --- | --- | --- | --- |
| FR06-GAP-01 | Non-existing product ID behavior is not defined. | High | Show clear not-found message and do not crash. |
| FR06-GAP-02 | Category display does not specify name vs ID. | Medium | Display human-readable category name. |
| FR06-GAP-03 | Decimal quantity handling is not specified. | High | Decimal quantity is invalid. |
| FR06-GAP-04 | Empty/text/scientific/space quantity handling is not specified. | High | Non-integer or empty quantity is rejected. |
| FR06-GAP-05 | No maximum quantity or stock rule. | Medium | No strict max; large value is robustness test. |
| FR06-GAP-06 | Visual feedback type is flexible and not exact. | Medium | Any visible confirmation or cart badge update is acceptable. |
| FR06-GAP-07 | Requirement does not explicitly say one click must add to cart. | High | One valid click should add the item. |
| FR06-GAP-08 | Same-product repeated add behavior belongs to FR-07 but affects FR-06. | Medium | Repeated add should increase quantity, not duplicate rows. |
| FR06-GAP-09 | Broken product image behavior is unspecified. | Low | Page should not break layout. |
| FR06-GAP-10 | Price formatting is global FR-21, not repeated in FR-06. | Medium | Detail page must still use `₫` and thousands separators. |
| FR06-GAP-11 | Product detail loading/API failure state is unspecified. | Medium | Loading is acceptable; failure should not be infinite loading. |
| FR06-GAP-12 | Safe display of HTML/script-looking product data is not explicit. | High | Render as text, not executable HTML. |

### FR-10 Order State Machine

| Gap ID | Missing / Ambiguous Requirement | Risk Level | Temporary Assumption |
| --- | --- | --- | --- |
| FR10-GAP-01 | Admin cancellation from `shipping` is ambiguous. | High | Mark as clarification/exploratory, not strict pass/fail until clarified. |
| FR10-GAP-02 | Exact transition API contract and response codes are not defined in SRS. | High | Valid transition returns 2xx; invalid transition returns 4xx. |
| FR10-GAP-03 | Invalid-transition error text is not specified. | Medium | Require clear error, not exact wording. |
| FR10-GAP-04 | Direct API invalid target statuses are not specified. | High | API must reject invalid target state. |
| FR10-GAP-05 | Non-existing order behavior is not defined. | Medium | Return clear 404-style error. |
| FR10-GAP-06 | User canceling another user's order is not explicitly stated in FR-10. | High | User can cancel only own orders. |
| FR10-GAP-07 | Same-state transitions are not specified. | Medium | Reject unless idempotency is documented. |
| FR10-GAP-08 | Concurrent transition behavior is not specified. | Low | Record as risk, optional test. |
| FR10-GAP-09 | Audit trail/timestamps/actor recording are not specified. | Low | Do not require for pass/fail. |
| FR10-GAP-10 | Cancellation with incomplete order fields is not specified. | Low | State controls cancellation regardless of other fields. |
| FR10-GAP-11 | UI behavior after transition is not specified. | Medium | UI should visibly update status/actions. |
| FR10-GAP-12 | Final-state forbidden pairs are not enumerated. | High | Test representative outgoing transitions from both final states. |
| FR10-GAP-13 | Case sensitivity of status values is not specified. | Medium | Lowercase enumerations only. |
| FR10-GAP-14 | Mobile cancellation relation to FR-10 is secondary to this feature's main API/admin scope. | Low | Use mobile only as supporting evidence if needed. |

### FR-15 Product Management CRUD

| Gap ID | Missing / Ambiguous Requirement | Risk Level | Temporary Assumption |
| --- | --- | --- | --- |
| FR15-GAP-01 | FR-15 does not repeat admin authorization rules. | High | FR-12 applies to FR-15 product write APIs. |
| FR15-GAP-02 | Validation layer is unspecified. | High | Backend must enforce validation, not just UI. |
| FR15-GAP-03 | Whitespace-only name is unspecified. | High | Trimmed empty name is invalid. |
| FR15-GAP-04 | Unicode/Vietnamese length counting for 255 chars is unspecified. | Medium | Use ASCII strings for boundary tests. |
| FR15-GAP-05 | Decimal price handling is unspecified. | Medium | Positive decimals are exploratory; positive integer VND is safe baseline. |
| FR15-GAP-06 | No upper price bound. | Low | Large price is robustness test. |
| FR15-GAP-07 | Description/image URL requiredness is unspecified. | Medium | Optional unless another requirement says otherwise. |
| FR15-GAP-08 | Image URL validation is unspecified. | Low | Broken URL should not break UI. |
| FR15-GAP-09 | Product name uniqueness is unspecified. | Low | Duplicate names are allowed unless SRS says unique. |
| FR15-GAP-10 | Non-existing product update/delete behavior is unspecified. | Medium | Return clear error and no data change. |
| FR15-GAP-11 | Delete confirmation/undo is unspecified. | Low | Confirmation is UX improvement, not strict FR-15 failure. |
| FR15-GAP-12 | Deleting product referenced by orders/cart is unspecified. | Medium | Integration risk; test if easy to set up. |
| FR15-GAP-13 | Product list refresh after CRUD is unspecified. | Medium | UI should reflect operation immediately or after reload. |
| FR15-GAP-14 | How to prove "only selected product changes" is unspecified. | High | Compare before/after values of target and non-target products. |
| FR15-GAP-15 | Invalid-input error text is unspecified. | Medium | Require clear error, not exact wording. |
| FR15-GAP-16 | Empty category list behavior is unspecified. | Low | Seeded categories exist; empty-list state is out of scope. |
| FR15-GAP-17 | Product write APIs are not under `/api/admin/*`, but FR-12 still requires admin role. | High | `POST/PUT/DELETE /api/products` must require admin. |

### FR-05-M Product Listing and Search on Mobile

| Gap ID | Missing / Ambiguous Requirement | Risk Level | Temporary Assumption |
| --- | --- | --- | --- |
| FR05M-GAP-01 | Web-specific `<h1>`/grid requirement does not map directly to React Native. | Medium | Check mobile-equivalent header/list layout. |
| FR05M-GAP-02 | Alt text requirement is web-specific. | Medium | Visible image is required; accessibility label is improvement unless specified. |
| FR05M-GAP-03 | Search matching semantics are unspecified. | High | Case-insensitive substring search with trimmed input. |
| FR05M-GAP-04 | Empty search behavior is unspecified. | Medium | Empty search shows default/all products. |
| FR05M-GAP-05 | Empty-state message content is unspecified. | High | Clear no-result message required. |
| FR05M-GAP-06 | Loading state timing/trigger is unspecified. | Medium | Loading indicator should appear during slow fetch. |
| FR05M-GAP-07 | Network/API error behavior is unspecified. | Medium | Show clear error and do not crash. |
| FR05M-GAP-08 | Result ordering is unspecified. | Low | Do not assert exact order unless comparing to API. |
| FR05M-GAP-09 | Pagination/large result handling is unspecified. | Low | Scrolling is acceptable for seeded data. |
| FR05M-GAP-10 | Maximum search keyword length is unspecified. | Medium | Long keyword is robustness/security test. |
| FR05M-GAP-11 | HTML/script keyword safe display behavior needs explicit testing. | High | Display literally or safely; never execute/render HTML. |
| FR05M-GAP-12 | Backend HTML error response handling is unspecified. | Medium | App should show safe error and not crash. |
| FR05M-GAP-13 | Search trigger behavior is unspecified. | Low | Search button triggers search; live search not required. |
| FR05M-GAP-14 | Result count is unspecified. | Low | Optional; if shown, must match results. |
| FR05M-GAP-15 | Mobile backend IP/configuration expectation is unspecified. | Medium | Record actual backend IP/environment. |
| FR05M-GAP-16 | Product card tap/detail behavior is outside FR-05. | Low | Not required for listing/search pass/fail. |
| FR05M-GAP-17 | Safe display of admin-created product data in mobile list is not explicit. | High | Render product data as text; invalid price must not crash list. |

## Day 2 Summary

The most important requirement gaps to carry into test design are:

1. FR-06 quantity validation and category/not-found behavior.
2. FR-10 full transition matrix, final states, role boundaries, and `shipping -> canceled` ambiguity.
3. FR-15 backend validation, product write authorization, and update isolation.
4. FR-05-M web-to-mobile requirement adaptation, search semantics, empty/loading/error states, and safe display of risky input.

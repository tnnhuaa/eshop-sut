# HW06 API Bug Report

**Student:** Nguyễn Hiền Tuấn Anh — 23127280

**Execution host:** `http://localhost:3000`

**Execution date:** 2026-08-20

**Suite result:** 122 executed; 35 passed; 87 failed; 10 distinct product-defect groups.

## Evidence and classification method

- Full execution: `postman/reports/final-newman.html` and `postman/reports/final-newman-summary.json`.
- Student-captured final-run evidence: `evidence/execution/final-newman-localhost.png` and `evidence/execution/final-newman-summary.png`.
- Per-case result and bug mapping: `test-cases/API_Test_Cases.csv`.
- Focused concurrency reproduction: `evidence/execution/concurrent-checkout.json`.
- Representative Postman evidence: 20 distinct PNG files under `evidence/bugs/`, one request and one result for each Bug ID.
- Copy-ready Issue bodies: `reports/github-issues/BUG-*.md`.
- Public GitHub Issues: `https://github.com/tnnhuaa/eshop-sut/issues/24` through `https://github.com/tnnhuaa/eshop-sut/issues/33`.
- The clean rerun had no failed setup assertions. Two ambiguous authentication oracles were corrected to allow either 401 or 403 before the final run.
- The student manually created all 10 public GitHub Issues. Public API verification on 2026-08-22 confirmed the correct Bug IDs/titles, Expected/Actual sections, and two uploaded images per issue.

## Summary

| Bug ID | API | Severity | Title | Affected tests | GitHub Issue |
|---|---|---:|---|---:|---|
| BUG-REG-001 | Register | High | Registration accepts missing, malformed, and wrong-type input | 26 | [#31](https://github.com/tnnhuaa/eshop-sut/issues/31) |
| BUG-REG-002 | Register | High | Registration allows an exact duplicate email | 1 | [#32](https://github.com/tnnhuaa/eshop-sut/issues/32) |
| BUG-REG-003 | Register | Critical | Password is stored and returned by login in plaintext | 1 | [#33](https://github.com/tnnhuaa/eshop-sut/issues/33) |
| BUG-CHK-001 | Checkout | Critical | Checkout trusts client `total_amount` instead of recalculating the cart | 12 | [#24](https://github.com/tnnhuaa/eshop-sut/issues/24) |
| BUG-CHK-002 | Checkout | Medium | Checkout accepts missing or invalid `shipping_address` values | 7 | [#25](https://github.com/tnnhuaa/eshop-sut/issues/25) |
| BUG-CHK-003 | Checkout | High | Checkout creates orders from an empty or stale cart | 3 | [#26](https://github.com/tnnhuaa/eshop-sut/issues/26) |
| BUG-CHK-004 | Checkout | Critical | Successful checkout leaves the cart intact and permits duplicate orders | 25 | [#27](https://github.com/tnnhuaa/eshop-sut/issues/27) |
| BUG-CPN-001 | Create Coupon | Critical | Ordinary users can create admin coupons | 2 | [#28](https://github.com/tnnhuaa/eshop-sut/issues/28) |
| BUG-CPN-002 | Create Coupon | High | Coupon creation accepts invalid required fields, enums, numbers, and dates | 21 | [#29](https://github.com/tnnhuaa/eshop-sut/issues/29) |
| BUG-CPN-003 | Create Coupon | Medium | Duplicate coupon code returns HTTP 500 instead of a conflict response | 1 | [#30](https://github.com/tnnhuaa/eshop-sut/issues/30) |

## BUG-REG-001 — Registration accepts invalid input

- **Requirement:** FR-01 requires a name, valid email, and a password of at least eight characters containing upper/lowercase letters, a digit, and an allowed special character.
- **Representative test:** `REG-AI-009`; related cases are listed in the CSV.
- **Steps:** Send `POST /api/register` with `X-Student-Id: 23127280`, JSON content type, and a body that omits `name` while retaining a unique valid email and password.
- **Expected:** HTTP 400; no user created.
- **Actual:** HTTP 200 with `User registered successfully`. The same behavior occurs across missing/null/empty fields, malformed email/password partitions, wrong JSON types, and a top-level array.
- **Evidence:** Final Newman report; CSV rows mapped to `BUG-REG-001`.

## BUG-REG-002 — Exact duplicate email is accepted

- **Requirement:** FR-01 requires a unique email.
- **Test:** `REG-AI-020`.
- **Steps:** Register a unique email, then submit the same registration email again.
- **Expected:** HTTP 409 conflict and no second account.
- **Actual:** The second request returns HTTP 200 and creates another user.
- **Evidence:** Final Newman report and summary.

## BUG-REG-003 — Password is exposed as plaintext

- **Requirement:** SEC-01 requires passwords to be hashed and never returned by APIs.
- **Test:** `REG-AI-035`.
- **Steps:** Register a user, log in with that user, and inspect the login response.
- **Expected:** No password field; stored value must not equal the submitted password.
- **Actual:** Login returns `user.password` equal to the submitted plaintext password.
- **Evidence:** Sanitized final Newman report and summary.

## BUG-CHK-001 — Checkout trusts the client total

- **Requirement:** FR-08 states that the backend must calculate the total from the cart and must not accept client `total_amount` as authoritative.
- **Representative test:** `CHK-AI-011`; 12 mapped cases cover lower, zero, negative, string, null, omitted, fractional, huge, quantity, duplicate-line, concurrent, and multiline-address variants.
- **Steps:** Create an isolated user/cart worth 200000, then submit checkout with `total_amount: 1`.
- **Expected:** Stored order total is 200000.
- **Actual:** Stored order total is 1. Omitted/null totals can be stored as null.
- **Evidence:** Final Newman report; concurrency evidence also contains two orders with null totals.

## BUG-CHK-002 — Invalid shipping address is accepted

- **Requirement:** The checkout contract requires a string `shipping_address`.
- **Representative test:** `CHK-AI-019`.
- **Steps:** Checkout an authenticated nonempty cart while omitting `shipping_address`.
- **Expected:** HTTP 400 and no order.
- **Actual:** HTTP 200 and an order is created. Null, empty, whitespace, numeric, object, and top-level-array variants are also accepted.
- **Evidence:** Final Newman report and summary.

## BUG-CHK-003 — Empty or stale carts can be checked out

- **Requirement:** FR-08 creates an order from the authenticated user's current valid cart.
- **Representative tests:** `CHK-AI-027`, `CHK-H-003`, `CHK-H-004`.
- **Steps:** Login with an empty cart and call checkout; separately use an injected stale product ID.
- **Expected:** HTTP 400 and no order.
- **Actual:** HTTP 200 and an order is created without validating current cart contents.
- **Evidence:** Final Newman report and summary.

## BUG-CHK-004 — Cart is not cleared and duplicate orders are allowed

- **Requirement:** FR-08 requires the cart to be empty after a successful checkout.
- **Representative tests:** `CHK-AI-001`, `CHK-AI-028`, `CHK-AI-029`, `CHK-H-005`.
- **Steps:** Checkout a nonempty cart, then read the cart and repeat checkout. For concurrency, submit two equivalent checkout requests with `Promise.all` against the same isolated cart.
- **Expected:** Cart becomes empty; only one request creates an order; the competing/repeated request receives 400 or 409.
- **Actual:** Cart remains nonempty. Focused concurrent reproduction returned `[200, 200]` and created two pending orders from one cart.
- **Evidence:** Final Newman report and `evidence/execution/concurrent-checkout.json`.

## BUG-CPN-001 — Non-admin users can create coupons

- **Requirement:** FR-17 is an admin-only function; SEC-03 requires admin APIs to verify `role = 'admin'`.
- **Tests:** `CPN-AI-011`, `CPN-AI-012`.
- **Steps:** Authenticate as the ordinary demo user and call `POST /api/admin/coupons` with a valid coupon body.
- **Expected:** HTTP 403 and no coupon created.
- **Actual:** HTTP 200 with `Coupon created`.
- **Evidence:** Final Newman report and summary.

## BUG-CPN-002 — Coupon fields are not validated

- **Requirement:** FR-17 requires a unique code, `percent`/`fixed` type, positive discount, nonnegative minimum order, positive integer usage limit, and a valid future expiration date.
- **Representative test:** `CPN-AI-013`; 21 mapped cases cover required fields, enum, numeric, boundary, type, and date validation.
- **Steps:** Authenticate as admin and submit a coupon without `code`.
- **Expected:** HTTP 400 and no coupon created.
- **Actual:** HTTP 200. Similar invalid enum, number, string-number, fractional-limit, missing-field, and date cases are accepted.
- **Evidence:** Final Newman report and summary.

## BUG-CPN-003 — Duplicate coupon produces an internal error

- **Requirement:** Duplicate resource creation should be handled as a client conflict without an unhandled server error.
- **Test:** `CPN-AI-017`.
- **Steps:** Create a unique coupon, then submit the exact code again.
- **Expected:** HTTP 409 conflict with a controlled error response.
- **Actual:** HTTP 500.
- **Evidence:** Final Newman report and summary.

## Issue-publication checklist

- [x] Open each representative failure in Postman and capture the real request/response screenshot.
- [x] Prepare 10 copy-ready GitHub Issue bodies with matching evidence filenames.
- [x] Create 10 GitHub Issues using the bug IDs/titles above and attach the matching screenshots to each issue.
- [x] Replace every `Pending` GitHub Issue cell with the public issue link.
- [x] Verify through the public GitHub API that each issue has the matching Bug ID/title, Expected/Actual sections, and two image attachments.
- [ ] Optional final-submission evidence: capture the GitHub Issues list page if the report layout benefits from a single overview screenshot.

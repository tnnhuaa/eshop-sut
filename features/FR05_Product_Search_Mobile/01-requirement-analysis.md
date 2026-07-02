# FR-05-M Product Listing and Search on Mobile - Requirement Analysis

## Requirement Source

* Requirement ID used in this homework: FR-05-M.

* Primary test basis: `README.md` - FR-05 Product Listing and Search.

* Mobile scope: tested on the React Native Mobile application.

* Supporting test basis: FR-21 GUI requirements where applicable to mobile UI.

* Platform under test: React Native Mobile.

* Relevant implementation surfaces for later verification:

  * Mobile home/listing/search screen: `frontend-mobile/App.js`

  * API: `GET /api/products?search=keyword`

  * Product data source: seeded database and admin-created products.

## Scope Clarification

Pool D is recorded as: FR-05-M Product Listing and Search on Mobile.

FR-05 was originally written with web concepts such as grid layout, alt text, and `<h1>`. For FR-05-M, those concepts need mobile-equivalent interpretations where possible.

## Requirement Summary

| Requirement Item     | Expected Behavior From SRS                              | Mobile Interpretation                                                                                | Testable? |
| -------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------- |
| Product listing      | Home page shows all products in grid                    | Mobile shows a product list/card layout                                                              | Yes       |
| Product image        | Each product shows image with proper ratio and alt text | Image visible; alt text is not directly applicable in React Native unless accessibility label exists | Partly    |
| Product name         | Each product shows product name                         | Same on mobile                                                                                       | Yes       |
| Product price        | Price shown in `₫` with thousands separators            | Same on mobile                                                                                       | Yes       |
| Search by name       | Search bar filters by product name                      | Same on mobile                                                                                       | Yes       |
| Safe keyword display | Search keyword displayed safely, not rendered as HTML   | React Native `Text` should display literal text                                                      | Yes       |
| Loading state        | Show loading while fetching data                        | Mobile should show loading text/indicator                                                            | Yes       |
| Empty state          | Show suitable empty state when no result                | Mobile should show clear "no result" message                                                         | Yes       |
| One `<h1>` only      | Each page has one `<h1>`                                | Not directly applicable to React Native                                                              | Ambiguous |

## Actors and Preconditions

| Actor/Condition               | Requirement Interpretation                                       |
| ----------------------------- | ---------------------------------------------------------------- |
| Guest mobile user             | Can view product listing and search without login.               |
| Backend reachable from device | Mobile app must connect to backend over LAN/emulator network.    |
| Seeded products exist         | Default listing should show seeded products.                     |
| No matching products          | Empty state should be visible.                                   |
| Network/API error             | Requirement does not define exact error handling; record as gap. |

## Input Variables

| Variable           | Source                    | Valid Domain                         | Invalid/Risky Domain                                                                          | Requirement Basis                   |
| ------------------ | ------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------- | ----------------------------------- |
| `search_keyword`   | Mobile search input       | Empty, normal product-name substring | HTML/script-looking text, very long text, spaces-only, special characters, Vietnamese accents | Search and safe display requirement |
| `product_list`     | API response              | Array of products                    | Empty array, malformed data, API error/HTML error                                             | Listing/loading/empty requirements  |
| `product.name`     | Product data              | Displayable string                   | Empty, long, HTML/script-looking text                                                         | Product card display                |
| `product.price`    | Product data              | Positive numeric value               | String number, missing, non-numeric, negative                                                 | Price display requirement           |
| `product.imageUrl` | Product data              | Reachable image URL                  | Empty, broken URL, slow image                                                                 | Image display requirement           |
| `network_state`    | Device/backend connection | Backend reachable                    | Backend unreachable, wrong IP, timeout                                                        | Mobile-specific setup risk          |

## Requirement Gaps and Ambiguities

| Gap ID       | Missing / Ambiguous Requirement                                                                                      | Why It Matters For Testing                                                                  | Temporary Assumption For Test Design                                                                                     | Verification / Follow-up                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| FR05M-GAP-01 | FR-05 says product grid and `<h1>`, but mobile uses React Native components instead of HTML.                         | Web-specific assertions cannot be applied directly to mobile.                               | Use mobile-equivalent checks: visible page title/header and product card/list layout.                                    | Do not require literal `<h1>` on mobile; mention as scope adaptation.                                          |
| FR05M-GAP-02 | Alt text requirement is web-specific; mobile accessibility label expectation is not defined.                         | Image accessibility can be missed if not adapted.                                           | Check visible image; optionally check accessibility label only as improvement, not strict FR-05 mobile failure.          | If testing with accessibility tools, record absence as UX/accessibility gap.                                   |
| FR05M-GAP-03 | Search matching rules are not defined: case sensitivity, partial match, trimming, accents, or Vietnamese diacritics. | Search results may differ for `iphone`, `iPhone`, spaces, or accented input.                | Search should be case-insensitive and by substring of product name; trim leading/trailing spaces.                        | Test lowercase/uppercase and spaces around keyword.                                                            |
| FR05M-GAP-04 | Empty search behavior is not defined.                                                                                | Pressing search with empty input may show all products, no products, or validation message. | Empty search should show default/all products.                                                                           | Test empty keyword and spaces-only keyword.                                                                    |
| FR05M-GAP-05 | Empty state message content is not specified.                                                                        | Tests need expected visible outcome for no result.                                          | Any clear no-result/empty-state message is acceptable; blank list without explanation is not acceptable.                 | Search for a guaranteed no-match keyword.                                                                      |
| FR05M-GAP-06 | Loading state duration/trigger is not specified.                                                                     | Loading may be too brief to observe manually.                                               | A loading indicator/text should appear during fetch when network is slow; absence in normal fast fetch is hard to judge. | Use throttling or observe immediately after search if possible.                                                |
| FR05M-GAP-07 | Requirement does not define API/network error behavior.                                                              | Mobile backend IP issues are common; app should not silently fail.                          | Network/API error should show a clear message and not crash.                                                             | Test with backend stopped or wrong `API_URL` only if time permits.                                             |
| FR05M-GAP-08 | Requirement does not specify result ordering.                                                                        | Search/list output can change order and affect expected results.                            | Preserve backend/default order; do not assert exact ordering unless needed.                                              | Compare with API response if order matters.                                                                    |
| FR05M-GAP-09 | Requirement does not specify pagination or large result handling.                                                    | Real product list could exceed screen capacity.                                             | FlatList/scrolling is acceptable; no pagination required for seeded dataset.                                             | Add as scalability risk, not strict bug.                                                                       |
| FR05M-GAP-10 | Requirement does not specify maximum search keyword length.                                                          | Very long input can break layout or slow backend query.                                     | Treat very long keyword as robustness/security test.                                                                     | Test a long string and record layout/API behavior.                                                             |
| FR05M-GAP-11 | Requirement says keyword must be displayed safely but does not define expected behavior for HTML/script payload.     | This is a key security-oriented domain class.                                               | Payload should appear as literal text or be safely handled; it must not execute or render as HTML.                       | Test `<b>phone</b>` and `<script>alert(1)</script>`.                                                           |
| FR05M-GAP-12 | Requirement does not define behavior when backend returns HTML error instead of JSON.                                | Current API search can return HTML on database errors; mobile may display raw error text.   | App should show a safe error message, not crash.                                                                         | Use risky search input only if it does not damage data; record raw HTML display as possible UX/security issue. |
| FR05M-GAP-13 | Requirement does not define whether search is triggered by button only or live as user types.                        | Test steps must know expected timing.                                                       | Search is triggered by pressing the Search button; live search is not required.                                          | Verify mobile UI behavior.                                                                                     |
| FR05M-GAP-14 | Requirement does not define whether result count is required.                                                        | UI may show count, but SRS only requires listing/empty state.                               | Result count is optional; if present, it should match visible results.                                                   | Check consistency if count is displayed.                                                                       |
| FR05M-GAP-15 | Requirement does not define mobile backend configuration expectations.                                               | Hard-coded LAN IP may fail on another network/device.                                       | For homework execution, record actual IP/environment in `logs/environment.md`.                                           | Verify mobile connects to backend on current network.                                                          |
| FR05M-GAP-16 | Requirement does not define product card tap behavior.                                                               | FR-05 focuses listing/search, but product cards often navigate to detail.                   | Detail navigation is supportive, not required for FR-05 pass/fail.                                                       | Test only if using detail as evidence.                                                                         |
| FR05M-GAP-17 | Requirement does not define safe display of product names/prices from admin-created data.                            | Search cards can display untrusted product data.                                            | Product name should be rendered as text; invalid price should not crash the list.                                        | Use FR-15-created data if time permits.                                                                        |

## Requirement Gap Coverage Checklist

| Area                       | Covered By Gap IDs                                     |
| -------------------------- | ------------------------------------------------------ |
| Web-to-mobile adaptation   | FR05M-GAP-01, FR05M-GAP-02                             |
| Search semantics           | FR05M-GAP-03, FR05M-GAP-04, FR05M-GAP-08, FR05M-GAP-13 |
| Empty/loading/error states | FR05M-GAP-05, FR05M-GAP-06, FR05M-GAP-07, FR05M-GAP-12 |
| Security/safe display      | FR05M-GAP-10, FR05M-GAP-11, FR05M-GAP-17               |
| Mobile environment         | FR05M-GAP-15                                           |
| Optional UX/scalability    | FR05M-GAP-09, FR05M-GAP-14, FR05M-GAP-16               |

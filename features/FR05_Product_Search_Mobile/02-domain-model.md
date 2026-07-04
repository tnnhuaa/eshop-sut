# FR-05-M Product Listing and Search on Mobile - Domain Model

## Input Variables

| Variable | Type | Source | Valid Domain | Invalid / Risk Domain | Related Gap |
| --- | --- | --- | --- | --- | --- |
| `search_keyword` | Text input | Mobile search box | Empty keyword, exact product name, partial product name, different case, leading/trailing spaces, Vietnamese keyword | Spaces-only, no-match keyword, very long keyword, special characters, HTML/script-looking text | FR05M-GAP-03, FR05M-GAP-04, FR05M-GAP-10, FR05M-GAP-11 |
| Search trigger | User action | Search button | Press Search after entering keyword | Typing without pressing Search if app is not live-search | FR05M-GAP-13 |
| Search state reset | UI/navigation state | Header/logo Home navigation after a filtered search | Returning Home resets to default/all product list | Returning Home keeps stale filtered results | FR05M-GAP-18 |
| Product list response | API response | `GET /api/products?search=...` | Non-empty product array, one matching product, many matching products | Empty array, malformed item, backend/network error, HTML error response | FR05M-GAP-05, FR05M-GAP-06, FR05M-GAP-07, FR05M-GAP-12 |
| Product card | UI output | Product list item | Visible image, name, price | Missing image, broken image, empty name, unsafe-looking name, malformed price | FR05M-GAP-02, FR05M-GAP-17 |
| Product price | Product data | Backend seeded products | Positive number displayed with `₫` and thousands separators | Missing, non-numeric, negative, decimal/format ambiguity | FR05M-GAP-17 |
| Mobile environment | External condition | Device/emulator + backend connection | Backend reachable through configured LAN/emulator IP | Backend stopped, wrong IP, timeout | FR05M-GAP-15 |
| Web-only requirements | Specification carry-over | FR-05 wording | Mobile-equivalent page title/header and list layout | Literal `<h1>` and HTML `alt` cannot be inspected directly in React Native UI | FR05M-GAP-01, FR05M-GAP-02 |

## Equivalence Partitions

| Class ID | Variable | Partition | Representative Value | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| EP-SEARCH-V01 | `search_keyword` | Empty keyword | empty string | Default/all product listing is displayed | High |
| EP-SEARCH-V02 | `search_keyword` | Exact existing name | `FR05M-SINGLE-Ốp lưng Pixel` | Matching product is displayed | High |
| EP-SEARCH-V03 | `search_keyword` | Partial existing name with multiple matches | `FR05M-ALPHA` | Multiple matching products are displayed | High |
| EP-SEARCH-V04 | `search_keyword` | Case variation | `fr05m-alpha` | Search should match regardless of case if backend collation supports it | Medium |
| EP-SEARCH-V05 | `search_keyword` | Leading/trailing spaces | `  FR05M-ALPHA  ` | Search should behave like trimmed keyword, or gap is recorded | Medium |
| EP-SEARCH-V06 | `search_keyword` | Vietnamese/accent keyword | `Điện thoại` | Matching Vietnamese product names are displayed | Medium |
| EP-SEARCH-I01 | `search_keyword` | No matching keyword | `FR05M-NO-MATCH-XYZ` | Empty state is displayed | High |
| EP-SEARCH-I02 | `search_keyword` | Spaces-only keyword | spaces only | Should behave like empty/default search or show clear empty-state; should not crash | Medium |
| EP-SEARCH-I03 | `search_keyword` | HTML-looking keyword | `<b>FR05M</b>` | Keyword is displayed as literal text or safely handled; no HTML rendering/execution | High |
| EP-SEARCH-I04 | `search_keyword` | Script-looking keyword | `<script>alert(1)</script>` | Keyword is displayed safely; no script execution; app does not crash | High |
| EP-SEARCH-I05 | `search_keyword` | Very long keyword | 256-character string | App remains responsive and safely shows no result or matching result | Medium |
| EP-SEARCH-I06 | Search state reset | Header/logo Home navigation after filtered search | Search `FR05M-ALPHA`, then tap header/logo | Default/all product list is restored | Medium |
| EP-LIST-V01 | Product list response | Many products | seeded `FR05M-ALPHA` products | Scrollable mobile list displays product cards | High |
| EP-LIST-V02 | Product list response | One product | `FR05M-SINGLE` | Exactly one matching card is displayed | High |
| EP-LIST-I01 | Product list response | Empty list | no-match search | Clear empty state is expected; blank page is not acceptable | High |
| EP-UI-V01 | Product card | Normal display fields | seeded valid product | Image, name, and formatted price are visible | High |
| EP-UI-R01 | Product card | Unsafe-looking product name | `FR05M-SAFE-<b>HTML</b>` | Name is rendered as text, not markup | Medium |
| EP-UI-R02 | Product card | Broken image URL | `FR05M-BROKEN-IMAGE` | Broken image does not crash list; card name/price remain usable | Medium |
| EP-NET-I01 | Network state | Backend unreachable | backend stopped or wrong IP | App shows safe error/loading resolution and does not crash | Medium |

## Domain Testing Coverage Targets

| Target | Classes Covered |
| --- | --- |
| Default listing | EP-SEARCH-V01, EP-LIST-V01, EP-UI-V01 |
| Search matching | EP-SEARCH-V02, EP-SEARCH-V03, EP-SEARCH-V04, EP-SEARCH-V05, EP-SEARCH-V06 |
| Empty/no-result behavior | EP-SEARCH-I01, EP-SEARCH-I02, EP-LIST-I01 |
| Safe keyword and data display | EP-SEARCH-I03, EP-SEARCH-I04, EP-UI-R01 |
| Mobile robustness | EP-SEARCH-I05, EP-SEARCH-I06, EP-UI-R02, EP-NET-I01 |
| Web-to-mobile adaptation | Mobile page title/header, product-card layout, and image visibility instead of literal HTML `grid`, `alt`, and `<h1>` assertions |

## Assumptions For Test Design

- Functional execution should be done on the Mobile app using a real device or emulator.
- Literal HTML requirements such as `<h1>` and `alt` are not directly applicable to React Native; they are recorded as mobile adaptation gaps.
- Search is expected to run after pressing the visible Search button.
- Exact empty-state wording is not specified; any clear no-result message is acceptable.
- Seed products with prefix `FR05M-` are test data and can be recreated safely by the provided seed script.

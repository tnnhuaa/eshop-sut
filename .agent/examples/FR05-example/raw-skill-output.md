# Raw Skill Output - FR-05-M

## Requirement Breakdown

The feature is a mobile product listing and search feature. It includes listing all products, rendering each product card, searching by product name, safe display of the entered keyword, loading state, empty state, and page/header structure.

Initial requirement items:

- Show all products on the home screen.
- Show image, name, and price for each product.
- Search products by product name.
- Display search keyword safely.
- Show loading state while fetching.
- Show empty state when no result is found.
- Ensure only one main page heading.

## Initial Domain Variables

| Variable | Valid Domain | Invalid / Risk Domain |
| --- | --- | --- |
| `search_keyword` | Empty, exact name, partial name, case variation | No-match, spaces-only, HTML/script-looking keyword, very long keyword |
| `product_list` | Non-empty list, one result, many results | Empty list, malformed response, API error |
| `product.name` | Normal displayable text | Empty, long, unsafe-looking text |
| `product.price` | Positive number | Missing, malformed, negative |
| `product.imageUrl` | Valid image URL | Broken URL, empty URL |
| `network_state` | Backend reachable | Backend unreachable, timeout |

## Initial Partitions

- Empty keyword should show default/all products.
- Exact keyword should show matching product.
- Partial keyword should show matching products.
- No-match keyword should show empty state.
- HTML/script keyword should be displayed safely and should not render markup.
- Long keyword should not crash the app.
- Broken product image should not crash the list.

## Initial Boundary Ideas

- Search keyword length: empty, one character, normal keyword, long keyword.
- Result count: zero, one, many.
- Loading transition: before response and after response.

## Initial Test Case Ideas

- Default mobile listing.
- Exact search.
- Partial search with many results.
- Lowercase search.
- Keyword with spaces.
- Vietnamese keyword.
- No-match search.
- HTML/script keyword.
- Safe display of unsafe-looking product name.
- Price formatting.
- Broken image robustness.
- Loading state.
- Backend unreachable state.

## Initial Risk Notes

- The web-specific `grid`, `alt`, and `<h1>` requirements may not be directly testable on React Native.
- Exact loading/empty text should not be invented.
- Seed data is needed for predictable one-result, many-result, no-result, and risky-name cases.

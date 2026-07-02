# FR-06 Example Input Requirement

## Feature ID

FR-06

## Feature Name

Product Detail View

## Platform

Web User

## Actor

Guest or logged-in user.

## Requirement

- Display product image, name, price, description, and category.
- Quantity input accepts only positive integers.
- Minimum quantity is 1.
- Add to cart shows visual feedback such as toast notification or cart badge update.

## Known Constraints

- Use `README.md` as the primary SRS.
- Price display should follow global UI rule: `₫` and thousands separators.
- No maximum quantity is specified.

## Known Assumptions

- One valid click on Add to Cart should add the selected product.
- Non-existing product should not crash the page.
- Category should be understandable to users.

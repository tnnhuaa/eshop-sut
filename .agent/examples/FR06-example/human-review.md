# FR-06 Example Human Review

## Accepted

- Quantity minimum `1` is the main BVA boundary.
- Decimal, text, empty, zero, and negative quantities are invalid partitions.
- Add-to-cart feedback must be checked.

## Modified

- Very large quantity is classified as robustness, not formal BVA.
- Visual feedback accepts toast or cart badge/count update, not exact wording.
- Category display expectation is marked as an assumption because SRS does not define name vs ID.

## Rejected

- Any invented maximum quantity.
- Any bug conclusion before execution.
- Any exact error text not specified by SRS.

## Added Manually

- Non-existing product ID.
- Non-numeric product ID.
- HTML/script-looking product name/description.
- Same product added twice from product detail.

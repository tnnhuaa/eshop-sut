# FR-06 Example Raw Skill Output

## Raw Output

The skill identified:

- Input variables: `product_id`, product display fields, `quantity`, and `add_action`.
- Valid quantity classes: `1`, `2`, and other positive integers.
- Invalid quantity classes: `0`, negative, decimal, empty, text, spaces, and scientific notation.
- Main BVA boundary: quantity minimum `1`, with values `0`, `1`, `2`.
- Non-boundary robustness value: very large quantity.
- Candidate test cases for product display, not-found route, add-to-cart, repeated add, visual feedback, and safe rendering.

## Raw Limitations

- The raw output initially risked treating very large quantity as a formal requirement boundary.
- The raw output needed human review to avoid requiring exact toast text.
- The raw output needed a clear note that product ID values are domain partitions, not SRS-defined numeric boundaries.

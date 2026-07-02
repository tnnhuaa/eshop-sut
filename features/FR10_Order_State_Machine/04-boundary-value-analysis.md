# FR-10 Boundary Value Analysis

FR-10 is primarily a state-transition feature, not a numeric-input feature. Therefore, BVA is applied to state boundaries: the edge where a transition changes from allowed to forbidden, the edge before final states, and the role boundary between user and admin operations.

## Boundary Rules

| Rule ID | Boundary Rule | Source / Decision |
| --- | --- | --- |
| FR10-BR-01 | User cancellation is allowed before shipping and forbidden at shipping | SRS states user cannot self-cancel when order is `shipping` |
| FR10-BR-02 | `delivered` and `canceled` are final states with no outgoing transitions | FR-10 state machine |
| FR10-BR-03 | Valid lifecycle order must not skip required intermediate states | FR-10 state sequence: `pending -> confirmed -> shipping -> delivered` |
| FR10-BR-04 | Admin-only transitions must reject non-admin actors | FR-12 access control and FR-18 admin order management |
| FR10-BR-05 | Only defined lowercase status values are valid | FR-10 defines the finite state set |

## Boundary Table

| Boundary ID | Variable | Boundary | Values To Test | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| FR10-BVA-01 | `current_state` for user cancel | Last state where user cancellation is allowed vs first state where it is forbidden | `confirmed`, `shipping` | User cancel accepted at `confirmed`; rejected at `shipping` | High |
| FR10-BVA-02 | Final state boundary | First state after normal completion has no outgoing transitions | `shipping -> delivered`, then `delivered -> canceled` | Deliver accepted; later cancel rejected | High |
| FR10-BVA-03 | Cancellation final boundary | Once canceled, no later transition is allowed | `pending -> canceled`, then `canceled -> confirmed` | Cancel accepted; later confirm rejected | High |
| FR10-BVA-04 | Lifecycle skip boundary | Adjacent valid transition vs skipped transition | `pending -> confirmed`, `pending -> shipping` | Adjacent transition accepted; skipped transition rejected | High |
| FR10-BVA-05 | Actor role boundary | Admin vs non-admin for admin transition | Admin confirms pending order; user tries same admin status change | Admin accepted; user rejected | High |
| FR10-BVA-06 | Status enum boundary | Defined status vs undefined/case-variant status | `delivered`, `returned`, `Delivered` | Defined status only accepted when transition is valid; unknown/case variant rejected | Medium |

## Values Not Treated As Specification Boundaries

| Value / Area | Reason |
| --- | --- |
| Numeric order ID ranges | FR-10 does not define minimum or maximum order ID values, so order IDs are domain partitions rather than BVA |
| Exact response code such as `400` vs `409` | SRS does not define exact API status codes |
| Exact error message wording | SRS does not define exact error text |
| Concurrency/race timing | Important risk but not a deterministic BVA boundary for this homework scope |

## BVA Test Ideas

| Test Idea | Boundary Covered |
| --- | --- |
| User cancels `confirmed` order, then user tries to cancel `shipping` order | FR10-BVA-01 |
| Admin transitions `shipping -> delivered`, then tries `delivered -> canceled` | FR10-BVA-02 |
| User/Admin cancels `pending`, then Admin tries `canceled -> confirmed` | FR10-BVA-03 |
| Admin performs `pending -> confirmed`, then tries direct `pending -> shipping` on another pending order | FR10-BVA-04 |
| Admin confirms pending order; non-admin tries same admin action | FR10-BVA-05 |
| Admin/API sends `returned` or `Delivered` as target status | FR10-BVA-06 |

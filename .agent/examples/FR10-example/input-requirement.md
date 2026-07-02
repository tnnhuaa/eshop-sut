# FR-10 Skill Input Requirement

## Feature

- Feature ID: FR-10
- Feature name: Order State Machine
- Platform: API + Web User + Web Admin
- Actors: User, Admin, unauthenticated user, non-admin user

## Requirement Text

FR-10 defines order states and allowed transitions:

- `pending`
- `confirmed`
- `shipping`
- `delivered`
- `canceled`

Expected lifecycle:

- `pending -> confirmed -> shipping -> delivered`
- `pending -> canceled`
- `confirmed -> canceled`
- `delivered` and `canceled` are final states.
- User cancellation is not allowed when order is `shipping`.

## Supporting Requirements

- FR-08 Checkout creates orders.
- FR-11 User Order History lets user view/cancel own orders.
- FR-18 Admin Order Management lets admin manage order states.
- FR-12 Access Control affects admin-only operations.

## Known Gaps / Assumptions

- Exact API status codes and error messages are not specified.
- Admin cancellation from `shipping` is ambiguous.
- Same-state transition behavior is not specified.
- Non-existing order ID and non-owner behavior are not specified directly in FR-10.

## Expected Output

Use `.agent/SKILL.md` and templates to produce:

- State transition model.
- Domain model.
- Boundary Value Analysis.
- Test cases with execution fields left as `TODO` / `Not Run`.
- Human review.
- AI gap analysis.

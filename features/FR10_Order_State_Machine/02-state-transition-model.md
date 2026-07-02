# FR-10 State Transition Model

## State Set

| State | Meaning | Final State? | Expected Outgoing Transitions |
| --- | --- | --- | --- |
| `pending` | Order has been placed and waits for confirmation | No | `confirmed`, `canceled` |
| `confirmed` | Order has been confirmed by Admin | No | `shipping`, `canceled` |
| `shipping` | Order is being delivered | No | `delivered` |
| `delivered` | Order is completed | Yes | None |
| `canceled` | Order is canceled | Yes | None |

## Actor Rules

| Actor | Allowed Operation Scope |
| --- | --- |
| Admin | Can perform valid admin transitions: confirm, ship, deliver, and cancel where the state machine allows cancellation |
| User | Can cancel own order in allowed states only |
| Unauthenticated user | Must not change order state |
| Non-owner user | Must not change another user's order |
| Non-admin user using admin API | Must not perform admin transitions |

## Full Transition Matrix

| From | To / Action | Actor | Expected Validity | Requirement Basis / Assumption |
| --- | --- | --- | --- | --- |
| `pending` | `confirmed` | Admin | Valid | Admin confirms order |
| `pending` | `canceled` | User | Valid | User may cancel order before shipping |
| `pending` | `canceled` | Admin | Valid | Admin cancellation is allowed before shipping |
| `pending` | `shipping` | Admin | Invalid | Must pass through `confirmed` |
| `pending` | `delivered` | Admin | Invalid | Must pass through `confirmed` and `shipping` |
| `pending` | `pending` | Admin/API | Invalid/ambiguous | Same-state transition not specified; assume rejected |
| `confirmed` | `shipping` | Admin | Valid | Admin ships confirmed order |
| `confirmed` | `canceled` | User | Valid | User may cancel before shipping |
| `confirmed` | `canceled` | Admin | Valid | Admin cancellation is allowed before shipping |
| `confirmed` | `pending` | Admin | Invalid | No backward transition specified |
| `confirmed` | `delivered` | Admin | Invalid | Must pass through `shipping` |
| `confirmed` | `confirmed` | Admin/API | Invalid/ambiguous | Same-state transition not specified; assume rejected |
| `shipping` | `delivered` | Admin | Valid | Admin completes delivery |
| `shipping` | `canceled` | User | Invalid | SRS explicitly says user cannot self-cancel when shipping |
| `shipping` | `canceled` | Admin | Ambiguous/exploratory | FR10-GAP-01: admin cancellation from shipping is unclear |
| `shipping` | `pending` | Admin | Invalid | No backward transition specified |
| `shipping` | `confirmed` | Admin | Invalid | No backward transition specified |
| `shipping` | `shipping` | Admin/API | Invalid/ambiguous | Same-state transition not specified; assume rejected |
| `delivered` | `pending` | Admin | Invalid | `delivered` is final |
| `delivered` | `confirmed` | Admin | Invalid | `delivered` is final |
| `delivered` | `shipping` | Admin | Invalid | `delivered` is final |
| `delivered` | `canceled` | User/Admin | Invalid | `delivered` is final |
| `delivered` | `delivered` | Admin/API | Invalid/ambiguous | Same-state final transition not specified; assume rejected |
| `canceled` | `pending` | Admin | Invalid | `canceled` is final |
| `canceled` | `confirmed` | Admin | Invalid | `canceled` is final |
| `canceled` | `shipping` | Admin | Invalid | `canceled` is final |
| `canceled` | `delivered` | Admin | Invalid | `canceled` is final |
| `canceled` | `canceled` | Admin/API | Invalid/ambiguous | Same-state final transition not specified; assume rejected |
| Any valid state | Unknown status | Admin/API | Invalid | Only five states are defined |
| Any valid state | Case-variant status | Admin/API | Invalid | Status values are assumed lowercase enum values |

## State Transition Coverage Targets

| Coverage Target | Representative Tests |
| --- | --- |
| Main valid path | `pending -> confirmed -> shipping -> delivered` |
| Cancellation before shipping | `pending -> canceled`, `confirmed -> canceled` |
| User cancellation boundary | User cancel at `confirmed` accepted; user cancel at `shipping` rejected |
| Skipped transitions | `pending -> shipping`, `confirmed -> delivered` rejected |
| Backward transitions | `confirmed -> pending`, `shipping -> confirmed` rejected |
| Final-state protection | `delivered -> canceled`, `canceled -> delivered` rejected |
| Actor/permission rules | Unauthenticated, non-admin, and non-owner attempts rejected |
| Invalid target status | Unknown and case-variant statuses rejected |

## Human Review Notes

- `shipping -> canceled` by Admin is intentionally marked as ambiguous/exploratory because the requirement text and diagram can be read differently.
- Same-state transitions are treated as invalid assumptions unless the implementation or API documentation explicitly defines them as idempotent.
- Exact HTTP status code and exact error message are not asserted unless API documentation defines them.

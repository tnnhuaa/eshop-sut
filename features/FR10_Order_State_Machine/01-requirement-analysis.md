# FR-10 Order State Machine - Requirement Analysis

## Requirement Source

* Primary test basis: `README.md` - FR-10 Order State Machine.

* Supporting test basis: FR-08 Checkout, FR-11 User Order History, FR-18 Admin Order Management.

* Platform under test: API + Web User + Web Admin.

* Relevant implementation surfaces for later verification:

  * User cancel API: `PUT /api/orders/:id/cancel`

  * Admin status API: `PUT /api/admin/orders/:id/status`

  * User order UI: `frontend-web/src/pages/Profile.jsx`, `frontend-mobile/App.js`

  * Admin order UI: `frontend-admin/src/App.jsx`

## Requirement Summary

FR-10 defines five order states and allowed transitions.

| State       | Meaning                                | Final? | Expected Outgoing Transitions |
| ----------- | -------------------------------------- | ------ | ----------------------------- |
| `pending`   | Order placed, waiting for confirmation | No     | `confirmed`, `canceled`       |
| `confirmed` | Admin confirmed order                  | No     | `shipping`, `canceled`        |
| `shipping`  | Order is being delivered               | No     | `delivered`                   |
| `delivered` | Order completed                        | Yes    | None                          |
| `canceled`  | Order canceled                         | Yes    | None                          |

## Actors and Permissions

| Actor                                        | Expected Permission From SRS                                                                        | Notes                                           |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| User                                         | May cancel order in allowed states; cannot cancel in `shipping`; cannot modify other users' orders. | FR-10 and FR-11 support ownership checks. |
| Admin                                        | May confirm, ship, complete, and cancel according to the state machine.                             | FR-18 says admin manages order state by FR-10.  |
| Unauthenticated user                         | No order state change allowed.                                                                      | Implied by authenticated order APIs.            |
| Non-admin authenticated user using admin API | No admin state change allowed.                                                                      | Covered by FR-12 access control.                |

## Full Transition Expectations

| From      | To                | Actor            | Expected Validity | Requirement Reason                                    |
| --------- | ----------------- | ---------------- | ----------------- | ----------------------------------------------------- |
| pending   | confirmed         | Admin            | Valid             | Admin confirms order.                                 |
| pending   | canceled          | User/Admin       | Valid             | User/Admin may cancel pending order.                  |
| pending   | shipping          | Admin            | Invalid           | Must pass through confirmed.                          |
| pending   | delivered         | Admin            | Invalid           | Must pass through confirmed and shipping.             |
| confirmed | shipping          | Admin            | Valid             | Admin ships confirmed order.                          |
| confirmed | canceled          | User/Admin       | Valid             | User/Admin may cancel confirmed order.                |
| confirmed | pending           | Admin            | Invalid           | No backward transition specified.                     |
| confirmed | delivered         | Admin            | Invalid           | Must pass through shipping.                           |
| shipping  | delivered         | Admin            | Valid             | Admin completes shipping order.                       |
| shipping  | canceled          | User             | Invalid           | SRS explicitly forbids user cancellation at shipping. |
| shipping  | canceled          | Admin            | Ambiguous         | See FR10-GAP-01.                                      |
| shipping  | pending/confirmed | Admin            | Invalid           | No backward transition specified.                     |
| delivered | any other state   | User/Admin       | Invalid           | Delivered is final.                                   |
| canceled  | any other state   | User/Admin       | Invalid           | Canceled is final.                                    |
| any state | same state        | User/Admin       | Ambiguous         | See FR10-GAP-07.                                      |
| any state | unknown status    | Admin/API client | Invalid           | Only five states are defined.                         |

## Requirement Gaps and Ambiguities

| Gap ID      | Missing / Ambiguous Requirement                                                                                                                                                                                      | Why It Matters For Testing                                                         | Temporary Assumption For Test Design                                                                                             | Verification / Follow-up                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| FR10-GAP-01 | Admin cancellation from `shipping` is ambiguous. The diagram only shows cancellation from `pending` and `confirmed`, but the text says when order is `shipping`, user cannot self-cancel and only Admin can operate. | This changes whether `shipping -> canceled` by admin is valid or invalid.          | Treat `shipping -> canceled` by admin as ambiguous; design one exploratory test and document assumption.                         | Ask TA if needed; compare FR-10 diagram with FR-18 admin management text. |
| FR10-GAP-02 | Exact API endpoints, request bodies, and response codes for each state transition are not defined in the SRS.                                                                                                        | Test cases need expected HTTP status and error structure.                          | Use API specification and observed implementation for endpoints; expect 2xx for valid transition and 4xx for invalid transition. | Verify `api_specification.md` and backend responses.                      |
| FR10-GAP-03 | Error message wording for invalid transitions is not specified.                                                                                                                                                      | Without exact message, tests should not fail just because wording differs.         | Require a clear error message, not an exact string, unless implementation/documentation defines it.                              | During execution, record actual message.                                  |
| FR10-GAP-04 | Requirement does not specify whether admin can set arbitrary target state via API or only use UI buttons.                                                                                                            | Direct API clients may send invalid states not reachable through UI.               | API must reject invalid target states even if UI hides them.                                                                     | Test direct API requests with invalid target states.                      |
| FR10-GAP-05 | Requirement does not define behavior for a non-existing order ID.                                                                                                                                                    | Needed for negative domain class.                                                  | API should return a clear 404-style error and no state change.                                                                   | Test nonexistent order ID.                                                |
| FR10-GAP-06 | Requirement does not define behavior when a user tries to cancel another user's order.                                                                                                                               | Ownership is a critical security and correctness property.                         | User can only cancel own order.                                                                                                  | Use two users or token manipulation if feasible.                          |
| FR10-GAP-07 | Requirement does not define same-state transition behavior, e.g., `pending -> pending` or `delivered -> delivered`.                                                                                                  | Same-state updates can hide defects or duplicate actions.                          | Same-state transition should be rejected unless explicitly documented as idempotent.                                             | Test direct API request if endpoint allows status body.                   |
| FR10-GAP-08 | Requirement does not define concurrency behavior when two actors update the same order nearly simultaneously.                                                                                                        | State machine may be bypassed by race conditions.                                  | Out of scope for manual HW02 unless easy to reproduce; record as risk.                                                           | Optional API stress/manual rapid-click test.                              |
| FR10-GAP-09 | Requirement does not define whether state changes need audit trail, timestamp, or actor recording.                                                                                                                   | Admin/user actions may need accountability but DB appears to store only status.    | Do not require audit trail for pass/fail because not in SRS.                                                                     | Record as missing requirement, not bug.                                   |
| FR10-GAP-10 | Requirement does not state whether cancellation is allowed after checkout but before payment/fulfillment details exist.                                                                                              | Order may be incomplete or missing shipping address/items.                         | Any order in `pending` or `confirmed` can be canceled regardless of other order fields.                                          | Verify with seeded/created orders.                                        |
| FR10-GAP-11 | Requirement does not specify UI behavior after a valid/invalid transition.                                                                                                                                           | Test must know whether to expect reload, toast, label update, or disabled button.  | UI should visibly update status and available actions after transition.                                                          | Verify user profile, mobile order history, and admin order table.         |
| FR10-GAP-12 | Requirement says final states have no outgoing transitions but does not explicitly list all forbidden final-state pairs.                                                                                             | AI/tools may miss combinations from final states.                                  | Test representative outgoing transitions from both final states, including `canceled -> delivered` and `delivered -> canceled`.  | Include in state transition matrix.                                       |
| FR10-GAP-13 | Requirement does not define whether status values are case-sensitive.                                                                                                                                                | API clients may send `Delivered`, `DELIVERED`, or localized labels.                | Status values should be lowercase enumerations only.                                                                             | Test invalid/case-variant target statuses if time permits.                |
| FR10-GAP-14 | Requirement does not define whether order cancellation should be checked on mobile as part of this FR-10 feature.                                                                                                    | The selected mobile feature is FR-05-M, so mixing mobile cancellation into FR-10 may confuse feature scope. | For FR-10, mobile cancellation is out of primary scope unless explicitly needed as supporting evidence.                          | Keep primary FR-10 execution on API/Admin/User web.                       |

## Requirement Gap Coverage Checklist

| Area                             | Covered By Gap IDs                                 |
| -------------------------------- | -------------------------------------------------- |
| Transition validity completeness | FR10-GAP-01, FR10-GAP-07, FR10-GAP-12, FR10-GAP-13 |
| API contract and errors          | FR10-GAP-02, FR10-GAP-03, FR10-GAP-04, FR10-GAP-05 |
| Security and actor permissions   | FR10-GAP-06                                        |
| UI behavior                      | FR10-GAP-11                                        |
| Advanced operational risks       | FR10-GAP-08, FR10-GAP-09, FR10-GAP-10, FR10-GAP-14 |

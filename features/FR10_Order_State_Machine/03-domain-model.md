# FR-10 Domain Model

## Input Variables

| Variable | Type | Source | Valid Domain | Invalid / Risk Domain | Related Gap |
| --- | --- | --- | --- | --- | --- |
| `order_id` | Identifier | API path / UI selected order | Existing order visible to actor | Non-existing, malformed, deleted, another user's order | FR10-GAP-05, FR10-GAP-06 |
| `current_state` | State variable | Existing order status | `pending`, `confirmed`, `shipping`, `delivered`, `canceled` | Missing, unknown, corrupted state | FR10-GAP-12 |
| `target_state` | State/action input | Admin API/status control | Allowed next state for current state | Skipped, backward, final-state outgoing, same-state, unknown, case-variant | FR10-GAP-01, FR10-GAP-04, FR10-GAP-07, FR10-GAP-13 |
| `actor_role` | Actor/permission | Session/token | Owner user for cancellation; Admin for admin transitions | Unauthenticated, non-owner user, non-admin user using admin endpoint | FR10-GAP-06 |
| `operation_channel` | Interface | API / Web User / Web Admin | Supported endpoint/UI action | Direct API payload that UI would hide, stale UI button | FR10-GAP-02, FR10-GAP-04, FR10-GAP-11 |
| `cross_role_state_view` | UI/state consistency observation | User order history + Admin order management | User UI and Admin UI show actions consistent with the same persisted order state | One role shows stale/invalid action after another role changes or attempts to change state | FR10-GAP-11, FR10-GAP-12 |
| `request_payload` | API body | Status update request | Valid lowercase status if endpoint requires it | Missing status, unknown status, uppercase/mixed-case status, extra fields | FR10-GAP-02, FR10-GAP-13 |

## Equivalence Partitions

| Class ID | Variable | Partition | Representative Value | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| EP-ORD-V01 | `order_id` | Existing order owned by user | User's own pending order | User cancellation can be evaluated | High |
| EP-ORD-V02 | `order_id` | Existing order managed by admin | Any existing order | Admin transition can be evaluated | High |
| EP-ORD-I01 | `order_id` | Non-existing order | `999999` | Reject with clear not-found behavior; no state change | Medium |
| EP-ORD-I02 | `order_id` | Another user's order | Order owned by user B | Reject user cancellation by user A | High |
| EP-STATE-V01 | `current_state` + `target_state` | Valid forward admin transition | `pending -> confirmed` | Accept transition and update state | High |
| EP-STATE-V02 | `current_state` + `target_state` | Valid user cancellation before shipping | `confirmed -> canceled` by owner | Accept cancellation and update state | High |
| EP-STATE-I01 | `current_state` + `target_state` | Skipped transition | `pending -> shipping` | Reject; state unchanged | High |
| EP-STATE-I02 | `current_state` + `target_state` | Backward transition | `shipping -> confirmed` | Reject; state unchanged | High |
| EP-STATE-I03 | `current_state` + `target_state` | Final-state outgoing transition | `delivered -> canceled` | Reject; state unchanged | High |
| EP-STATE-I04 | `current_state` + `target_state` | Same-state transition | `pending -> pending` | Reject unless documented as idempotent | Medium |
| EP-STATE-I05 | `target_state` | Unknown status | `returned` | Reject; state unchanged | Medium |
| EP-STATE-I06 | `target_state` | Case-variant status | `Delivered` | Reject unless API explicitly normalizes | Low |
| EP-ACTOR-I01 | `actor_role` | Unauthenticated request | No token/session | Reject; no state change | High |
| EP-ACTOR-I02 | `actor_role` | Non-admin uses admin transition | User tries admin status API | Reject; no state change | High |
| EP-ACTOR-I03 | `actor_role` | User cancels during shipping | Owner user, shipping order | Reject; no state change | High |
| EP-ACTOR-A01 | `actor_role` + `target_state` | Admin cancels during shipping | Admin, `shipping -> canceled` | Exploratory due ambiguous requirement | Medium |
| EP-VIEW-I01 | `cross_role_state_view` | Invalid User/Admin action after shipping cancel attempt | User attempts cancel on shipping order; Admin UI still offers/executes invalid next action | User cancel should be rejected and both UIs should remain consistent with actual state | High |
| EP-VIEW-I02 | `cross_role_state_view` | Final-state mismatch across roles | Order becomes `canceled`; Admin attempts mark as delivered | Admin must not move final canceled order to delivered; both UIs must show final canceled state | High |
| EP-PAYLOAD-I01 | `request_payload` | Missing status | Empty body | Reject with clear error; no state change | Medium |

## Domain Testing Coverage Targets

| Target | Classes Covered |
| --- | --- |
| Happy-path lifecycle | EP-STATE-V01 and valid `confirmed -> shipping`, `shipping -> delivered` |
| Cancellation rules | EP-STATE-V02, EP-ACTOR-I03, EP-ACTOR-A01 |
| Invalid transition protection | EP-STATE-I01, EP-STATE-I02, EP-STATE-I03, EP-STATE-I04 |
| Cross-role state consistency | EP-VIEW-I01, EP-VIEW-I02 |
| Authorization and ownership | EP-ACTOR-I01, EP-ACTOR-I02, EP-ORD-I02 |
| API input robustness | EP-ORD-I01, EP-STATE-I05, EP-STATE-I06, EP-PAYLOAD-I01 |

## Assumptions

- Valid transitions should result in a visible state change in UI or API response.
- Invalid transitions should not change the stored order state.
- Exact HTTP status code and exact error message are not asserted unless API documentation specifies them.
- Admin cancellation from `shipping` remains exploratory because FR-10 is ambiguous.

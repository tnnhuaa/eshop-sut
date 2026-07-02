# FR-10 AI Gap Analysis

## AI Output Reviewed

| Artifact | Location | Review Status |
| --- | --- | --- |
| Repository-local Agent Skill | `.agent/SKILL.md` | Used as workflow source |
| Templates | `.agent/templates/` | Used for domain model, BVA, test cases, and gap analysis structure |
| FR-10 requirement analysis | `features/FR10_Order_State_Machine/01-requirement-analysis.md` | Used as reviewed test basis |
| FR-10 state transition model | `features/FR10_Order_State_Machine/02-state-transition-model.md` | Human-reviewed draft |
| FR-10 domain model | `features/FR10_Order_State_Machine/03-domain-model.md` | Human-reviewed draft |
| FR-10 BVA | `features/FR10_Order_State_Machine/04-boundary-value-analysis.md` | Human-reviewed draft |
| FR-10 test cases | `features/FR10_Order_State_Machine/05-test-cases.csv` | Not executed |

## Review Summary

The skill was useful for turning FR-10 into state-transition and domain-testing artifacts. The most important human review point is that FR-10 does not behave like a numeric boundary problem. The BVA section therefore uses state boundaries such as cancellation allowed vs forbidden, final states, skipped transitions, and actor role boundaries.

## Missing Or Incorrect AI Risks

| Gap | Why AI Could Miss It | Human Correction |
| --- | --- | --- |
| Treating FR-10 as only a transition matrix | State-machine features also have actor, ownership, API payload, and invalid ID domains. | Added domain variables for `order_id`, `actor_role`, `operation_channel`, and `request_payload`. |
| Inventing exact HTTP codes or messages | SRS does not define exact API status codes or error messages. | Expected results require rejection and unchanged state, not exact response wording. |
| Treating admin `shipping -> canceled` as clearly valid or invalid | Requirement is ambiguous because diagram and admin operation wording can be read differently. | Marked `shipping -> canceled` by Admin as exploratory under FR10-GAP-01. |
| Missing final-state outgoing transitions | AI may only test happy path and one invalid transition. | Added representative outgoing transitions from both `delivered` and `canceled`. |
| Missing same-state transitions | Same-state updates can hide idempotency or duplicate-action defects. | Added same-state transition as invalid/ambiguous assumption unless documented. |
| Missing role and ownership boundaries | State diagrams often omit access control context. | Added unauthenticated, non-admin, and non-owner user cases. |
| Missing cross-role UI/state consistency after a state action | A pure transition matrix may verify one API response but miss that User UI and Admin UI can diverge or expose stale invalid actions. | Added tests for user cancellation attempt during shipping and for preventing canceled orders from later being marked delivered by Admin. |
| Misusing numeric BVA for order IDs | SRS does not define order ID range. | Treated order IDs as domain partitions, not BVA. |

## Accepted AI Contributions

| Contribution | Decision | Reason |
| --- | --- | --- |
| Build a full transition matrix before test cases | Accepted | FR-10 is primarily a state-machine feature. |
| Separate valid path, invalid transitions, and final-state cases | Accepted | Improves coverage and traceability. |
| Include actor/permission classes | Accepted | FR-10 transitions depend on user/admin behavior. |
| Keep execution fields as `TODO`/`Not Run` | Accepted | The skill designs tests but does not execute them. |

## Modified Contributions

| Original AI Direction | Final Human-Reviewed Direction |
| --- | --- |
| Use BVA only for numeric variables | Use state-boundary BVA because FR-10 has transition edges rather than numeric limits. |
| Treat `shipping -> canceled` by Admin as a normal valid transition | Mark it as ambiguous/exploratory until requirement or TA clarification confirms expected behavior. |
| Assert exact API response code | Assert accepted/rejected and unchanged state; record exact response during execution. |
| Test only UI-visible transitions | Include direct API invalid payload/status tests because UI may hide invalid transitions. |
| Verify only the immediate actor's result | Verify User and Admin views after cross-role state actions to detect stale action buttons and inconsistent final states. |

## Rejected Contributions

| Rejected Item | Reason |
| --- | --- |
| Any exact error message not defined by the SRS/API specification | Too brittle and not traceable to requirement |
| Any assumed audit trail/timestamp requirement | FR-10 does not define audit logging |
| Any bug conclusion before executing FR-10 test cases | Execution evidence is required before reporting defects |
| Treating concurrency/race behavior as required scope | Important risk but not required unless time and tooling permit |

## Final Human Review Result

Status: Accepted as FR-10 test design draft.

The generated FR-10 artifacts are ready for student review and later execution. Before running the test cases, the student should confirm available API endpoints, user/admin authentication setup, and how to create orders in specific initial states.

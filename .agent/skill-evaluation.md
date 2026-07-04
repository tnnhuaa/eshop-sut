# Skill Evaluation

## Evaluation Features

- FR-06 Product Detail View.
- FR-10 Order State Machine.
- FR-15 Product CRUD Admin.

## Evaluation Goal

Evaluate whether the reusable Domain Testing and Boundary Value Analysis skill can produce useful test design artifacts after the generated output is compared with actual FR-06 execution results.

## Run Log

| Run | Input | Raw Output | Human Review | Improvement |
| --- | --- | --- | --- | --- |
| Initial FR-06 run | `examples/FR06-example/input-requirement.md` | `examples/FR06-example/raw-skill-output.md` | `examples/FR06-example/human-review.md` | Added guardrails for no invented maximum quantity, no exact toast text, no bug conclusion before execution |
| Execution review | `features/FR06_Product_Detail_Web/04-test-cases.csv`, `05-test-execution.md` | Manual results: 21 executed, 11 passed, 10 failed | Compared generated tests with observed behavior and GitHub Issues `#1` to `#9` | No mandatory skill change; evaluation notes added |
| FR-10 state-machine run | `.agent/examples/FR10-example/input-requirement.md` | `.agent/examples/FR10-example/raw-skill-output.md` | `.agent/examples/FR10-example/human-review.md` | Human review added state transition model, actor/permission/ownership dimensions, final-state checks, and cross-role UI consistency |
| FR-10 execution review | `features/FR10_Order_State_Machine/05-test-cases.csv`, `06-test-execution.md` | Frontend UI results: 32 executed, 20 passed, 7 failed, 5 blocked | Compared generated tests with Web User/Admin UI behavior and FR-10 bug drafts | Skill should include a general lifecycle/state analysis rule |
| FR-15 CRUD run | `.agent/examples/FR15-example/input-requirement.md` | `.agent/examples/FR15-example/raw-skill-output.md` | `.agent/examples/FR15-example/human-review.md` | Human review refined optional fields, UI/API execution scope, duplicate-name assumption, and update-isolation checks |
| FR-15 execution review | `features/FR15_Product_CRUD_Admin/04-test-cases.csv`, `05-test-execution.md` | Admin UI results: 48 executed, 28 passed, 11 failed, 9 blocked | Compared generated validation/update-isolation tests with Admin Web behavior and FR-15 bug drafts | No mandatory skill change; execution confirmed the need to record UI reachability, browser-vs-app validation, and requirement clarifications separately |

## What The Skill Generated Correctly

| Area | Result |
| --- | --- |
| Requirement decomposition | Correctly separated product display, quantity input, add-to-cart action, and feedback behavior. |
| Domain variables | Correctly identified `product_id`, product data fields, `quantity`, and add action as important variables. |
| BVA focus | Correctly selected quantity minimum `1` as the main explicit boundary and used `0`, `1`, and `2`. |
| Invalid classes | Included empty, text, spaces, decimal, negative, scientific notation, and very large quantity classes. |
| Requirement gaps | Correctly marked category display format, exact feedback, non-existing product behavior, and maximum quantity as gaps/assumptions. |
| Cross-feature thinking | Correctly included repeated add-to-cart behavior because FR-06 interacts with cart logic. |
| Human review workflow | Forced generated output to be reviewed before treating it as final. |

## What The Skill Missed Or Needed Human Review For

| Weakness | Observation After Execution | Required Human Action |
| --- | --- | --- |
| Bug confirmation | The skill could design the one-click add test, but only execution confirmed the first click is ignored. | Confirmed BUG-FR06-001 manually. |
| Similar invalid classes | Empty vs whitespace and decimal vs scientific notation looked easy to group together. | Split them into separate bugs because they have different user actions/parsing behavior. |
| Evidence handling | The skill can request evidence but cannot capture or validate the student's final screenshots by itself. | Student must add screenshot/API evidence manually. |
| Severity assignment | The skill can suggest severity, but final severity depends on observed impact and course expectations. | Marked quantity validation and add-to-cart defects as Major; category/duplicate rows as Medium. |
| GitHub issue traceability | The skill did not know final GitHub issue numbers until issues were created. | Linked defects to issues `#1` through `#9`. |

## Cause Analysis

| Finding | Main Cause | Explanation |
| --- | --- | --- |
| Maximum quantity should not be formal BVA | Requirement ambiguity | FR-06 specifies minimum `1`, but no maximum or stock rule. The skill must keep large values as robustness unless specified. |
| Exact toast text should not be asserted | Requirement ambiguity | SRS allows feedback but does not define exact text. |
| One-click add defect was only known after execution | FR-06-specific implementation behavior | The skill's design was appropriate, but execution was required to classify it as a bug. |
| Empty/whitespace and decimal/scientific needed separation | Prompt + human review detail | The prompt asked for broad cases, but final defect grouping needed manual testing judgment. |
| Duplicate cart row issue crosses FR-06 and FR-07 | Requirement interaction | The skill correctly included it, but the bug should be explained as FR-06-triggered cart integration behavior. |

## FR-06-Specific vs General Skill Issues

| Issue | Classification | Reason |
| --- | --- | --- |
| Two-click add-to-cart behavior | FR-06-specific | This is an observed implementation defect in the product detail flow. |
| Missing category display | FR-06-specific with requirement ambiguity | The exact category display format is unclear, but FR-06 still requires category visibility. |
| Duplicate cart rows | Cross-feature implementation issue | Triggered from FR-06 but related to cart merging behavior. |
| Avoid invented max quantity | General skill guardrail | Applies to any future feature with missing upper bounds. |
| Avoid exact unspecified UI message | General skill guardrail | Applies to all UI features. |
| Split similar invalid input classes when behavior differs | General skill improvement | Useful for later features such as FR-15 validation and FR-05-M search. |
| Keep bug conclusion separate from test design | General skill guardrail | Applies to every feature because execution evidence is required. |

## FR-10 Skill Evaluation

### What The Skill Generated Correctly

| Area | Result |
| --- | --- |
| Requirement decomposition | Correctly identified FR-10 as a state/lifecycle feature rather than a simple form validation feature. |
| State variables | Correctly focused on `current_state`, `target_state`, actor role, order identity, and allowed transitions. |
| Final-state risk | Correctly highlighted that `delivered` and `canceled` should have no outgoing transitions. |
| Invalid transition classes | Included skipped transitions, backward transitions, same-state transitions, and unknown/missing status classes. |
| Human review workflow | Preserved raw output and required review before accepting final test cases. |

### What The Skill Missed Or Needed Human Review For

| Weakness | Observation After Execution | Required Human Action |
| --- | --- | --- |
| Explicit state-transition matrix | The initial skill output needed strengthening into a clear 5 x 5 transition matrix. | Added state transition model and representative transition coverage manually. |
| Actor and ownership depth | The raw output did not fully separate Admin, owner user, non-admin user, unauthenticated user, and non-owner user. | Added actor, permission, ownership, and token/session dimensions. |
| Cross-role consistency | A pure transition model may miss that User UI and Admin UI can expose inconsistent actions after one actor changes state. | Added FR10-DT-021 and FR10-DT-022 for User/Admin consistency. |
| UI-only execution scope | Some API-style cases cannot be executed from the frontend after teacher clarification. | Marked API-only inputs as `Blocked` and used UI behavior as the oracle. |
| Evidence and issue mapping | The skill cannot know final screenshots or GitHub issue numbers during design. | Captured UI evidence and mapped failures to `BUG-FR10-001` and `BUG-FR10-002`. |

### Result After Execution

| Result | Count |
| --- | ---: |
| Total FR-10 test cases | 32 |
| Passed | 20 |
| Failed | 7 |
| Blocked | 5 |
| Defects identified | 2 |

### FR-10 Defects Found

| Bug ID | Related Skill Gap | Finding |
| --- | --- | --- |
| BUG-FR10-001 | Boundary between allowed and forbidden user cancellation | Web User can cancel an order while it is already `shipping`. |
| BUG-FR10-002 | Final-state outgoing transition | Admin can move a canceled final-state order to delivered. |

### Cause Analysis

| Finding | Main Cause | Explanation |
| --- | --- | --- |
| `shipping` cancellation by user was accepted | Implementation defect | Requirement expects user cancellation to stop before shipping, but Web User UI still exposes `Hủy đơn`. |
| `canceled -> delivered` was allowed | Implementation defect | Admin UI and backend behavior allow an outgoing transition from final state `canceled`. |
| Some invalid API payload tests were blocked | Execution scope constraint | Teacher clarified that functional testing should use Frontend UI, so missing/unknown status payloads were not forced through API. |
| State-transition matrix needed manual improvement | General skill weakness | Lifecycle features require explicit state variables, initial/final states, transition matrix, and actor permissions. |

### FR-10-Specific vs General Skill Issues

| Issue | Classification | Reason |
| --- | --- | --- |
| User can cancel shipping order | FR-10-specific implementation defect | This is a concrete behavior of the order flow. |
| Admin can mark canceled order delivered | FR-10-specific implementation defect | This is a concrete final-state violation in the SUT. |
| Need state-transition matrix for lifecycle features | General skill improvement | Any feature with states should require current state, target state, initial state, final states, valid/invalid transitions, and repeated transitions. |
| Need actor/permission/ownership dimensions | General skill improvement | State changes often depend on actor role and ownership, not only status values. |
| Need UI/API execution scope separation | General skill improvement | Test design may include API-style domains, but execution status must respect the selected test level and teacher clarification. |

## Decision On Skill Update

For FR-06, no mandatory update to `.agent/SKILL.md` was required because the existing guardrails already covered the main general risks:

- Do not invent unspecified boundaries.
- Do not assert exact unspecified UI text.
- Do not conclude bugs before execution.
- Require human review.

For FR-10, a future skill update is recommended because the missing rule is general, not FR-10-specific:

- When a feature has state, lifecycle, status, workflow, or order progression, require `initial_state`, `current_state`, `target_state`, `final_state`, valid transitions, invalid transitions, repeated transitions, actor role, permission, ownership, and cross-role consistency checks.

The current submission can record this in evaluation without editing `.agent/SKILL.md` immediately, unless the final commit plan includes a dedicated skill-fix commit.

## FR-15 Skill Evaluation

### What The Skill Generated Correctly

| Area | Result |
| --- | --- |
| CRUD coverage | Correctly covered create, view, update, delete, list refresh, cancel edit, and delete persistence. |
| Required fields | Correctly identified name, price, and category as the main validation domains. |
| Boundary values | Correctly selected name length `0/1/254/255/256` and price values around `> 0`. |
| Update isolation | Correctly treated "only the selected product changes" as a high-priority test condition. |
| Authorization risk | Included unauthenticated and non-admin access as important domain classes. |

### What Needed Human Review

| Weakness | Observation After Execution | Required Human Action |
| --- | --- | --- |
| UI reachability | Missing category, invalid category ID, non-existing product ID, and direct unauthorized writes could not be produced from Admin UI. | Marked these cases as `Blocked` instead of forcing API execution. |
| Browser vs application validation | Browser blocked empty name and non-numeric price, but application logic accepted whitespace name, empty price, zero/negative price, and overlong name. | Recorded actual validation layer behavior separately. |
| Decimal price ambiguity | The requirement says positive number and the UI accepts/displays decimal `0.01` as `0,01 VND`. | Marked the testcase as passed and kept it as a requirement clarification if integer-only VND is expected. |
| Immediate UI state | Persisted data after reload was correct, but immediate UI table showed many rows renamed after one product update. | Split immediate UI isolation failure from after-reload persistence pass. |

### Result After Execution

| Result | Count |
| --- | ---: |
| Total FR-15 test cases | 48 |
| Passed | 28 |
| Failed | 11 |
| Blocked | 9 |
| Draft defects identified | 5 confirmed defects and 1 price clarification |

### FR-15-Specific vs General Skill Issues

| Issue | Classification | Reason |
| --- | --- | --- |
| Whitespace-only name accepted | FR-15-specific implementation defect | Product name is required but spaces-only value is treated as valid. |
| Empty/zero/negative price accepted | FR-15-specific implementation defect | Product price must be required and greater than `0`. |
| Overlong product name accepted | FR-15-specific implementation defect | Product name max length is explicitly 255 characters. |
| Immediate mass-name UI update | FR-15-specific implementation defect | Admin UI state update violates selected-product-only behavior before reload. |
| Need UI/API reachability review | General skill guardrail | Test design can include API-only domains, but execution status must match the chosen test level. |
| Need browser-vs-application validation distinction | General skill guardrail | HTML input validation may pass while application/backend validation remains incomplete. |

## Final Evaluation Result

The skill is usable but must be reviewed carefully. It generated useful FR-06, FR-10, and FR-15 starting points. FR-10 showed that lifecycle features need stronger state-transition guidance, while FR-15 showed that form/CRUD testing must explicitly distinguish UI-reachable cases, browser-level validation, and application-level validation. Human review remains essential before final execution results are accepted.

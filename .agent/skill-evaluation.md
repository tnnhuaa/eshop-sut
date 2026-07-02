# Skill Evaluation

## Evaluation Feature

- FR-06 Product Detail View.

## Evaluation Goal

Evaluate whether the reusable Domain Testing and Boundary Value Analysis skill can produce useful test design artifacts after the generated output is compared with actual FR-06 execution results.

## Run Log

| Run | Input | Raw Output | Human Review | Improvement |
| --- | --- | --- | --- | --- |
| Initial FR-06 run | `examples/FR06-example/input-requirement.md` | `examples/FR06-example/raw-skill-output.md` | `examples/FR06-example/human-review.md` | Added guardrails for no invented maximum quantity, no exact toast text, no bug conclusion before execution |
| Execution review | `features/FR06_Product_Detail_Web/04-test-cases.csv`, `05-test-execution.md` | Manual results: 21 executed, 11 passed, 10 failed | Compared generated tests with observed behavior and GitHub Issues `#1` to `#9` | No mandatory skill change; evaluation notes added |

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

## Decision On Skill Update

No mandatory update to `.agent/SKILL.md` is required at this point because the existing guardrails already cover the main general risks:

- Do not invent unspecified boundaries.
- Do not assert exact unspecified UI text.
- Do not conclude bugs before execution.
- Require human review.

The evaluation found useful future reminders, but they can be recorded here without changing the skill implementation. A future skill update may add a stronger reminder to split similar invalid input classes when execution shows different behavior.

## Final Evaluation Result

The skill is usable for the next feature. It generated a solid FR-06 test design that led to meaningful execution results and 9 GitHub Issues. Its output still requires human review, especially for requirement assumptions, bug severity, issue grouping, and evidence validation.

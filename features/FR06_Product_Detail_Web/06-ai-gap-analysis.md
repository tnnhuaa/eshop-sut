# FR-06 AI Gap Analysis

## AI Output Reviewed

| Artifact | Location | Review Status |
| --- | --- | --- |
| Initial FR-06 prompt | `ai/prompts/FR06-prompts.md` | Reviewed |
| Initial AI-generated output | `ai/raw-outputs/FR06-initial-output.md` | Reviewed and corrected |
| Final domain model | `features/FR06_Product_Detail_Web/02-domain-model.md` | Reviewed against execution |
| Final BVA | `features/FR06_Product_Detail_Web/03-boundary-value-analysis.md` | Reviewed against execution |
| Final test cases and execution result | `features/FR06_Product_Detail_Web/04-test-cases.csv`, `05-test-execution.md` | Executed and reviewed |
| GitHub Issues | `#1` to `#9` | Created from confirmed failed tests |

## Execution-Based Review Summary

The AI-assisted FR-06 design was useful because it identified the main input domains, separated Domain Testing from BVA, and created tests that exposed real defects in product detail display, add-to-cart behavior, duplicate cart rows, and quantity validation.

After execution, 21 FR-06 test cases were run manually. The result was 11 passed and 10 failed. The failed tests produced 9 GitHub Issues because two failed tests map to the same first-click add-to-cart defect.

## What The Skill Generated Correctly

| Area | Evidence From Execution | Evaluation |
| --- | --- | --- |
| Quantity as the main BVA variable | Quantity values `0`, `1`, and `2` produced meaningful boundary results | Correct and high-value |
| Invalid quantity classes | Empty, whitespace-related, decimal, negative, and scientific notation tests exposed failures | Correct and high-value |
| Product ID domain partitions | Non-existing, non-numeric, and negative product IDs were executed without crash | Useful for confirming robustness |
| Cross-feature cart behavior | Repeated add test found duplicate cart rows | Correct to include because FR-06 triggers cart behavior |
| Category display assumption | Execution confirmed category is not visible | Correctly identified requirement risk |
| Safe rendering test | Script-looking product data did not execute | Useful security-oriented negative test |
| Broken image robustness | Broken image did not crash page | Useful robustness check |

## What The Skill Missed Or Needed Human Correction

| Gap | Why It Happened | Human Correction | Scope |
| --- | --- | --- | --- |
| It could over-assume a maximum quantity boundary. | Common e-commerce systems have stock limits, but FR-06 does not specify one. | Kept `999999999` as robustness observation, not strict BVA failure. | General skill risk |
| It could over-specify exact feedback wording. | The requirement allows visual feedback but does not define exact toast text. | Expected result accepts any clear cart update or confirmation. | General skill risk |
| It did not know execution would reveal a two-click add-to-cart behavior. | This is implementation behavior not visible from the requirement alone. | Added/kept one-click behavior as a manual test and reported BUG-FR06-001 after execution. | FR-06-specific execution finding |
| It needed human judgment to split empty and whitespace cases. | Both can lead to empty/invalid values, but they are different input actions. | Tracked direct empty quantity as BUG-FR06-006 and whitespace-related invalid value as BUG-FR06-007. | General test-design improvement |
| It needed human judgment to split decimal and scientific notation cases. | Both are non-integer numeric-like inputs, but they use different browser/input parsing behavior. | Tracked decimal as BUG-FR06-008 and scientific notation as BUG-FR06-009. | General test-design improvement |
| It could not confirm GitHub Issues or evidence. | AI can draft reports but cannot replace executed evidence. | Created issues manually and left screenshot/API evidence as student-owned evidence work. | General limitation |

## Cause Classification

| Issue / Observation | Main Cause | Explanation |
| --- | --- | --- |
| Missing category display | Requirement + implementation gap | FR-06 requires category, but category format is underspecified and UI shows none. |
| Two-click add-to-cart | Implementation defect | Requirement implies one valid add action should work; execution showed first click is ignored. |
| Duplicate cart rows | Implementation / integration defect | FR-06 action triggers FR-07 cart behavior, but same product is not merged. |
| Quantity `0` and negative accepted | Implementation validation defect | Requirement clearly requires positive integer with minimum `1`. |
| Empty and whitespace-related invalid quantity | Implementation validation defect | Requirement does not spell out every invalid class, but positive integer excludes empty/invalid values. |
| Decimal and scientific notation parsed incorrectly | Requirement gap + implementation validation defect | Requirement says positive integer; implementation does not enforce integer-only input robustly. |
| Very large quantity accepted | Requirement gap / robustness risk | No maximum or stock rule is defined, so this is not a strict failure unless app breaks. |

## Accepted AI Contributions

| Contribution | Decision | Reason |
| --- | --- | --- |
| Use quantity as the main BVA variable | Accepted | FR-06 explicitly defines minimum quantity as `1`. |
| Separate Domain Testing from BVA | Accepted | Keeps invalid non-boundary classes separate from numeric boundary analysis. |
| Include both UI display and cart update observations | Accepted | FR-06 includes product detail display and add-to-cart behavior. |
| Include risky product data and broken image cases | Accepted | Admin-created product data can later appear on product detail page. |
| Include repeated add behavior | Accepted | FR-06 add action integrates with cart behavior. |

## Modified Contributions

| Original Direction | Final Human-Reviewed Direction |
| --- | --- |
| Treat product ID values as possible BVA | Treat product ID values as route/domain partitions because SRS does not define an ID range |
| Treat large quantity as invalid by requirement | Treat large quantity as robustness observation because SRS has no maximum |
| Require a toast message | Accept toast, cart badge update, or other clear visible confirmation |
| Group all invalid numeric-like quantity values together | Split decimal and scientific notation into separate bug reports |
| Group empty and spaces together | Track direct empty input and whitespace-related invalid value separately |

## Rejected Contributions

| Rejected Item | Reason |
| --- | --- |
| Any expected result not traceable to FR-06, FR-07, FR-21/FR-22, or a clearly marked assumption | Violates traceability and risks inventing requirements |
| Any bug conclusion before execution | Bugs require actual observed behavior and evidence |
| Treating robustness values as formal boundaries | The SRS only defines minimum quantity, not maximum quantity or stock limit |

## Final Human Review Result

Status: Accepted after execution-based correction.

The AI-assisted test design was effective for FR-06 and helped reveal 9 reportable defects. The main weakness was not the generated structure but the need for human judgment to avoid invented requirements, split similar-looking input classes, and classify whether a failure came from requirement ambiguity, prompt limitation, skill limitation, or implementation behavior.

Evidence screenshots and API evidence are intentionally left for the student to add under `features/FR06_Product_Detail_Web/evidence/`.

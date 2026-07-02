# FR-06 AI Gap Analysis

## AI Output Reviewed

| Artifact | Location | Review Status |
| --- | --- | --- |
| Initial FR-06 requirement analysis prompt | `ai/prompts/FR06-prompts.md` | Reviewed |
| Initial AI-generated FR-06 output | `ai/raw-outputs/FR06-initial-output.md` | Reviewed and corrected |
| Final domain model | `features/FR06_Product_Detail_Web/02-domain-model.md` | Human-reviewed draft |
| Final BVA | `features/FR06_Product_Detail_Web/03-boundary-value-analysis.md` | Human-reviewed draft |
| Final test cases | `features/FR06_Product_Detail_Web/04-test-cases.csv` | Human-reviewed draft |

## Review Summary

The AI-assisted design was useful for structuring FR-06 into inputs, outputs, equivalence partitions, boundary values, and candidate test cases. However, the raw AI design required correction because it could easily overstate requirements that the SRS does not define, especially maximum quantity, exact feedback text, product ID ranges, and category display format.

## Missing Or Incorrect AI Suggestions

| Gap | Why AI Missed It | Human Correction |
| --- | --- | --- |
| Maximum quantity was initially tempting to define as a boundary. | The AI may infer e-commerce stock limits from common systems. FR-06 does not define stock or max quantity. | Treated very large quantity as robustness testing, not a formal BVA boundary. |
| Exact toast text was not defined. | The requirement says toast notification or badge update, but does not specify wording. | Expected result accepts any visible confirmation or cart badge/count update. |
| Category display was under-specified. | The API may expose `category_id`, while SRS only says category. | Marked human-readable category as an assumption and linked it to FR06-GAP-02. |
| Non-existing product ID behavior was not specified. | AI may focus only on happy path product detail display. | Added domain tests for non-existing, non-numeric, and negative product IDs. |
| Quantity invalid classes needed broader coverage. | AI often covers only 0/1/2 and misses pasted text/empty/scientific notation. | Added invalid partitions for text, empty, spaces, decimal, negative, and scientific notation. |
| Safe display of product data was not explicit in FR-06. | AI may not connect FR-15-created data to FR-06 display risk. | Added HTML/script-looking product name/description test as a cross-feature risk. |
| One-click add-to-cart behavior was not explicit but important. | AI might accept any eventual add behavior without checking first-click semantics. | Added test that one valid click should update cart and feedback. |

## Accepted AI Contributions

| Contribution | Decision | Reason |
| --- | --- | --- |
| Use quantity as the main BVA variable. | Accepted | FR-06 explicitly defines minimum quantity as 1. |
| Separate Domain Testing from BVA. | Accepted | Keeps invalid non-boundary classes separate from numeric boundary analysis. |
| Include both UI display and cart update observations. | Accepted | FR-06 has both display and add-to-cart behavior. |

## Modified Contributions

| Original AI Direction | Final Human-Reviewed Direction |
| --- | --- |
| Treat product ID boundary values as BVA. | Treat product ID values as domain/route partitions because SRS does not define an ID range. |
| Treat large quantity as invalid by requirement. | Treat large quantity as robustness observation because SRS has no maximum. |
| Require a toast. | Accept toast or cart badge/count update because SRS allows visual feedback generally. |

## Rejected Contributions

| Rejected Item | Reason |
| --- | --- |
| Any expected result not traceable to FR-06, FR-21, or a clearly marked assumption. | Violates traceability and risks inventing requirements. |
| Any bug conclusion before execution. | Day 3 is test design only; bugs require evidence from execution. |

## Manually Added Test Ideas

| Test Idea | Why Added |
| --- | --- |
| Non-existing product ID. | Requirement gap likely to reveal blank/error page behavior. |
| HTML/script-looking product data. | Cross-feature safety risk from admin-created products. |
| One-click Add to Cart. | Important user workflow assumption. |
| Same product added twice from detail. | Cross-reference to FR-07 cart merge behavior. |

## Final Human Review Result

Status: Accepted after modifications. The FR-06 test design is ready for execution planning, but all `ActualResult`, `Status`, `Evidence`, and `BugID` fields remain `TODO` until tests are executed on the running SUT.

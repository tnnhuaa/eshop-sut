# FR-14 AI Gap Analysis

## AI Output Reviewed

| Artifact | Location | Review Status |
| --- | --- | --- |
| Raw skill output | `features/FR-14_Category CRU/raw-skill-output.md` | Reviewed |
| Human review | `features/FR-14_Category CRU/human-review.md` | Accepted with modifications |
| Requirement analysis | `features/FR-14_Category CRU/01-requirement-analysis.md` | Finalized for test design |
| Domain model | `features/FR-14_Category CRU/02-domain-model.md` | Finalized for test design |
| BVA | `features/FR-14_Category CRU/03-boundary-value-analysis.md` | Finalized for test design |
| Test cases | `features/FR-14_Category CRU/04-test-cases.csv` | Ready for execution |

## Missing Or Incorrect AI Suggestions

| Gap | Why AI Missed It | Human Correction |
| --- | --- | --- |
| Update scope ambiguity | The feature label says CRUD and API supports `PUT`, so raw generation could over-include update. | Update is recorded as a clarification case, not mandatory FR-14 coverage. |
| Maximum name boundary | CRUD features often have hidden DB/string limits, but FR-14 does not specify one. | No official upper-bound BVA is created; long names are robustness only. |
| Duplicate category uniqueness | Many category systems enforce unique names, but FR-14 does not say so. | Duplicate names are exploratory and not a strict pass/fail oracle. |
| Referenced-category deletion | Deleting categories may affect products, but the requirement does not define dependency behavior. | Treat as integration risk and require human judgment/evidence during execution. |

## Accepted AI Contributions

| Contribution | Decision | Reason |
| --- | --- | --- |
| Split FR-14 into add, view, and delete operations | Accepted | Matches the primary requirement bullets. |
| Focus domain testing on category name | Accepted | Name is the only explicit input constraint. |
| Use `0`, `1`, and `2` length values for BVA | Accepted | These cover the required-name lower boundary. |
| Keep execution fields as `TODO` / `Not Run` | Accepted | The skill designs tests and does not execute them. |
| Include authorization classes | Accepted | FR-12 supports Admin-only behavior for data-changing APIs. |

## Modified Contributions

| Original AI Direction | Final Human-Reviewed Direction |
| --- | --- |
| Treat update as normal CRUD coverage | Treat update as a requirement gap/clarification because FR-14 bullets omit it. |
| Treat very long name as a boundary | Treat very long name as robustness only. |
| Treat duplicate name as invalid | Treat duplicate name as exploratory unless uniqueness is confirmed. |
| Assert exact error text | Assert rejection/unchanged data and record actual feedback during execution. |

## Rejected Contributions

| Rejected Item | Reason |
| --- | --- |
| Invented maximum category-name length | Not specified by FR-14. |
| Bug conclusions before execution | No execution evidence exists yet. |
| Mandatory update failure if UI lacks edit | Update requirement is ambiguous. |
| Mandatory cascade/block rule for referenced category delete | Dependency behavior is not specified. |

## Human Review Decision

The AI-generated test design is accepted as a reviewed draft for FR-14 Domain Testing and BVA. Final execution still requires manual verification of expected results, evidence capture, and status updates.

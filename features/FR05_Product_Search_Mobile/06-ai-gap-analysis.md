# FR-05-M AI Gap Analysis

## AI Output Reviewed

| Artifact | Location | Review Status |
| --- | --- | --- |
| Raw skill output | `.agent/examples/FR05-example/raw-skill-output.md` | Reviewed |
| Human review | `.agent/examples/FR05-example/human-review.md` | Accepted with corrections |
| Final output | `.agent/examples/FR05-example/final-output.md` | Used to update feature artifacts |
| Domain model | `features/FR05_Product_Search_Mobile/02-domain-model.md` | Updated |
| BVA | `features/FR05_Product_Search_Mobile/03-boundary-value-analysis.md` | Updated |
| Test cases | `features/FR05_Product_Search_Mobile/04-test-cases.csv` | Executed and updated |

## Missing Or Incorrect AI Suggestions

| Gap | Why AI Missed It | Human Correction |
| --- | --- | --- |
| Literal web requirements on mobile | FR-05 includes web-specific terms such as grid, `alt`, and `<h1>`. Generic output may assert them literally. | Treated them as mobile adaptation gaps and used mobile-equivalent checks. |
| Exact empty/loading text | AI may invent expected UI wording. | Expected a clear state, not exact text. |
| Search matching rules | Requirement does not define case sensitivity, trimming, or accent behavior. | Added assumptions and test cases that record observed behavior. |
| Mobile execution surface | AI may suggest Browser/web execution because FR-05 is web-like. | Execution must use real device/emulator for FR-05-M. |
| Seed data control | AI can produce cases without stable data. | Added dedicated FR05M seed products and a seed script. |
| Network/backend IP risk | Mobile app uses LAN IP, which can fail across networks. | Added environment/network cases and asked tester to record device setup. |

## Accepted AI Contributions

| Contribution | Decision | Reason |
| --- | --- | --- |
| Split listing and search behavior | Accepted | Matches FR-05 requirement structure. |
| Include safe keyword display | Accepted | Direct requirement: keyword must not render HTML. |
| Include empty state and loading state | Accepted | Both are explicit FR-05 requirements. |
| Include result-count boundaries | Accepted | Empty state creates a useful 0/1/many boundary model. |
| Include robustness values for long/special keywords | Accepted | Useful risk classes, clearly marked as robustness rather than formal limits. |

## Modified Contributions

| Original AI Direction | Final Human-Reviewed Direction |
| --- | --- |
| Check product grid literally | Check mobile product-card/list layout and scrolling. |
| Check image `alt` literally | Check visible image and note accessibility label as mobile gap. |
| Check exactly one `<h1>` literally | Check visible page title/header; literal `<h1>` is not applicable to React Native execution. |
| Treat no maximum keyword length as boundary | Treat 256 characters as robustness, not a specified boundary. |
| Treat API result as enough evidence | Require mobile UI observation and screenshots for execution evidence. |

## Rejected Contributions

| Rejected Item | Reason |
| --- | --- |
| Exact wording assertions for empty/loading messages | Requirement does not specify exact text. |
| Browser-only execution for FR-05-M | The feature is selected as Mobile; Browser does not represent React Native UI behavior. |
| Bug conclusions before manual execution | Skill is for design only; defects require evidence. |

## Execution-Based Review

| Question | Answer |
| --- | --- |
| What did the skill generate correctly? | It generated useful coverage for default listing, search partitions, no-result search, safe keyword display, long keyword robustness, loading, and mobile environment risks. |
| What did execution confirm? | Manual mobile execution found four defect groups: untrimmed whitespace search, missing empty state for no-result searches, header/home navigation preserving an old filtered result, and layout break for a very long keyword. |
| What did the skill miss? | The skill identified trimming, empty state, and long keyword as test targets, but did not initially include a navigation/state-reset case for returning Home through the header/logo. |
| Was the issue caused by requirement, prompt, or implementation? | Missing empty state is an implementation defect because FR-05 explicitly requires empty state. Trimming and Home reset behavior are reviewed assumptions/gaps for usable search behavior. Long keyword layout is a robustness/UI defect because no max length is specified but layout should remain usable. |
| Is this FR-05-M-specific or general? | Empty state and search-state reset are FR-05-M-specific. Input trimming and long-input layout robustness are general UI testing concerns. |

## Result After Execution

| Result | Count |
| --- | ---: |
| Total FR-05-M test cases | 25 |
| Passed | 20 |
| Failed | 5 |
| Blocked | 0 |
| GitHub issues opened | 4 |

## Defects Found

| Bug ID | Related Tests | Finding |
| --- | --- | --- |
| BUG-FR05M-001 / `#18` | FR05M-DT-005 | Search keyword with leading/trailing spaces is not trimmed. |
| BUG-FR05M-002 / `#19` | FR05M-DT-007, FR05M-BVA-003 | Search with no matching products shows a blank result area instead of a suitable empty state. |
| BUG-FR05M-003 / `#20` | FR05M-DT-018 | Returning to Home from the header/logo keeps the previous search results instead of resetting to the default product listing. |
| BUG-FR05M-004 / `#21` | FR05M-BVA-006 | Very long search keyword breaks the mobile result-label layout. |

## Remaining Follow-Up

- GitHub Issues `#18` to `#21` were opened for the FR-05-M findings.
- If a later emulator run succeeds, use it only as supporting confirmation because the primary execution already came from the mobile environment.
- If the teacher asks about trimming or Home reset, explain that both were treated as reviewed usability assumptions/gaps for FR-05-M search behavior.

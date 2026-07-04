# FR-05-M AI Gap Analysis

## AI Output Reviewed

| Artifact | Location | Review Status |
| --- | --- | --- |
| Raw skill output | `.agent/examples/FR05-example/raw-skill-output.md` | Reviewed |
| Human review | `.agent/examples/FR05-example/human-review.md` | Accepted with corrections |
| Final output | `.agent/examples/FR05-example/final-output.md` | Used to update feature artifacts |
| Domain model | `features/FR05_Product_Search_Mobile/02-domain-model.md` | Updated |
| BVA | `features/FR05_Product_Search_Mobile/03-boundary-value-analysis.md` | Updated |
| Test cases | `features/FR05_Product_Search_Mobile/04-test-cases.csv` | Draft, not executed |

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

## Remaining Before Execution

- Run `node test-data/seed-fr05-mobile-products.js`.
- Start backend and mobile app.
- Confirm mobile device/emulator can reach the backend API URL.
- Execute the 24 draft test cases and fill `ActualResult`, `Status`, `Evidence`, and `BugID`.

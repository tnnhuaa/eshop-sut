# Human Review - FR-05-M

## Accepted

| Item | Decision | Reason |
| --- | --- | --- |
| Split listing/search/display states | Accepted | Matches the feature requirement. |
| Include safe keyword display cases | Accepted | Directly required by FR-05. |
| Include empty/loading states | Accepted | Directly required by FR-05. |
| Use 0/1/many result-count boundary | Accepted | Empty state creates a useful boundary model. |
| Add seed products | Accepted | Manual mobile testing needs stable data. |

## Modified

| Generated Direction | Human-Reviewed Direction |
| --- | --- |
| Check web grid literally | Check mobile product-card/list layout and scrolling. |
| Check `alt` literally | Check image visibility; accessibility label is a mobile adaptation gap. |
| Check one `<h1>` literally | Check visible mobile page title/header; literal `<h1>` is not directly applicable. |
| Treat long keyword as specified max boundary | Treat long keyword as robustness because no max length is specified. |
| Use Browser as possible execution surface | Use real device/emulator for mobile execution; Browser can only support backend checks. |

## Rejected

| Item | Reason |
| --- | --- |
| Exact empty-state wording | Requirement only says suitable empty state. |
| Exact loading-state wording | Requirement only says loading state. |
| Bug conclusions before execution | Manual evidence is still required. |
| API-only pass/fail evidence | FR-05-M is selected as mobile functional testing. |

## Added Manually

- `FR05M-DT-016` for mobile page title/header as adaptation of the `<h1>` requirement.
- `FR05M-DT-017` for backend/network unreachable behavior.
- `FR05M-BVA-007` for loading transition.
- Seed script `test-data/seed-fr05-mobile-products.js`.

## Final Review Decision

The design is accepted as a draft test design for manual mobile execution. The student must execute on a real device or emulator and fill actual results, status, evidence, and bug IDs after testing.

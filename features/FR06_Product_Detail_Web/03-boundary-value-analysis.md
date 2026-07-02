# FR-06 Boundary Value Analysis

## Test Basis

- Requirement ID: FR-06.
- Boundary explicitly defined by SRS: quantity minimum value is `1`.
- Boundary implied by FR-06 data display: product must exist for detail page to show required content.
- Boundary not defined by SRS: maximum quantity, maximum price, maximum product name/description length.

## Boundary Rules

| Rule ID | Boundary Rule | Source / Decision |
| --- | --- | --- |
| BVA-R01 | For quantity minimum `1`, test just below, at, and just above: `0`, `1`, `2`. | Explicit FR-06 rule. |
| BVA-R02 | Invalid non-integer quantity values are domain tests, not numeric boundary values. | Positive integer rule. |
| BVA-R03 | Very large quantity is robustness testing, not a specification boundary. | No maximum quantity in SRS. |
| BVA-R04 | Non-existing product ID is a domain/route negative test, not a true BVA boundary. | No product ID range in SRS. |

## Boundary Table

| Boundary ID | Variable | Boundary | Values To Test | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| B-FR06-QTY-MIN | `quantity` | Minimum valid quantity = 1 | `0`, `1`, `2` | `0` rejected; `1` and `2` accepted | High |
| B-FR06-QTY-EMPTY | `quantity` | Required numeric input | empty | Rejected; cart unchanged | High |
| B-FR06-QTY-DECIMAL | `quantity` | Integer-only boundary | `1.5` | Rejected; cart unchanged | High |
| B-FR06-QTY-NEGATIVE | `quantity` | Below zero invalid partition | `-1` | Rejected; cart unchanged | High |
| B-FR06-QTY-LARGE | `quantity` | No defined maximum | `999999999` | Robustness observation; app should not crash | Medium |
| B-FR06-PID-EXIST | `product_id` | Existing vs non-existing resource | existing ID `1`, non-existing ID `999999` | Existing displays detail; non-existing handled clearly | Medium |

## Boundary Value Test Ideas

| Test Idea ID | Boundary | Test Data | Expected Result | Notes |
| --- | --- | --- | --- | --- |
| BVA-01 | Quantity just below minimum | `quantity=0` | Reject; no cart update | Core negative boundary. |
| BVA-02 | Quantity at minimum | `quantity=1` | Accept; add 1 item | Core positive boundary. |
| BVA-03 | Quantity just above minimum | `quantity=2` | Accept; add 2 items | Core positive boundary. |
| BVA-04 | Empty quantity | empty | Reject; no cart update | Required input boundary. |
| BVA-05 | Decimal quantity | `1.5` | Reject; no cart update | Integer-only test. |
| BVA-06 | Very large quantity | `999999999` | App should not crash; result reviewed as robustness | Not a formal spec boundary. |

## Values Not Treated As Specification Boundaries

| Value / Area | Reason |
| --- | --- |
| Maximum quantity | SRS does not define stock or maximum quantity. |
| Product ID numerical range | Product ID is an implementation identifier; SRS does not define valid ID range. |
| Price limits | FR-06 displays price but does not define product price constraints. |
| Product name length | FR-06 displays name; FR-15 owns product input constraints. |

## Human Review Decision

The accepted BVA set for FR-06 is centered on `quantity` because it is the only explicit numerical boundary in FR-06. Other values such as product ID existence and very large quantity are included as domain or robustness tests and must not be described as official requirement boundaries.

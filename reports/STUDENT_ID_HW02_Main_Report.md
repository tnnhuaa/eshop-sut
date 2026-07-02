# HW02 Main Report - Domain Testing and Boundary Value Analysis

## Student Information

- Student ID: TODO
- Full name: TODO
- Class: TODO
- Repository: TODO
- SUT commit hash: `85af3ba875c88283615e22cb108f13e2fccaf0e9`

## Scope

| Pool | Feature | Platform | Status |
| --- | --- | --- | --- |
| A | FR-06 Product Detail View | Web User | Planned |
| B | FR-10 Order State Machine | API + Web | Planned |
| C | FR-15 Product Management CRUD | Admin Web + API | Planned |
| D | FR-05 Product Listing and Search | Mobile | Planned |

## Method

The report applies Domain Testing and Boundary Value Analysis with AI assistance. All AI outputs must be reviewed and corrected by the student before submission.

## Feature Reports

### FR-06 Product Detail View

- Requirement analysis: `features/FR06_Product_Detail_Web/01-requirement-analysis.md`
- Domain model: `features/FR06_Product_Detail_Web/02-domain-model.md`
- Boundary value analysis: `features/FR06_Product_Detail_Web/03-boundary-value-analysis.md`
- Test cases: `features/FR06_Product_Detail_Web/04-test-cases.csv`
- Execution: `features/FR06_Product_Detail_Web/05-test-execution.md`
- AI gap analysis: `features/FR06_Product_Detail_Web/06-ai-gap-analysis.md`

Day 3 status: FR-06 test design and manual execution completed with 21 test cases: 15 Domain Testing cases and 6 Boundary Value Analysis cases. The main explicit boundary is quantity minimum `1`, tested with `0`, `1`, and `2`. Additional domain tests cover invalid product IDs, invalid quantity classes, add-to-cart feedback, repeated add behavior, broken image URL, and safe rendering of HTML/script-looking product data. Manual execution result: 11 passed, 10 failed, 0 not run.

### FR-10 Order State Machine

- Requirement analysis: `features/FR10_Order_State_Machine/01-requirement-analysis.md`
- State transition model: `features/FR10_Order_State_Machine/02-state-transition-model.md`
- Domain model: `features/FR10_Order_State_Machine/03-domain-model.md`
- Boundary value analysis: `features/FR10_Order_State_Machine/04-boundary-value-analysis.md`
- Test cases: `features/FR10_Order_State_Machine/05-test-cases.csv`
- Execution: `features/FR10_Order_State_Machine/06-test-execution.md`
- AI gap analysis: `features/FR10_Order_State_Machine/07-ai-gap-analysis.md`

### FR-15 Product Management CRUD

- Requirement analysis: `features/FR15_Product_CRUD_Admin/01-requirement-analysis.md`
- Domain model: `features/FR15_Product_CRUD_Admin/02-domain-model.md`
- Boundary value analysis: `features/FR15_Product_CRUD_Admin/03-boundary-value-analysis.md`
- Test cases: `features/FR15_Product_CRUD_Admin/04-test-cases.csv`
- Execution: `features/FR15_Product_CRUD_Admin/05-test-execution.md`
- AI gap analysis: `features/FR15_Product_CRUD_Admin/06-ai-gap-analysis.md`

### FR-05-M Product Listing and Search on Mobile

Pool D - FR-05-M Product Listing and Search on Mobile.

- Requirement analysis: `features/FR05_Product_Search_Mobile/01-requirement-analysis.md`
- Domain model: `features/FR05_Product_Search_Mobile/02-domain-model.md`
- Boundary value analysis: `features/FR05_Product_Search_Mobile/03-boundary-value-analysis.md`
- Test cases: `features/FR05_Product_Search_Mobile/04-test-cases.csv`
- Execution: `features/FR05_Product_Search_Mobile/05-test-execution.md`
- AI gap analysis: `features/FR05_Product_Search_Mobile/06-ai-gap-analysis.md`

## Summary

| Metric | Count |
| --- | ---: |
| Features | 4 |
| Test cases designed | 21 for FR-06; TODO for remaining features |
| Test cases executed | 21 for FR-06; TODO for remaining features |
| Passed | 11 for FR-06; TODO for remaining features |
| Failed | 10 for FR-06; TODO for remaining features |
| Not executed | TODO |
| Bugs reported | TODO |

## References

- EShop SRS in repository `README.md`
- ISTQB Foundation Level CTFL v4.0.1 study guide
- HW02 assignment brief

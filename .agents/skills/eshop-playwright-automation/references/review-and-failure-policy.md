# Review and Failure Policy

## Classification order

1. **Automation fault**: selector, wait, assertion, isolation, or script logic is wrong.
2. **Data fault**: scenario data or seed state conflicts with the requirement.
3. **Environment fault**: a service, browser, dependency, port, or credential blocks a valid run.
4. **Candidate product defect**: test, data, and environment are sound, but observed behavior violates the requirement.

Fix categories 1–3 and rerun. Keep category 4 failing and preserve evidence.

## Human-review draft

Record the test ID, source requirement, observed behavior, reproduced browsers, real evidence path, agent classification, and a student decision left `PENDING`.

## Defect gate

Do not publish a GitHub Issue until the student explicitly confirms the candidate. Before confirmation, prepare only a draft body. Never reuse HW02/HW03 execution artifacts as HW04 evidence; label any such material as reference only.

# HW04 Agent Rules

## Scope

- Use CodeGraph before grep or broad file reads when `.codegraph/` exists.
- Automate only FR06, FR10, and FR15 for HW04.
- Keep test data in `test-data/<feature>/`; do not hardcode scenario arrays in specs.
- Do not change SUT behavior to make an assertion pass.
- Never fabricate execution evidence, identity evidence, reports, screenshots, defects, or human-review decisions.

## Ownership

- The primary agent owns root configuration, `tests/support/`, scripts, reports, audit, and integration.
- `fr06_product_detail_agent` may edit only `tests/fr06/` and `test-data/fr06/`.
- `fr10_state_machine_agent` may edit only `tests/fr10/` and `test-data/fr10/`.
- `fr15_product_crud_agent` may edit only `tests/fr15/` and `test-data/fr15/`.
- Feature agents must not edit shared configuration or another feature's files.

## Automation quality

- Prefer role, label, placeholder, text, and scoped table-row selectors over CSS structure selectors.
- Prefer Playwright web-first assertions and event-based waits; do not use `waitForTimeout`.
- Every spec title must include its HW02 TestCaseID.
- Keep product failures visible; do not weaken expected results to match defective behavior.
- Classify failures as automation, data, environment, or candidate product defect.

## Human gates

- A candidate defect becomes a GitHub Issue only after the student responds `CONFIRM <BugID>`.
- The student must complete and sign human-review decisions.
- Video recording, narration, `whoami`, `hostname`, YouTube upload, and Moodle submission remain manual.

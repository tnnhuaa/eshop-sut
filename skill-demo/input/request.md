# Forward-test request: FR06

Use the repository-local `eshop-playwright-automation` skill to audit the existing FR06 automation package without editing production tests.

Inputs:

- Spec: `tests/fr06/product-detail.spec.ts`
- Data: `test-data/fr06/product-detail-scenarios.json`
- Chromium report: `artifacts/html-reports/FR06/chromium/2026-08-06T08-23-17.709Z`

Tasks:

1. Validate the scenario data using the skill script.
2. Inspect the inputs and prepare `skill-demo/output/forward-test-review.md` with exact scenario totals, policy checks, candidate-defect handling, and human-review fields.
3. Build `skill-demo/output/manifest.json` using the skill script.
4. Do not edit files outside `skill-demo/output/`.
5. Do not claim a new browser run, invent evidence, confirm a defect, create an issue, or fill a student signature/decision.

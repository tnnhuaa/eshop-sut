---
name: eshop-playwright-automation
description: Build, maintain, execute, and review data-driven Playwright automation for an EShop web feature. Use when converting existing test cases into external JSON scenarios and Playwright specs, running Chromium/Firefox/Edge reports, diagnosing flaky or failing EShop tests, preparing human-review drafts, or producing a manifest of automation artifacts without fabricating evidence or defects.
---

# Eshop Playwright Automation

## Overview

Create reproducible EShop Playwright automation from requirements and existing manual test cases. Keep scenario data external, preserve product behavior, collect browser-specific evidence, and leave every defect decision to the student.

## Required References

Read `references/automation-contract.md` and `references/review-and-failure-policy.md` before changing tests or classifying a failure. Use `assets/scenario-template.json` when starting new scenario data.

## Workflow

1. Inspect the feature requirement, current tests, routes, APIs, and test data. State missing inputs instead of inventing them.
2. Map requirement coverage and identify gaps. Reuse stable helpers and selectors, but never reuse old execution evidence as current evidence.
3. Create at least 12 external JSON scenarios unless the user explicitly sets another count. Use unique IDs and at least three assertion types across the set.
4. Validate data with `node .agents/skills/eshop-playwright-automation/scripts/validate-scenarios.mjs <data-file> [minimum-count]`.
5. Implement focused Playwright specs under `tests/<feature>/`. Load case inputs and expected results from JSON.
6. Run type checking, Playwright discovery, and Chromium, Firefox, and Microsoft Edge unless the user narrows the scope.
7. Diagnose failures in the order defined by the review policy. Fix automation, data, and environment faults; do not weaken assertions to hide a candidate product defect.
8. Prepare a human-review draft and mark every candidate defect `PENDING STUDENT REVIEW`.
9. Build an evidence manifest with `node .agents/skills/eshop-playwright-automation/scripts/build-manifest.mjs --feature <id> --spec <path> --data <path> --report <path> --browser <name> --output <path>`.
10. Report exact totals, evidence paths, and unresolved blockers.

## Guardrails

- Do not modify the application under test to make automation pass unless the user separately authorizes a product fix.
- Do not fabricate test runs, evidence, timestamps, defects, or GitHub Issues.
- Do not create a GitHub Issue until the student explicitly confirms the candidate defect.
- Do not fill the student's decision, authorship proof, reflection, or signature.
- Do not expose credentials, tokens, private absolute paths, or environment secrets.
- Keep execution deterministic and use one worker when shared state can collide.

## Completion Gate

Complete only when scenario validation passes, Playwright discovers the intended tests, requested runs have real reports, and the review draft separates automation faults from candidate product defects. Otherwise return `INCOMPLETE` with the missing item and next action.


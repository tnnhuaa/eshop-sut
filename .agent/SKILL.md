---
name: domain-bva-test-designer
description: Apply Domain Testing and Boundary Value Analysis to a feature requirement and produce human-reviewed test design artifacts. Use when a Software Testing homework or EShop feature needs requirement analysis, requirement gap identification, input-domain modeling, equivalence partitioning, boundary values, test cases, human-review checklist, and AI gap analysis.
---

# Domain and BVA Test Designer

## Purpose

Support Domain Testing and Boundary Value Analysis for software testing assignments. The skill turns a feature requirement into reviewed test design artifacts: requirement table, gap table, input variables, equivalence partitions, boundary values, test cases, assumptions, human-review checklist, and AI gap-analysis skeleton.

This skill designs tests. It does not execute tests, confirm bugs, open GitHub Issues, or replace human review.

## Required Input

Provide these fields before using the skill:

- Feature ID.
- Feature name.
- Platform.
- Actor.
- Requirement/specification text.
- Known constraints.
- Known assumptions.
- Expected output format.

Optional but useful:

- Supporting requirements.
- API contract.
- UI route/screen.
- Existing requirement gaps.
- Test data constraints.
- Special feature type such as state machine, CRUD, search, authentication, or mobile.

## Processing Procedure

1. **Requirement analysis**
   - Identify the primary test basis.
   - Split the requirement into testable requirement items.
   - Record actors, preconditions, outputs, and business rules.

2. **Requirement gap detection**
   - List missing, ambiguous, or conflicting requirements.
   - Explain why each gap matters for testing.
   - Create temporary assumptions only when needed for test design.
   - Mark assumptions clearly.

3. **Input-domain identification**
   - Identify all input variables, state variables, data fields, user actions, and external conditions.
   - Separate direct inputs from setup data and observations.

4. **Equivalence partitioning**
   - Create valid and invalid partitions for each input variable.
   - Include risky classes such as empty, malformed, unauthorized, missing, duplicate, unsafe text, and not-found values when relevant.
   - Keep representative values traceable to the specification or a marked assumption.

5. **Boundary identification**
   - Identify explicit boundaries from the requirement.
   - Add just-below, at, and just-above values for numeric or length boundaries.
   - Mark robustness values separately when no specification boundary exists.

6. **Test combination selection**
   - Select a focused set of combinations that covers all important partitions and boundaries.
   - Avoid combinatorial explosion.
   - Prioritize high-risk and user-visible behavior.

7. **Test-case generation**
   - Produce test cases with ID, feature, technique, preconditions, input, steps, expected result, actual result, status, evidence, and bug ID.
   - Leave execution fields as `TODO` or `Not Run` until executed.

8. **Human review**
   - Mark generated items as accepted, modified, rejected, or manually added.
   - Require the student to review expected results before execution.

9. **AI gap-analysis skeleton**
   - Identify what the AI missed or over-assumed.
   - Explain why the miss happened.
   - Record the human correction.

## Output

The skill should create or update:

- Requirement table.
- Requirement gap table.
- Input variable table.
- Equivalence partition table.
- Boundary table.
- Test case table.
- Assumptions.
- Human-review checklist.
- AI gap-analysis skeleton.

Use the templates in `templates/`:

- `requirement-analysis-template.md`
- `requirement-gap-template.md`
- `domain-model-template.md`
- `bva-template.md`
- `test-case-template.csv`
- `execution-result-template.md`
- `ai-gap-analysis-template.md`

Use `examples/FR06-example/` as the worked example.

## Guardrails

- Do not use source code as the primary requirement. Source code may provide implementation context only.
- Do not invent maximums, minimums, states, roles, messages, or workflow rules when the requirement does not define them.
- Do not treat robustness values as specification boundaries.
- Do not conclude that behavior is a bug before execution evidence exists.
- Do not treat HTTP 200 or a rendered page alone as enough to conclude pass.
- Do not create exact expected error text unless the requirement specifies exact text.
- Do not silently resolve ambiguous requirements; mark them as assumptions or clarification questions.
- Do not merge expected behavior and observed behavior.
- Do not hide AI uncertainty; require human review.
- Do not mark raw AI output as final without accepted/modified/rejected review.

## Limitations

- The skill supports test design, not test execution.
- The output must be checked manually against the specification and course material.
- Feature-specific contexts such as state machines, CRUD rules, mobile constraints, authentication, or API contracts may need additional input.
- The skill does not open GitHub Issues.
- The skill does not capture screenshots or videos.
- The skill does not confirm defects.
- The skill does not replace the student's AI Audit Report or AI Critique.

## Recommended File Mapping

For an EShop feature folder, map outputs as follows:

- Requirement analysis: `01-requirement-analysis.md`
- Domain model: `02-domain-model.md`
- BVA: `03-boundary-value-analysis.md`
- Test cases: `04-test-cases.csv`
- Execution results: `05-test-execution.md`
- AI gap analysis: `06-ai-gap-analysis.md`

For state-machine features, insert a state-transition model before the domain model if needed.

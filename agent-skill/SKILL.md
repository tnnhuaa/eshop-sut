---
name: domain-bva-test-designer
description: Apply Domain Testing and Boundary Value Analysis to an EShop feature requirement and produce reviewed test design artifacts.
---

# Domain and BVA Test Designer

## Inputs

- Feature ID and requirement text.
- Platform and actor.
- Known constraints from SRS.
- Any API or UI evidence.

## Workflow

1. Extract input variables, output observations, actors, states, and constraints.
2. Define valid and invalid equivalence classes for Domain Testing.
3. Identify numerical, length, state, role, and count boundaries for BVA.
4. Generate candidate test cases with preconditions, steps, data, and expected results.
5. Mark assumptions and gaps.
6. Require human review before finalizing.

## Output

- Requirement summary.
- Domain model table.
- BVA table.
- Test cases in CSV-compatible rows.
- AI gap checklist.

## Quality Rules

- Do not invent requirements beyond the SRS.
- Distinguish expected behavior from observed behavior.
- Include negative tests and security-relevant risky inputs where applicable.
- Explain every boundary with its source requirement.

# FR-15 AI Gap Analysis

## AI Output Reviewed

The repository-local `.agent/SKILL.md` was used to draft Domain Testing and Boundary Value Analysis artifacts for FR-15 Product CRUD Admin. The raw output was stored in `.agent/examples/FR15-example/raw-skill-output.md`, reviewed in `.agent/examples/FR15-example/human-review.md`, and then executed through the Admin Web frontend.

## Output Strengths Confirmed By Execution

| Area | Result |
| --- | --- |
| CRUD decomposition | Create, view, update, and delete flows were all executable from Admin Web. |
| Required fields | Name, price, and category were the correct primary validation variables. |
| Name boundaries | `0`, `1`, `254`, `255`, and `256` exposed both valid behavior and the missing max-length defect. |
| Price boundaries | Empty, negative, zero, decimal, and positive integer values exposed multiple price validation behaviors. |
| Update isolation | The generated focus on "only selected product changes" found a real immediate UI defect. |
| Execution scope separation | API-only invalid domains could be kept in the design and marked `Blocked` under UI-only execution. |

## Gaps Found During Execution

| Gap | Observation | Human Correction |
| --- | --- | --- |
| Browser validation versus application validation | Empty name and non-numeric price were blocked by HTML/browser controls, but whitespace name, empty price, zero, negative, and overlong name were accepted by application logic. | Record both browser-blocked passes and application validation failures separately. |
| Category requiredness through UI | The category dropdown always selects an existing default category. | Mark missing/invalid category cases as `Blocked` for UI execution instead of forcing API execution. |
| Update isolation timing | Persisted data is correct after reload, but immediate UI state is wrong after update. | Separate immediate UI isolation failure from after-reload persistence result. |
| Decimal price ambiguity | Requirement says positive number and UI accepts/displays `0.01` as `0,01 VND`. This is valid under the current wording but may be inconsistent with integer-only VND expectations. | Marked the testcase as passed and kept a clarification note; create a defect only if integer-only price is confirmed. |
| Optional fields | Description and image URL are not constrained in FR-15. | Do not fail empty or broken image URL values unless they crash or corrupt the product list. |

## Execution-Based Skill Evaluation

| Question | Answer |
| --- | --- |
| What did the skill generate correctly? | It generated useful CRUD/domain/BVA coverage, especially required fields, name length boundaries, price `> 0`, update isolation, and auth/access classes. |
| What did the skill miss? | It did not fully predict which invalid domains are impossible to submit from the UI, and it needed human review to distinguish immediate UI defects from persisted backend state. |
| Was the issue caused by requirement, prompt, or skill? | Missing/invalid category and non-existing product ID cases are execution-scope limitations. Decimal price is a requirement ambiguity. Update mass-name behavior is an implementation defect. |
| Is the gap FR-15-specific or general? | UI/API reachability and immediate-vs-persisted state are general testing concerns. Decimal price handling is FR-15/price-domain specific unless a shared money rule exists. |

## Result After Execution

| Result | Count |
| --- | ---: |
| Total FR-15 test cases | 48 |
| Passed | 28 |
| Failed | 11 |
| Blocked | 9 |
| Draft defects identified | 5 confirmed defects and 1 price-format clarification |

## Human Review Decision

The AI-generated test design was useful as a first pass, but final execution required human review to:

- Respect the teacher-confirmed frontend UI testing scope.
- Avoid using API-only behavior as functional execution evidence.
- Separate browser validation from application validation.
- Treat ambiguous price decimal behavior as a documented review point.
- Confirm that update isolation has both immediate UI and persisted-data dimensions.

No `.agent/SKILL.md` change is required only for FR-15. The existing general skill evaluation already notes that execution scope and UI/API separation must be reviewed by the tester.

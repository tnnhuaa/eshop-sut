# HW02 AI Audit Report

## Declaration

I use AI tools for the following tasks. Every AI-generated output is reviewed, corrected, and accepted by me before being included in the submission.

## AI Interaction Log

| No. | Date and Time | Tool | Prompt Summary | Artifact | Human Review Result |
| --- | --- | --- | --- | --- | --- |
| 1 | 2026-06-29 | Codex | Set up the HW02 repository documentation structure and assignment artifacts. | Repository structure, report skeletons, feature folders, logs, traceability templates | Pending student review |
| 2 | 2026-06-29 | Codex | Analyzed requirements and identified detailed requirement gaps for FR-06, FR-10, FR-15, and FR-05-M. | Requirement analysis files and global gap index | Pending student review |
| 3 | 2026-07-02 | Codex | Designed FR-06 Domain Testing/BVA artifacts and built a reusable Agent Skill. | FR-06 domain model, BVA, test cases, AI gap analysis, skill templates/example | Pending student review |
| 4 | 2026-07-02 | Codex | Compared FR-06 manual execution results, split defect reports, and updated execution documentation. | FR-06 execution results, bug report, GitHub issue summaries, AI gap analysis, skill evaluation | Student reviewed issue list and confirmed defect split |

## Detailed Logs

### Interaction 1

- Tool: Codex
- Date and time: 2026-06-29
- Prompt: Asked Codex to act as an experienced Software Testing teacher and guide the initial HW02 repository setup after the repository was cloned.
- Output summary: Created assignment folders, report skeletons, feature skeleton files, evidence folders, logs, and traceability templates.
- Human review: TODO
- Corrections made by student: TODO

### Interaction 2

- Tool: Codex
- Date and time: 2026-06-29
- Prompt: Asked Codex to perform requirement analysis and make the requirement gap sections detailed and broad enough to cover real missing or ambiguous requirement issues.
- Output summary: Expanded requirement analysis for FR-06 Product Detail View, FR-10 Order State Machine, FR-15 Product Management CRUD, and FR-05-M Product Listing and Search on Mobile. Added detailed gap IDs, risk levels, temporary assumptions, verification approaches, and updated the global assumptions/gaps file and requirement traceability matrix.
- Human review: TODO
- Corrections made by student: TODO

### Interaction 3

- Tool: Codex
- Date and time: 2026-07-02
- Prompt: Asked Codex to complete FR-06 Domain Testing and Boundary Value Analysis, create 16-22 test cases, and build a reusable Agent Skill with templates, FR-06 example, raw output, human review, guardrails, and skill change log. The user asked not to commit yet and to provide a short summary for review.
- Output summary: Created FR-06 domain model, BVA, 21 test cases, FR-06 AI gap analysis, FR-06 prompt/raw-output logs, reusable `.agent` skill workflow, templates, FR-06 worked example, skill evaluation, and skill change log.
- Human review: TODO
- Corrections made by student: TODO

### Interaction 4

- Tool: Codex
- Date and time: 2026-07-02
- Prompt: Asked Codex to compare the student's manual FR-06 testing results with the generated test table, update execution results, separate empty/whitespace and decimal/scientific notation defects, draft GitHub Issue content, and complete the remaining execution, bug report, AI gap, skill evaluation, audit, and log documentation. Evidence screenshots are left for the student to add manually.
- Output summary: Updated FR-06 test cases and execution results, recorded 21 executed cases with 11 passed and 10 failed, mapped failed tests to 9 GitHub Issues, updated `STUDENT_ID_Bug_Report.md`, revised FR-06 AI gap analysis based on execution, and evaluated the reusable skill using FR-06 results.
- Human review: The student reviewed the GitHub Issue list and confirmed that 9 open issues were created, including separate issues for decimal quantity and scientific notation quantity.
- Corrections made by student: The student requested defect splitting for empty versus whitespace and decimal versus scientific notation; the documentation was updated accordingly.

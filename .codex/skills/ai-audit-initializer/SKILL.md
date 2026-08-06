---
name: ai-audit-initializer
description: Initialize an individual FIT@HCMUS Software Testing homework AI_Audit.md from the reusable official-style template bundled with ai-export-audit. Use before recording AI interactions for HW04-AI or a future homework.
---

# AI Audit Initializer

Initialize the required `AI_Audit.md` working file for the current individual Software Testing homework.

## Workflow

1. Check whether `AI_Audit.md` exists in the repository root.
2. If it exists, output exactly `AI Audit Report exists` and stop. Do not modify the file.
3. If it does not exist, read `../ai-export-audit/assets/AI_Audit_Report_Template.md`. Stop with a clear error if the sibling template is unavailable; do not invent a replacement.
4. Create `AI_Audit.md` from that template.
5. Replace `{{ASSIGNMENT_ID}}` with the explicit homework ID, such as `HW04-AI`.
6. Replace `{{ASSIGNMENT_DATE}}` with the actual assignment/audit date in GMT+7 using `YYYY-MM-DD`.
7. Replace `{{AI_TOOLS}}` with the AI tools actually used. Use `Codex` when it is the only verified tool.
8. Confirm no unresolved `{{...}}` placeholders remain.
9. Preserve the faculty header, student identity, class, course, instructors, signature name, instructions, insertion markers, and references exactly.

## Constraints

- Create only the missing working audit file from the canonical asset.
- Do not overwrite or reset an existing audit.
- Do not invent interactions, verdicts, execution evidence, bugs, reports, videos, or student actions.
- Keep all generated audit content in English.

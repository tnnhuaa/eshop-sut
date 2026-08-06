---
name: ai-export-audit
description: Export and evaluate AI-user interactions for the individual HW04 Automation Testing AI_Audit.md, normalize private paths, document file changes and agents used, assign VALID, INCOMPLETE, or INVALID from evidence, and refresh the accuracy summary, AI-use conclusion, and mandatory disclosure. Use when asked to log, export, audit, append, sanitize, reassess, or summarize AI usage for HW04-AI.
---

# AI Export Audit

Export the requested conversation scope to `AI_Audit.md`. Create one artifact for each included user prompt and its corresponding AI response.

## Workflow

1. Use `$ai-audit-initializer` first to ensure `AI_Audit.md` exists.
2. Identify the requested conversation scope. If no scope is specified, export only exact prompt-response pairs currently available in context; never reconstruct missing text.
3. Capture the actual date and time in GMT+7.
4. Read `AI_Audit.md`, count existing `### Artifact #` verbatim-record headings, and assign the next number.
5. For each user/AI pair, insert one five-column summary row immediately before `<!-- AUDIT_TABLE_ROWS_END -->` and one corresponding verbatim record immediately before `<!-- ARTIFACT_DETAILS_END -->`.
6. Record every agent or sub-agent involved. Use `Codex (primary agent)` when no delegated agent was involved.
7. Record direct file creation, editing, deletion, replacement, or append operations in repository-relative form.
8. Normalize local paths and redact secrets using the privacy policy below.
9. Evaluate each artifact against actual file state, diffs, commands, test results, and later corrections.
10. Refresh verdicts for earlier artifacts when later evidence changes the same workstream.
11. Recalculate `## **4. Summary of AI Accuracy**`.
12. Refresh `## **5. Conclusion - When should AI be used (or not)?**` from demonstrated strengths, errors, omissions, and human corrections.
13. Refresh `## **6. Mandatory Disclosure (paste verbatim)**` as one first-person paragraph naming AI-assisted tasks, human review, and evidence that was not AI-generated.
14. Preserve the faculty header, student information, instructions, signature, and references from `assets/AI_Audit_Report_Template.md`; update only assignment-specific fields unless the user explicitly requests a correction.

## Template Contract

- Use `assets/AI_Audit_Report_Template.md` as the canonical reusable report template.
- Keep the FIT/HCMUS header, student identity, class, course, instructors, signature name, instructions, and references unchanged.
- Replace only `{{ASSIGNMENT_ID}}`, `{{ASSIGNMENT_DATE}}`, and `{{AI_TOOLS}}` when initializing a new homework.
- Keep one concise audit-table row and one full verbatim record for every artifact. The row supports the official five-column layout; the record preserves exact evidence without breaking Markdown tables.
- Preserve both insertion markers. Do not append duplicate summary, conclusion, disclosure, signature, or reference sections.

## Required Audit-Table Row

Use one row per artifact. Keep the row concise and point to the matching verbatim record for full prompt/output:

```markdown
| **Artifact #[X] - [short workstream title]**<br>Tool: [agent/tool]<br>Time: [GMT+7 timestamp]<br>Full prompt: see Artifact #[X] verbatim record below. | [Concise factual output summary]<br>Full output: see Artifact #[X] verbatim record below. | [VALID / INVALID / INCOMPLETE] | [Evidence-based reasoning and relevant ISTQB/course/technical source] | [Concrete student correction, or `None required.`] |
```

## Required Verbatim Record

Use this exact structure:

`````markdown
### Artifact #[X] - Verbatim Record

- **User:** Nguyễn Hiền Tuấn Anh (23127280)
- **Date and Time:** [Actual date and time, GMT+7]
- **Agent Used:** [Codex primary agent and any sub-agents involved]
- **Prompt:**

````text
[Exact user prompt, except required path normalization and secret redaction]
````

- **AI Output:**

````text
[Exact AI response, except required path normalization and secret redaction]
````

- **File Modifications:** [Use `None` or list each file and the concrete change]

- **Verification Evidence:** [Commands, test results, diffs, file state, or `Not yet verified`]
- **Verdict:** [VALID / INVALID / INCOMPLETE]
- **Reasoning:** [Evidence-based explanation]
- **Student Fixes:** [Correction requested or performed, or `None required.`]
`````

## Artifact Evaluation Policy

### Determine the workstream

Treat interactions as the same workstream only when they concern the same requested outcome, feature, test, report, skill, file, or correction. Do not link unrelated HW04 deliverables merely because they belong to the same assignment.

### Verify the outcome

Use evidence in this order:

1. Actual file modifications and current file state.
2. Executed Playwright results, HTML reports, traces, screenshots, diffs, and validation output.
3. The AI output.
4. Later user prompts that explicitly accept, refine, correct, or reject the result.

Do not treat a promised edit or planned test as completed work.

### Assign one verdict

- `VALID`: The response fulfilled the prompt correctly and the available evidence supports its claims.
- `INCOMPLETE`: The response is usable but lacks execution, verification, evidence, or a requested requirement.
- `INVALID`: The response contains a substantive error, wrong scope, fabricated claim, or result contradicted by evidence.

Apply `INVALID` before `INCOMPLETE` when both conditions apply.

### Record human review

- State the decisive evidence in `Reasoning`.
- Name later artifact numbers when they provide the correction.
- Use `None required.` only for a verified `VALID` artifact with no later correction.
- Never invent student acceptance, manual execution, fixes, defects, or evidence.

## HW04 Evidence Boundaries

- Never claim an HTML report is genuine unless it came from an executed browser run and includes `Run by: 23127280` plus an ISO timestamp.
- Never generate or fabricate terminal identity evidence, face-cam evidence, Vietnamese narration, YouTube publication, Moodle submission, or oral-defense performance.
- Treat screenshots, traces, bug evidence, GitHub Issues, browser results, `whoami`, and `hostname` as genuine only when their source is recorded.
- Distinguish AI-generated automation code from the student's human review and corrections.
- Record test cases that could not be automated and the verified reason.
- Do not claim a failing assertion is a product defect until it has been reproduced and separated from test, data, timing, and environment failures.

## File Modification Details

For every changed file, record:

- `File:` repository-relative path from the directory containing `AI_Audit.md`.
- `Action:` created, edited, appended, deleted content, replaced content, or deleted file.
- `Details:` concise section, line range, or faithful summary of the change.

Use `None` when the AI response made no direct file modification.

## Relative Path and Privacy Policy

- Use repository-relative paths with `/` separators.
- Remove drive letters, workspace-root prefixes, Windows usernames, home paths, attachment UUIDs, and unrelated parent directories.
- Represent outside-repository files as `external-sources/<basename>`, `attachments/<meaningful-name>`, or `external-skills/<skill-name>/SKILL.md`.
- Preserve public HTTP(S) URLs.
- Redact secrets, tokens, private keys, passwords, cookies, and private data belonging to other people.
- Apply normalization inside Prompt, AI Output, File Modifications, and newly generated closing sections without changing other wording.

## Summary Rules

- Keep the closing sections in the exact order 4, 5, 6, then Signature.
- Calculate percentage as `count / total × 100`; use two decimals when needed.
- Preserve exact prompts and responses except path normalization and secret redaction.
- Use quadruple backticks with the `text` language identifier.
- Do not collapse multiple interactions into one artifact.
- Do not leave verdicts as `TODO` when sufficient evidence exists.
- If exact text is unavailable, omit that interaction and state the limitation; never fabricate it.
- After appending, report `Artifacts [first]-[last] successfully appended to AI_Audit.md`.

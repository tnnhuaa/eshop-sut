---
name: ai-audit-initializer
description: Ensure the individual HW04 Automation Testing AI_Audit.md file exists with the standard FIT@HCMUS student, assignment, interaction-log, accuracy-summary, disclosure, and signature sections. Use before recording AI interactions for HW04-AI.
---

# AI Audit Initializer

Initialize the required `AI_Audit.md` working file for the individual HW04 Automation Testing assignment.

## Workflow

1. Check whether `AI_Audit.md` exists in the repository root.
2. If it exists, output exactly `AI Audit Report exists` and stop. Do not modify the file.
3. If it does not exist, create it from the template below.
4. Replace `[Current Date in GMT+7]` with the actual date in GMT+7.
5. Preserve the student identity exactly as provided in the template.

## File Template

`````markdown
# AI Audit Report

## **1. Student and Assignment Information**

| Field | Value |
| --- | --- |
| Student ID | 23127280 |
| Student Name | Nguyễn Hiền Tuấn Anh |
| Assignment | HW04 – Automation Testing |
| Exercise ID | HW04-AI |
| Date | [Current Date in GMT+7] |

## **2. AI Tools Used**

| AI Tool | Purpose |
| --- | --- |
| Codex | Planning, Playwright automation assistance, review, debugging, documentation, and audit logging |

## **3. AI Interaction Log**

## **4. Summary of AI Accuracy**

| Metric | Count | Percentage |
| :---- | :---- | :---- |
| **Total AI-generated artifacts audited** | 0 | 100% |
| **VALID (correct, accepted as-is)** | 0 | 0% |
| **INVALID (substantively wrong or rejected)** | 0 | 0% |
| **INCOMPLETE (usable only after completion or refinement)** | 0 | 0% |

## **5. Conclusion - When should AI be used (or not)?**

* TODO: Refresh this section from the audited artifacts.

## **6. Mandatory Disclosure (paste verbatim)**

TODO: Refresh this paragraph from the audited artifacts before submission.

## **Signature**

- Student: Nguyễn Hiền Tuấn Anh
- Student ID: 23127280
- Date: [Current Date in GMT+7]
`````

## Constraints

- Create only the missing working audit file.
- Do not overwrite or reset an existing audit.
- Do not invent interactions, verdicts, execution evidence, bugs, reports, videos, or student actions.
- Keep all generated audit content in English.

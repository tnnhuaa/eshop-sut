# AI Critique Report

## Student Information

| Field | Value |
| --- | --- |
| Student name | Nguyen Hien Tuan Anh |
| Student ID | 23127280 |
| Class / Cohort | 23KTPM2 |
| Assignment | HW04-AI |
| Assignment date | 2026-08-10 |
| AI tool | Codex |

## AI Critique

AI was effective at converting the reviewed HW02 cases into a consistent Playwright structure, but its first output was not submission-ready. It generated useful scenario loops and assertions, yet left several values and control mappings inside the specifications. That conflicted with the strict HW04 requirement that test data be stored in separate JSON or CSV files. It also proposed selectors based on visible product text without knowing that the same text appeared in several page regions. In FR10, it initially checked backend state too early after a UI transition. In FR15, it underestimated how reloading the admin page resets the selected tab and how tests sharing one mutable database can contaminate one another.

These problems occurred because the model optimized for readable code from incomplete prompts and static source context. It could infer likely workflows, but it did not automatically understand the rendered DOM, asynchronous persistence, shared test-state risks, or the lecturer's strict interpretation of external test data. Human review therefore moved all remaining scenario and fixture values to JSON, scoped locators to exact rows and regions, replaced timing assumptions with `expect.poll`, reopened the Products tab after reload, and limited cleanup to scenario-owned records with one worker.

The most important lesson is that AI should generate a reviewable hypothesis, not the final oracle. Executed reports, requirements, and student judgment must decide whether a failure belongs to automation, data, environment, or the product. This was especially important for `FR10-DT-017`: the AI exposed a possible authorization defect, but I reviewed the expected HTTP status, confirmed the three-browser evidence, captured the report error, and created GitHub Issue #23 myself.

## Signature

| Field | Value |
| --- | --- |
| Student name | NGUYEN HIEN TUAN ANH |
| Student ID | 23127280 |
| Class / Cohort | 23KTPM2 |
| Course | CSC13003 - Software Testing |
| Date | 2026-08-10 |
| Signature | Anh |

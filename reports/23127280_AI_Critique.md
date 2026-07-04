# AI Critique Reports

**Student Information**

| Field | Value |
| :---- | :---- |
| **Student name (printed):** | Nguyen Hien Tuan Anh |
| **Student ID:** | 23127280 |
| **Class / Cohort:** | 23KTPM2 |
| **Assignment ID (e.g., HW#00, HW#02):** | HW02-AI |
| **Assignment date:** | 2026-07-04 |
| **AI tool(s) used:** | Codex; ChatGPT/Codex-style AI assistant |
| **AI tool(s) used:** | [x] Yes  [ ] No |

---
## AI Critique

AI was useful in HW02 mainly as a structured testing assistant. It helped me break down the selected EShop requirements into requirement items, input variables, equivalence partitions, boundary values, state-transition rules, and traceability artifacts. It was especially helpful for FR-10 because it suggested thinking in terms of current state, target state, actor, permission, ownership, and final states. It also helped keep the documentation consistent across test cases, execution summaries, bug reports, AI gap analysis, and the reusable Agent Skill examples.

However, the AI output was not reliable enough to submit without review. In FR-06, it could generate useful quantity tests, but it could not know that the Add to Cart button required two clicks until manual execution. It also tended to group similar invalid inputs together, while execution showed that empty input, whitespace, decimal quantity, and scientific notation should be reported separately. In FR-10, the initial output needed stronger state-transition modeling and cross-role consistency checks between User UI and Admin UI. In FR-15, AI-generated cases included some API-style invalid domains that were not reachable from the Admin UI, so they had to be marked as blocked under the teacher-confirmed frontend testing scope. In FR-05-M, AI missed the search-state reset case where returning Home from the header still kept old search results.

The main reason for these misses is that AI works from the written requirement and prompt context, not from real product behavior. It can infer likely risks, but it cannot replace actual execution, screenshots, issue confirmation, or teacher clarification. My biggest lesson is that AI is strongest before and after testing: it helps design coverage and organize evidence, but the tester must still decide the oracle, execute the SUT, split defects carefully, and reject or correct AI assumptions.

## **Signature**

| Student name (printed): | NGUYEN HIEN TUAN ANH |
| :---- | :---- |
| **Student ID:** | 23127280 |
| **Class / Cohort:** | 23KTPM2 |
| **Course:** | CSC13003 - Software Testing |
| **Instructor:** | Truong Phuoc Loc; Ho Tuan Thanh; Lam Quang Vu |
| **Date:** | 2026-07-04 |
| **Signature:** | Anh |

## **References**

* Kharbach, M. (2026). AI Use Policy Templates for Higher Education. CC BY-NC-SA 4.0.
* ISTQB Foundation Level Syllabus (latest version).
* ISTQB Foundation Level (CTFL v4.0.1) study guide.
* Hardman, P. (2025). A Post-AI Learning Taxonomy.
* Fuster Rabella, M. (2025). OECD Education Working Paper No. 338.
* Perkins, M., Roe, J., & Furze, L. (2025). AI Assessment Scale.
* Anthropic (2025). Building reliable AI test agents - engineering blog.
* DeepEval & Promptfoo documentation - testing frameworks for LLM systems.

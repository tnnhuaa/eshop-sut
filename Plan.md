# HW06 Execution Plan

**Last verified:** 2026-08-18  
**Student:** Nguyễn Hiền Tuấn Anh — 23127280  
**Target:** 90–100 points using Postman, Newman, and GitHub Actions

## Next Action

Run the exported collection with Newman using `studentId=23127280`, then push the CI smoke workflow and confirm its GitHub Actions run returns HTTP 200.

Do not start generating the 105 AI-assisted test cases until Newman and the CI smoke run succeed and the current preparation files are committed.

## Approved Scope and Decisions

| Workstream | Approved decision |
|---|---|
| API selection | `POST /api/register`, `POST /api/checkout`, and `POST /api/admin/coupons` |
| Execution tools | Postman + Newman |
| Environment | Each student runs the SUT locally; no shared deployment is required |
| Quality target | Aim for 90–100 points over a three-day schedule |
| Test-case format | Use `test-cases/API_Test_Cases.csv`, not Excel |
| Student header | Every request sends `X-Student-Id: 23127280` |
| AI governance | Keep exact interactions and evidence in `AI_Audit.md` |

## Current Verified State

### Available

- Node.js and the student's npm installation work; the student showed npm `11.14.0`.
- Newman `6.2.2` and `newman-reporter-htmlextra` are installed under `api-tests/`.
- Postman contains Login User, Login Admin, and Get Products requests.
- Login scripts validate the expected role and save `userToken` or `adminToken`.
- The collection pre-request script adds `X-Student-Id` from the active environment.
- The committed Postman environment has empty values for student ID and tokens.
- `.gitignore`, `AI_Audit.md`, and `test-cases/API_Test_Cases.csv` exist.
- `AGENTS.md` defines sources of truth, evidence rules, and workstream completion rules.
- Newman-compatible collection and sanitized environment JSON exports exist and pass local structure checks.
- `.github/workflows/api-tests.yml` contains the backend HTTP 200 smoke job.

### Pending or Unverified

- Newman has not yet executed the exported collection.
- The CI smoke workflow has not yet been pushed or observed in GitHub Actions.
- No API test-case rows have been added to the CSV.
- No Newman HTML report, GitHub Issues, CI evidence, generator design, or final reports exist.
- `backend/database.sqlite` is modified runtime state and must not be staged.

## Workstream Order

### 1. Finish Preparation

1. Export the collection to `postman/HW06_API_Testing.postman_collection.json`.
2. Export a sanitized environment to `postman/HW06_LOCAL.postman_environment.json` with empty token values.
3. Run the exported login setup through Newman and verify `X-Student-Id` plus both tokens.
4. Create a GitHub Actions smoke workflow that starts the backend and checks `GET /api/products`.
5. Commit the verified preparation artifacts without staging `backend/database.sqlite`.

### 2. Generate and Audit Test Cases

For each API, follow this exact sequence:

1. Analyze specification, requirements, parameters, schema, business rules, and security rules.
2. Generate at least 35 AI-assisted cases in small technique-focused batches.
3. Add the cases to CSV and audit each as `VALID`, `INVALID`, or `INCOMPLETE`.
4. Correct invalid/incomplete cases and add at least 5 student-designed cases.
5. Commit generation, audit, and extension as separate stages.

Coverage priorities:

| API | Required focus |
|---|---|
| Register | Name/email/password partitions, password policy, duplicate email, schema, injection, password storage |
| Checkout | Authentication, forged totals, address validation, server-side calculation, cart clearing, order state |
| Create Coupon | Admin role, unique code, type enum, numeric/date boundaries, schema, persistence, downstream use |

Target total: at least **105 AI-assisted + 15 student-designed = 120 cases**.

### 3. Implement and Execute Postman Tests

1. Create folders for Register, Checkout, Create Coupon, setup, and cleanup.
2. Use environment variables and data files with unique student-ID/timestamp values.
3. Implement assertions for status, schema, headers, state, security, and business rules.
4. Run each folder locally, then run the full collection with Newman and HTML Extra.
5. Record actual results in CSV and report only reproduced product defects.

Required evidence:

- Postman Console showing `X-Student-Id`.
- Newman output showing `localhost:3000`.
- Final Newman HTML report.
- Request/response screenshots for reproduced bugs.
- Matching GitHub Issue screenshots and links.

### 4. Complete CI/CD and Test Generator

1. Extend the smoke workflow to run Newman and upload the HTML report.
2. Produce one disclosed all-pass CI demonstration and one run with exactly one controlled failing assertion.
3. Write the generator pseudocode and optional reusable Agent Skill.
4. The student manually designs and draws the generator diagram in diagrams.net.
5. Record links, screenshots, commit IDs, and limitations in the reports.

### 5. Finish Submission

1. Write Main Report, Bug Report, CI/CD Report, and a 200–300-word AI Critique.
2. Refresh `AI_Audit.md`, accuracy summary, conclusion, and mandatory disclosure.
3. Export required Markdown reports to PDF and export the Git commit log.
4. Complete README self-assessment and test summary with matching counts.
5. Package `<StudentID>_HW06_AI_API_<Grade>.zip` and verify every file opens.

## Approved Decision Log

Only append a row after explicit student approval.

| Date | Workstream | Approved decision | Evidence |
|---|---|---|---|
| 2026-08-18 | API selection | Use Register, Checkout, and Create Coupon as the three selected APIs | Student explicitly chose Member 2 |
| 2026-08-18 | Test tooling | Use Postman + Newman | Student selected the recommended tool option |
| 2026-08-18 | Environment | Use isolated localhost environments instead of a shared deployment | Student continued with the local setup |
| 2026-08-18 | Test-case storage | Replace the proposed Excel workbook with one CSV file | Student explicitly requested CSV |
| 2026-08-18 | Agent workflow | Persist approved decisions and read `Plan.md` before continuing work | Student explicitly requested this behavior |

## Progress Checklist

### A. Preparation

- [x] Scope, toolchain, local backend, Postman login scripts, and student header prepared.
- [x] `.gitignore`, `AI_Audit.md`, CSV header, `Plan.md`, and `AGENTS.md` created.
- [x] Newman-compatible collection/environment JSON and CI smoke workflow created.
- [ ] Execute the exported collection with Newman.
- [ ] Push and verify CI smoke, then commit all preparation artifacts.

### B. Test Design

- [ ] Register: at least 35 AI-assisted and 5 student-designed cases.
- [ ] Checkout: at least 35 AI-assisted and 5 student-designed cases.
- [ ] Create Coupon: at least 35 AI-assisted and 5 student-designed cases.
- [ ] Audit and correct every AI-assisted case.
- [ ] Confirm at least 120 non-duplicate final cases.

### C. Execution and Bugs

- [ ] Implement Postman requests, data runs, and assertions.
- [ ] Execute the full collection using Newman.
- [ ] Save header, console, hostname, and HTML evidence.
- [ ] Reproduce and separate product defects from test/environment failures.
- [ ] Create matching Markdown bug reports and GitHub Issues.

### D. CI/CD and Generator

- [ ] Run Newman in GitHub Actions and upload the report.
- [ ] Save one all-pass and one controlled one-fail pipeline run.
- [ ] Write generator design and pseudocode.
- [ ] Student manually draws and exports the diagram.
- [ ] Add optional Agent Skill/video demonstration if time permits.

### E. Submission

- [ ] Complete reports, AI Critique, README, and test summary.
- [ ] Refresh AI Audit and export required PDFs.
- [ ] Export Git commit log and verify all links/evidence.
- [ ] Self-assess against the 100-point rubric.
- [ ] Build and inspect the correctly named ZIP before Moodle submission.

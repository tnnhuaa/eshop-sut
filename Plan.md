# HW06 Execution Plan

**Last verified:** 2026-08-22
**Student:** Nguyễn Hiền Tuấn Anh — 23127280  
**Target:** 90–100 points using Postman, Newman, and GitHub Actions

## Next Action

Push the all-pass baseline commit for workflow `HW06 CI Demonstration` to branch `hw6-tanh`.

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
- Postman contains the imported full collection: setup plus Register, Checkout, and Create Coupon folders.
- Login scripts validate the expected role and save `userToken` or `adminToken`.
- The collection pre-request script adds `X-Student-Id` from the active environment.
- The committed Postman environment has empty values for student ID and tokens.
- `.gitignore`, `AI_Audit.md`, and `test-cases/API_Test_Cases.csv` exist.
- `AGENTS.md` defines sources of truth, evidence rules, and workstream completion rules.
- Newman-compatible collection and sanitized environment JSON exports exist and pass local structure checks.
- `.github/workflows/api-tests.yml` contains the backend HTTP 200 smoke job.
- Newman executed Login User, Login Admin, and Get Products with 3 assertions and 0 failures.
- GitHub Actions run for commit `88b21d3` completed successfully.
- Preparation evidence is stored under `evidence/header/`, `evidence/newman/`, and `evidence/cicd/`.
- `test-cases/API_Test_Cases.csv` contains 122 reviewed test cases: 41 Register, 41 Checkout, and 40 Create Coupon.
- The suite contains 105 AI-assisted cases and 17 accepted student-designed cases; all IDs and objectives are unique.
- The student audit covers all 105 AI cases: 97 `VALID`, 7 `INCOMPLETE`, and 1 `INVALID`; all eight non-valid cases contain corrections.
- The CSV has the required 21 columns, correct endpoint mapping, and execution results for all 122 cases.
- The reviewed Test Design artifacts are committed under the subject `test: complete reviewed API test design` without `backend/database.sqlite`.
- The Postman collection now contains setup plus 41 Register, 41 Checkout, and 40 Create Coupon requests with deterministic data setup and assertions.
- A clean Newman run executed all 122 unique cases: 35 passed and 87 failed (Register 13/41 passed; Checkout 6/41; Create Coupon 16/40).
- The final run executed 125 collection items, 287 requests, and 678 assertions; 100 assertions failed because the SUT contradicted the reviewed oracles.
- No checkout setup assertion failed in the final run. Ambiguous invalid-authentication oracles were corrected to accept either 401 or 403 before final execution.
- `test-cases/API_Test_Cases.csv` records an actual result, execution status, bug mapping, and evidence path for every case.
- Ten distinct product-defect groups are documented in `reports/23127280_Bug_Report.md`.
- Focused concurrent checkout evidence returned two HTTP 200 responses, created two orders, and left the cart nonempty.
- The committed-candidate Newman HTML and summary are sanitized; raw Newman JSON is ignored because it contains runtime tokens.
- Student-produced execution evidence now includes two Newman screenshots and 20 distinct Postman screenshots: one request and one result for each of the 10 bug groups.
- The Newman evidence shows `localhost:3000`, 287 executed requests, 678 assertions, and 100 assertion failures.
- All evidence names match their Bug ID and Test ID after correcting `BUG-REG-003` from `CHK-AI-035` to `REG-AI-035`.
- Ten copy-ready GitHub Issue bodies exist under `reports/github-issues/`, each with title, severity, environment, reproduction, expected/actual result, affected tests, and matching evidence filenames.
- The student manually published all 10 public GitHub Issues as #24–#33. Public API verification confirmed matching Bug IDs/titles, Expected/Actual sections, and two uploaded images per issue.
- The Bug Report contains all 10 public links, and every failed CSV row now traces to its mapped GitHub Issue URL.
- The workflow has a locally validated `Newman full suite` job that runs the 122-case collection and always uploads sanitized HTML, summary, and backend log evidence.
- The reusable report scripts accept CI-specific input/output paths. A local CI-path verification reproduced 122 cases (35 passed / 87 failed) and found zero remaining JWT patterns after sanitization.
- Part C and the full-suite CI preparation are committed as `90067ce` (`test: complete API execution and CI preparation`); the commit contains 184 deliverable files and excludes `backend/database.sqlite`.
- GitHub Actions run `32560329025` executed commit `ddb3900` on `hw6-tanh`: `Backend smoke test` passed, `Newman full suite` failed on the genuine 35 passed / 87 failed SUT result, and artifact `hw06-newman-report` uploaded successfully.
- GitHub's public API verified artifact `9472588715` (114,354 bytes, not expired). Student screenshots are stored as `evidence/cicd/full-suite-run-32560329025.png` and `evidence/cicd/full-suite-summary-artifact-32560329025.png`.
- A separate, explicitly disclosed CI demonstration exists so the genuine 122-case suite remains unchanged. It runs four deterministic requests and eight assertions with `X-Student-Id: 23127280`.
- `api-tests/ci-demo-mode.json` is set to the all-pass baseline (`controlledFailure: false`). Local Newman verification produced 4 requests, 8 assertions, 0 failures, and exit code 0.
- A local override with `controlledFailure: true` produced the same four requests with exactly one failed assertion and exit code 1. The sanitized all-pass HTML removed two runtime JWTs and contains zero JWT patterns.

### Pending or Unverified

- The all-pass baseline and exactly-one-failure behavior are locally verified, but their two public GitHub Actions runs/screenshots/links do not exist yet.
- No generator design or submission reports exist.
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
| 2026-08-22 | GitHub Issues | Student will create the 10 public Issues manually from prepared Markdown drafts | Student stopped browser automation and requested copy-ready content |

## Progress Checklist

### A. Preparation

- [x] Scope, toolchain, local backend, Postman login scripts, and student header prepared.
- [x] `.gitignore`, `AI_Audit.md`, CSV header, `Plan.md`, and `AGENTS.md` created.
- [x] Newman-compatible collection/environment JSON and CI smoke workflow created.
- [x] Execute the exported collection with Newman.
- [x] Push and verify CI smoke, then commit all preparation artifacts.

### B. Test Design

- [x] Register: 35 AI-assisted cases generated and structurally validated.
- [x] Checkout: 35 AI-assisted cases generated and structurally validated.
- [x] Create Coupon: 35 AI-assisted cases generated and structurally validated.
- [x] Student audited all 105 AI-assisted cases and corrections are recorded for every non-valid case.
- [x] Added 17 student-designed cases and confirmed 122 unique final cases.
- [x] Commit the verified Test Design artifacts without staging `backend/database.sqlite`.

### C. Execution and Bugs

- [x] Implement Postman requests, deterministic data setup, and assertions for all 122 cases.
- [x] Execute the full collection using Newman and record 35 passed / 87 failed.
- [x] Save header, console, hostname, HTML, and 10 representative request/response evidence pairs.
- [x] Reproduce and separate 10 product-defect groups from test/environment failures.
- [x] Create the matching Markdown bug report.
- [x] Prepare 10 copy-ready GitHub Issue bodies with matching evidence filenames.
- [x] Create 10 public GitHub Issues, attach evidence, and record their verified links.

### D. CI/CD and Generator

- [x] Push the full-suite workflow and verify run `32560329025` plus its uploaded sanitized Newman artifact.
- [ ] Push and capture the all-pass `HW06 CI Demonstration` run.
- [ ] Change only `controlledFailure` to `true`, commit/push, and capture the exactly-one-failure run.
- [ ] Write generator design and pseudocode.
- [ ] Student manually draws and exports the diagram.
- [ ] Add optional Agent Skill/video demonstration if time permits.

### E. Submission

- [ ] Complete reports, AI Critique, README, and test summary.
- [ ] Refresh AI Audit and export required PDFs.
- [ ] Export Git commit log and verify all links/evidence.
- [ ] Self-assess against the 100-point rubric.
- [ ] Build and inspect the correctly named ZIP before Moodle submission.

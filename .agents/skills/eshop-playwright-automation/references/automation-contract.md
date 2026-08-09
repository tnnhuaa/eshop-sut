# EShop Automation Contract

## Scenario schema

Each JSON scenario contains `id`, `title`, `preconditions`, `setup`, `input`, `expected`, and a non-empty `assertionTypes` array. `preconditions` may be an array of statements or an object; `setup`, `input`, and `expected` are objects. IDs must be unique. The complete set must use at least three distinct assertion types.

## Repository paths

- Specs: `tests/<feature>/`
- Scenario data: `test-data/<feature>/`
- HTML reports: `artifacts/html-reports/`
- Failure artifacts: `artifacts/test-results/`

## Browser and evidence contract

Use Playwright projects `chromium`, `firefox`, and `edge`; configure Edge with `channel: "msedge"`. A valid report title includes student ID `23127280`, feature ID, browser, and an ISO timestamp. Retain screenshot, trace, and video for failures.

## Verification commands

Run the repository equivalents of `npm run typecheck`, Playwright test discovery, the requested feature/browser matrix, and `npm run report:verify`. Never report a pass without a real successful command result.

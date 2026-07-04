# FR-05-M Test Execution

## Execution Status

FR-05-M has not been executed yet. The current work is test design and seed-data preparation only.

## Planned Execution Scope

- Execute on React Native Mobile using a real Android/iOS device or Android emulator.
- Use the frontend mobile UI as the functional testing surface.
- Use backend seed data only to create stable listing/search conditions.
- Do not use Browser execution as primary evidence because FR-05-M is a mobile feature.

## Planned Test Data

Seed data can be prepared with:

```bash
node test-data/seed-fr05-mobile-products.js
```

The script recreates products with prefix `FR05M-`.

## Current Test Case Summary

| Technique | Count | Execution Status |
| --- | ---: | --- |
| Domain Testing | 17 | Not Run |
| Boundary Value Analysis | 7 | Not Run |
| Total | 24 | Not Run |

## Manual Evidence Guidance

Capture screenshots for:

- Default mobile product list.
- Search with one result.
- Search with many results.
- Search with no result / empty state.
- HTML/script-looking keyword display.
- Broken image product card if visible.
- Loading or network error only if feasible.

## Execution Notes For Later

- Record actual mobile device/emulator and backend IP in `logs/environment.md` if needed.
- If the app does not show a no-result message and only shows an empty list, mark the empty-state cases as failed.
- If loading is too fast to observe, record the case as `Blocked` or `Inconclusive` rather than inventing a pass/fail.
- Literal HTML `<h1>` and `alt` checks are not directly executable on React Native; use mobile-equivalent observations and document the adaptation.

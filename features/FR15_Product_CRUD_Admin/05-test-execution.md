# FR-15 Test Execution

## Execution Status

FR-15 has not been executed yet. The current work is test design only.

## Planned Scope

- Admin Web product list and product form.
- Product create, view, update, and delete flows.
- Required field validation for name, price, and category.
- Boundary values for name length and positive price.
- Authorization checks if the UI/session setup allows them.
- Update isolation checks using at least two products.

## Current Test Case Summary

| Technique | Count | Execution Status |
| --- | ---: | --- |
| Domain Testing | 33 | Not Run |
| Boundary Value Analysis | 15 | Not Run |
| Total | 48 | Not Run |

## Execution Notes For Later

- Prepare at least one existing category.
- Prepare two products for update-isolation testing.
- Prepare one disposable product for delete testing.
- Use UI behavior as the primary functional oracle if the teacher confirms frontend-only execution, and mark API-only invalid domains as blocked when the UI cannot trigger them.

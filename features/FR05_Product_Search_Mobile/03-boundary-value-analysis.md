# FR-05-M Product Listing and Search on Mobile - Boundary Value Analysis

## Boundary Rules

| Rule ID | Boundary Rule | Source / Decision |
| --- | --- | --- |
| FR05M-BR-01 | Search keyword crosses from empty to non-empty | Requirement provides search input but no min/max length |
| FR05M-BR-02 | Search result count crosses from zero to one to many | Empty state is explicitly required when there are no results |
| FR05M-BR-03 | Loading state exists between request start and response | Requirement explicitly requires loading state |
| FR05M-BR-04 | Product-card image ratio/visibility should remain stable across normal and broken images | Requirement requires product image; broken image is robustness |

## Boundary Table

| Boundary ID | Variable | Boundary | Values To Test | Expected Result | Priority |
| --- | --- | --- | --- | --- | --- |
| FR05M-BVA-SEARCH-01 | `search_keyword` | Empty vs one-character keyword | empty string, `F` | Empty shows default/all products; one character performs search and app remains usable | High |
| FR05M-BVA-SEARCH-02 | `search_keyword` | Just below/at a normal matching keyword | no-match prefix, exact `FR05M-SINGLE`, partial `FR05M` | No-match shows empty state; exact/partial show matching products | High |
| FR05M-BVA-SEARCH-03 | `search_keyword` | Spaces around valid keyword | `FR05M-ALPHA`, `  FR05M-ALPHA  ` | Trimmed keyword should behave like valid keyword; otherwise record gap/defect after execution | Medium |
| FR05M-BVA-SEARCH-04 | `search_keyword` | Long keyword robustness | 255/256-character keyword | App should not crash or render unsafe text; no-result state is acceptable | Medium |
| FR05M-BVA-RESULT-01 | Result count | 0 vs 1 vs many | `FR05M-NO-MATCH-XYZ`, `FR05M-SINGLE`, `FR05M-ALPHA` | Empty state for 0; one card for 1; scroll/list for many | High |
| FR05M-BVA-LOAD-01 | Loading state | Before response vs after response | initial app open or search pressed | Loading indicator/text should appear during fetch if observable, then resolve to list/empty/error | Medium |

## Values Not Treated As Specification Boundaries

| Value / Area | Reason |
| --- | --- |
| Maximum search keyword length | FR-05 does not define a maximum; long keyword is robustness, not a formal boundary. |
| Maximum product count | FR-05 does not define pagination or list-size limit; many products is scrollability/robustness. |
| Product price numeric boundaries | FR-05 only requires display formatting; price validation belongs to FR-15. |
| Exact image aspect ratio number | Requirement says standard ratio but gives no numeric ratio; verify visual consistency, not a fixed pixel ratio. |
| Exact empty/loading text | Requirement requires a suitable state but does not specify exact wording. |
| Literal `<h1>` count and `alt` attribute | These are HTML-specific and not directly inspectable in React Native execution. |

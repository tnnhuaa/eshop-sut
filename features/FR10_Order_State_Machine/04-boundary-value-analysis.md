# FR-10 Boundary Value Analysis

FR-10 is primarily a state transition problem. Boundary-style analysis should focus on transition edges: just-before/at/after final states, allowed vs disallowed cancellation points, and role boundary between user/admin.

## Boundary Targets

| Boundary | Values/States | Reason |
| --- | --- | --- |
| Cancellation allowed boundary | pending, confirmed, shipping | User cancel changes from allowed to forbidden at shipping |
| Final state boundary | delivered, canceled | No outgoing transition is allowed |

## BVA Test Ideas

TODO

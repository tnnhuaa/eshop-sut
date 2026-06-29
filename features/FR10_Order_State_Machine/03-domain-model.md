# FR-10 Domain Model

## Domain Variables

| Variable | Valid Domain | Invalid Domain |
| --- | --- | --- |
| current_state | pending, confirmed, shipping, delivered, canceled | Unknown state |
| target_state | confirmed, shipping, delivered, canceled | Unknown state |
| actor | user, admin | unauthenticated, wrong role |

## Domain Testing Table

TODO

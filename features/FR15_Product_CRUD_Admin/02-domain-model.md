# FR-15 Domain Model

## Domain Variables

| Variable | Valid Domain | Invalid Domain |
| --- | --- | --- |
| name | Non-empty string, length <= 255 | Empty, length > 255 |
| price | Number > 0 | Missing, 0, negative, non-numeric |
| category_id | Existing category ID | Missing, non-existing category ID |
| operation | Create, read, update, delete | Unauthorized operation |

## Domain Testing Table

TODO

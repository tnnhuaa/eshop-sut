# FR-05 Mobile Domain Model

## Domain Variables

| Variable | Valid Domain | Invalid/Risky Domain |
| --- | --- | --- |
| search_keyword | Empty or normal product-name text | HTML/script payload, very long text, special characters |
| product_list_response | Product array | Empty array, network error, malformed item |

## Domain Testing Table

TODO

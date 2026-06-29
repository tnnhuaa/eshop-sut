# FR-10 State Transition Model

## States

- pending
- confirmed
- shipping
- delivered
- canceled

## Transition Matrix

| From | To | Actor | Valid? | Reason |
| --- | --- | --- | --- | --- |
| pending | confirmed | Admin | Yes | Admin confirms order |
| confirmed | shipping | Admin | Yes | Admin ships order |
| shipping | delivered | Admin | Yes | Admin completes order |
| pending | canceled | User/Admin | Yes | Cancel allowed |
| confirmed | canceled | User/Admin | Yes | Cancel allowed |
| delivered | any | User/Admin | No | Final state |
| canceled | any | User/Admin | No | Final state |

TODO: Complete full transition matrix.

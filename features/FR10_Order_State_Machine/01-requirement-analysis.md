# FR-10 Order State Machine - Requirement Analysis

## Requirement Source

- SRS: FR-10
- Platform: API + Web/Admin

## Expected State Model

- Valid flow: `pending -> confirmed -> shipping -> delivered`
- Cancel allowed from `pending` and `confirmed`
- Final states: `delivered`, `canceled`
- User cannot cancel when order is `shipping`
- Invalid transitions must return an appropriate error.

## Actors

| Actor | Allowed Actions |
| --- | --- |
| User | Cancel only when allowed by state machine |
| Admin | Confirm, ship, complete, cancel where allowed |

## Open Questions

- TODO

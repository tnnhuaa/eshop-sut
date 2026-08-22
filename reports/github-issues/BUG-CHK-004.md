# [BUG-CHK-004] Successful checkout keeps the cart and permits duplicate orders

## Severity
Critical

## Environment
- Endpoint: `POST /api/checkout`
- Host: `http://localhost:3000`
- Header: `X-Student-Id: 23127280`
- Representative test: `CHK-AI-029`

## Preconditions
Log in as a user and prepare a nonempty isolated cart.

## Steps to reproduce
1. Checkout the cart successfully.
2. Read the cart again.
3. Submit checkout a second time with the same cart.

## Expected result
FR-08 requires the first checkout to clear the cart. A repeated or competing request must not create another order.

## Actual result
The cart remains nonempty and the second checkout returns HTTP 200. A focused concurrent reproduction returned two HTTP 200 responses and created two pending orders from one cart.

## Affected tests
25 cases mapped to `BUG-CHK-004`, including `CHK-AI-001`, `CHK-AI-028`, `CHK-AI-029`, and `CHK-H-005`.

## Evidence to attach
- `evidence/bugs/BUG-CHK-004_CHK-AI-029_request.png`
- `evidence/bugs/BUG-CHK-004_CHK-AI-029_result.png`

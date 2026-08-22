# [BUG-CHK-003] Checkout creates orders from an empty or stale cart

## Severity
High

## Environment
- Endpoint: `POST /api/checkout`
- Host: `http://localhost:3000`
- Header: `X-Student-Id: 23127280`
- Representative test: `CHK-AI-027`

## Preconditions
Log in as a user with an empty cart.

## Steps to reproduce
1. Submit checkout with a valid address while the authenticated user's cart is empty.

## Expected result
The API returns HTTP 400 and does not create an order.

## Actual result
The API returns HTTP 200 and creates an order without validating current cart contents. An injected stale product is also accepted.

## Affected tests
`CHK-AI-027`, `CHK-H-003`, and `CHK-H-004`.

## Evidence to attach
- `evidence/bugs/BUG-CHK-003_CHK-AI-027_request.png`
- `evidence/bugs/BUG-CHK-003_CHK-AI-027_result.png`

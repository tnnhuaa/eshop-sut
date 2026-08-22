# [BUG-CHK-001] Checkout trusts client total instead of recalculating the cart

## Severity
Critical

## Environment
- Endpoint: `POST /api/checkout`
- Host: `http://localhost:3000`
- Header: `X-Student-Id: 23127280`
- Representative test: `CHK-AI-011`

## Preconditions
Log in as a user and prepare an isolated cart worth 200000.

## Steps to reproduce
1. Submit checkout with a forged client total:

```json
{
  "total_amount": 1,
  "shipping_address": "123 Le Loi"
}
```

2. Read the created order from `GET /api/orders/my-orders`.

## Expected result
FR-08 requires the backend to ignore the client total and store the cart-derived total of 200000.

## Actual result
The order stores `total_amount: 1`. Null or omitted values can also be stored as null.

## Affected tests
`CHK-AI-011`–`CHK-AI-018`, `CHK-AI-030`, `CHK-AI-031`, `CHK-H-005`, and `CHK-H-006`.

## Evidence to attach
- `evidence/bugs/BUG-CHK-001_CHK-AI-011_request.png`
- `evidence/bugs/BUG-CHK-001_CHK-AI-011_result.png`

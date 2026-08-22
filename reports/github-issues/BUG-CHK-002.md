# [BUG-CHK-002] Checkout accepts missing or invalid shipping address

## Severity
Medium

## Environment
- Endpoint: `POST /api/checkout`
- Host: `http://localhost:3000`
- Header: `X-Student-Id: 23127280`
- Representative test: `CHK-AI-019`

## Preconditions
Log in as a user and prepare a nonempty cart.

## Steps to reproduce
1. Submit checkout without `shipping_address`:

```json
{
  "total_amount": 200000
}
```

## Expected result
The API returns HTTP 400 and does not create an order.

## Actual result
The API returns HTTP 200 and creates an order. Null, empty, whitespace, numeric, object, and top-level-array variants are also accepted.

## Affected tests
`CHK-AI-019`–`CHK-AI-023`, `CHK-H-001`, and `CHK-H-002`.

## Evidence to attach
- `evidence/bugs/BUG-CHK-002_CHK-AI-019_request.png`
- `evidence/bugs/BUG-CHK-002_CHK-AI-019_result.png`

# [BUG-CPN-001] Ordinary users can create admin coupons

## Severity
Critical

## Environment
- Endpoint: `POST /api/admin/coupons`
- Host: `http://localhost:3000`
- Header: `X-Student-Id: 23127280`
- Test: `CPN-AI-011`

## Preconditions
Log in as the ordinary demo user and use its valid JWT.

## Steps to reproduce
1. Send a valid coupon body to `POST /api/admin/coupons` with the ordinary user's token.

## Expected result
FR-17 and SEC-03 require HTTP 403 and no coupon creation because the token role is not `admin`.

## Actual result
The API returns HTTP 200 with `Coupon created`.

## Affected tests
`CPN-AI-011` and `CPN-AI-012`.

## Evidence to attach
- `evidence/bugs/BUG-CPN-001_CPN-AI-011_request.png`
- `evidence/bugs/BUG-CPN-001_CPN-AI-011_result.png`

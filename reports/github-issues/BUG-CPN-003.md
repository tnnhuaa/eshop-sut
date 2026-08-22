# [BUG-CPN-003] Duplicate coupon code returns HTTP 500 instead of 409

## Severity
Medium

## Environment
- Endpoint: `POST /api/admin/coupons`
- Host: `http://localhost:3000`
- Header: `X-Student-Id: 23127280`
- Test: `CPN-AI-017`

## Preconditions
Create a coupon with a unique code successfully.

## Steps to reproduce
1. Submit the same coupon code a second time.

## Expected result
The API rejects the duplicate with HTTP 409 and a controlled conflict response. Only one matching coupon remains.

## Actual result
The database rejects the duplicate, but the API exposes the SQLite constraint message and returns HTTP 500 Internal Server Error.

## Evidence to attach
- `evidence/bugs/BUG-CPN-003_CPN-AI-017_request.png`
- `evidence/bugs/BUG-CPN-003_CPN-AI-017_result.png`

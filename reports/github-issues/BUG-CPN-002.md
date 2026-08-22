# [BUG-CPN-002] Coupon creation does not validate required fields and value domains

## Severity
High

## Environment
- Endpoint: `POST /api/admin/coupons`
- Host: `http://localhost:3000`
- Header: `X-Student-Id: 23127280`
- Representative test: `CPN-AI-013`

## Preconditions
Log in as an administrator.

## Steps to reproduce
1. Submit a coupon body that omits the required `code`:

```json
{
  "type": "percent",
  "discount_value": 10,
  "min_order_amount": 0,
  "expired_at": "2099-12-31",
  "max_uses_per_user": 1
}
```

## Expected result
The API returns HTTP 400 and does not create a coupon.

## Actual result
The API returns HTTP 200. It also accepts invalid required fields, unsupported enums, nonpositive discounts, invalid numeric types or boundaries, and invalid date values.

## Affected tests
21 cases mapped to `BUG-CPN-002`, including `CPN-AI-013`–`CPN-AI-016`, `CPN-AI-020`–`CPN-AI-027`, `CPN-AI-030`–`CPN-AI-035`, and `CPN-H-001`–`CPN-H-003`.

## Evidence to attach
- `evidence/bugs/BUG-CPN-002_CPN-AI-013_request.png`
- `evidence/bugs/BUG-CPN-002_CPN-AI-013_result.png`

# [BUG-REG-001] Registration accepts missing, malformed, and wrong-type input

## Severity
High

## Environment
- Endpoint: `POST /api/register`
- Host: `http://localhost:3000`
- Header: `X-Student-Id: 23127280`
- Representative test: `REG-AI-009`

## Preconditions
Use a unique email address.

## Steps to reproduce
1. Send `POST /api/register` with `Content-Type: application/json`.
2. Omit the required `name` field:

```json
{
  "email": "reg_009_<unique>@domain.com",
  "password": "Password1!"
}
```

## Expected result
The API returns HTTP 400 and does not create a user.

## Actual result
The API returns HTTP 200 with `User registered successfully` and creates a user. Missing, null, empty, malformed, and wrong-type registration inputs show the same missing-validation behavior.

## Affected tests
`REG-AI-009`–`REG-AI-019`, `REG-AI-022`–`REG-AI-031`, `REG-H-001`–`REG-H-004`, and `REG-H-006`.

## Evidence to attach
- `evidence/bugs/BUG-REG-001_REG-AI-009_request.png`
- `evidence/bugs/BUG-REG-001_REG-AI-009_result.png`

# [BUG-REG-002] Registration allows an exact duplicate email

## Severity
High

## Environment
- Endpoint: `POST /api/register`
- Host: `http://localhost:3000`
- Header: `X-Student-Id: 23127280`
- Test: `REG-AI-020`

## Preconditions
Register a user with a unique email successfully.

## Steps to reproduce
1. Submit a valid registration request with a unique email.
2. Submit the same request again with the exact same email.

## Expected result
The second request returns HTTP 409, and no duplicate account is created.

## Actual result
The second request returns HTTP 200 and creates another user.

## Evidence to attach
- `evidence/bugs/BUG-REG-002_REG-AI-020_request.png`
- `evidence/bugs/BUG-REG-002_REG-AI-020_result.png`

# [BUG-REG-003] Password is stored and returned in plaintext

## Severity
Critical

## Environment
- Endpoints: `POST /api/register`, `POST /api/login`
- Host: `http://localhost:3000`
- Header: `X-Student-Id: 23127280`
- Test: `REG-AI-035`

## Steps to reproduce
1. Register a user with a known password.
2. Log in with the new user.
3. Inspect the `user` object in the login response.

## Expected result
SEC-01 requires the password to be hashed at rest. API responses must not contain the password field or the submitted plaintext value.

## Actual result
The login response contains `user.password` equal to the submitted plaintext password.

## Evidence to attach
- `evidence/bugs/BUG-REG-003_REG-AI-035_request.png`
- `evidence/bugs/BUG-REG-003_REG-AI-035_result.png`

# HW02 Day 1 Guide

## Teacher's Objective

Day 1 is not about designing test cases yet. The goal is to make the SUT runnable, freeze the environment information, and prepare a clean evidence/report structure so later testing work is traceable.

## Selected Scope

| Pool | Feature | Platform |
| --- | --- | --- |
| A | FR-06 Product Detail View | Web User |
| B | FR-10 Order State Machine | API + Web |
| C | FR-15 Product Management CRUD | Admin Web + API |
| D | FR-05 Product Listing and Search | Mobile |

FR-14 Category Management CRUD is reserved only for Agent Skill demonstration.

## Day 1 Checklist

- [ ] Confirm current branch is dedicated to HW02.
- [ ] Record SUT commit hash in `logs/environment.md`.
- [ ] Install dependencies for backend, web, admin, and mobile.
- [ ] Reset or seed database with `node database.js`.
- [ ] Start backend at `http://localhost:3000`.
- [ ] Start web user app at `http://localhost:5173`.
- [ ] Start admin app at `http://localhost:5174`.
- [ ] Start Expo mobile app and verify backend connectivity.
- [ ] Verify default user login.
- [ ] Verify default admin login.
- [ ] Capture setup screenshots into `supporting/setup-evidence/`.
- [ ] Update AI Audit immediately after AI-supported work.
- [ ] Commit assignment structure and documentation templates.

## Commands

```powershell
git branch --show-current
git rev-parse HEAD

cd backend
npm install
node database.js
node server.js
```

Open a new terminal:

```powershell
cd frontend-web
npm install
npm run dev
```

Open a new terminal:

```powershell
cd frontend-admin
npm install
npm run dev
```

Open a new terminal:

```powershell
cd frontend-mobile
npm install
npx expo start
```

## Evidence Naming

- `supporting/setup-evidence/backend-running.png`
- `supporting/setup-evidence/web-running.png`
- `supporting/setup-evidence/admin-running.png`
- `supporting/setup-evidence/mobile-running.png`
- `supporting/setup-evidence/user-login-success.png`
- `supporting/setup-evidence/admin-login-success.png`

## Teacher Notes

- Treat the course README as the oracle for expected behavior.
- Record documentation inconsistencies as assumptions/gaps before calling them bugs.
- The admin password appears inconsistent between `README.md` and `setup_guide.md`; verify during setup and record the result.

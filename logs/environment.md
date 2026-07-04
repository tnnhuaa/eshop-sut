# Environment Log

## Repository

- Repository: `eshop-sut`
- Local path: `F:\D\Uni\YEAR_3\SEM_3\TESTING\LAB\Homework\HW02`
- Branch: `hw2-tanh`
- SUT commit hash: `85af3ba875c88283615e22cb108f13e2fccaf0e9`
- Date recorded: 2026-07-04

## Runtime

| Component | Expected Command | Expected URL | Status |
| --- | --- | --- | --- |
| Backend | `node server.js` | `http://localhost:3000` | Verified during homework execution |
| Web User | `npm run dev` | `http://localhost:5173` | Verified during FR-06 and FR-10 execution |
| Admin Web | `npm run dev` | `http://localhost:5174` | Verified during FR-10 and FR-15 execution |
| Mobile Expo | `npx expo start` | Expo Go / emulator | Used for FR-05-M manual execution; emulator double-check was limited by storage |

## Accounts To Verify

| Role | Email | Password Source | Result |
| --- | --- | --- | --- |
| User | `test@eshop.com` | README.md: `Test1234!` | Verified for frontend testing |
| Admin | `admin@eshop.com` | README.md: `Admin123!` | Verified for Admin Web testing |

## Notes

- Functional execution results in this submission are based on frontend UI behavior.
- Backend/API access was used only as supporting context or test-data setup where needed.

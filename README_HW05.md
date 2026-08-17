# HW05 Performance Testing Workspace

Current state: plans and supporting automation are prepared; official evidence is `NOT_RUN`. Preflight `23127280_Preflight_20260816_000610` is retained as `REJECTED`; create a fresh preflight before calibration.

## Scenario B

Login → Search → Product Detail → Add/Get Cart → Apply Fixed Coupon → Checkout → Record Coupon Usage → My Orders.

## Safe start

1. Read `manual/00-decisions-and-approvals.md` and confirm group uniqueness.
2. Start the backend, then generate fixtures with `scripts/seed-performance-data.js`.
3. Run `scripts/preflight.ps1`; inspect the HTML report and CSV JTL using the procedure in `manual/02-official-run-runbook.md` before measured traffic.
4. Calibrate `L`; do not copy guessed VU values into official runs.
5. Use `manual/02-official-run-runbook.md` and stop at every human gate.

Never overwrite raw evidence or mark AI-generated material as human-verified.

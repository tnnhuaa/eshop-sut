# HW05 Performance Testing Workspace

Current state: calibration accepted at `L = 10`; Stress and corrected Spike are `HUMAN_VERIFIED`; Soak `_002` is `RUN_UNVERIFIED` pending the student's verdict. Load `_001` must not be submitted until its original raw JTL is recovered or a fresh Load run is recorded because 45 later preflight samples were appended to the current raw file.

## Scenario B

Login → Search → Product Detail → Add/Get Cart → Apply Fixed Coupon → Checkout → Record Coupon Usage → My Orders.

## Safe start

1. Review and accept or reject Soak `_002` using its JTL, HTML report, screenshots, and resource CSV.
2. Recover the original Load `_001` JTL by its recorded SHA-256, or record a fresh Load `_002` in CLI mode.
3. Add the four video URLs and complete the human-review form.
4. Run the final submission audit before packaging.

Never overwrite raw evidence or mark AI-generated material as human-verified.

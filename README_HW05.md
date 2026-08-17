# HW05 Performance Testing Workspace

Current state: calibration accepted at `L = 10`; Stress, corrected Spike, and Soak `_002` are `HUMAN_VERIFIED`. Load `_001` must not be submitted until its original raw JTL is recovered or a fresh Load run is recorded because 45 later preflight samples were appended to the current raw file.

## Scenario B

Login → Search → Product Detail → Add/Get Cart → Apply Fixed Coupon → Checkout → Record Coupon Usage → My Orders.

## Safe start

1. Record a fresh Load `_002` in CLI mode because no byte-identical backup of Load `_001` was found.
2. Add the four video URLs and complete the human-review form.
3. Run the final submission audit before packaging.

Never overwrite raw evidence or mark AI-generated material as human-verified.

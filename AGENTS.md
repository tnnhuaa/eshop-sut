# HW05 Performance Testing Guardrails

- Implement only Scenario B: login, product search/detail, cart, fixed coupon, checkout, coupon usage, and order history.
- Keep test data external in CSV or properties; do not hardcode per-user scenario arrays in JMX files.
- Do not modify SUT behavior to make a performance test pass.
- Never overwrite raw JTL files or HTML report directories.
- Require a passing 1-VU, 1-iteration preflight before any measured run.
- Stop for explicit student approval before Stress, Spike, or Soak execution.
- Never fabricate JTL data, metrics, screenshots, hardware identity, narration, video, human review, commits, issues, uploads, or submission evidence.
- Treat missing or unverified evidence as `INCOMPLETE`.
- Create or publish an issue only after the student provides `CONFIRM <BugID>`.
- Use CLI/non-GUI mode for measured JMeter runs. GUI listeners are for post-run inspection only.


---
name: eshop-jmeter-performance
description: Prepare, validate, execute with human approval, and analyze guarded Apache JMeter performance tests for the EShop REST API. Use for Scenario B coupon-purchase JMX plans, CSV fixtures, Load/Stress/Spike/Soak profiles, JTL validation and summaries, evidence manifests, and HW05 performance-testing runbooks where missing or unverified evidence must remain explicit.
---

# EShop JMeter Performance

Build and assess EShop performance artifacts without fabricating execution or human evidence.

## Workflow

1. Inspect the repository and endpoint implementation before generating a plan. Read [references/scenario-b.md](references/scenario-b.md) for the required flow.
2. Validate CSV inputs, correlations, assertions, filename, and XML with `scripts/validate_jmx.py`.
3. Present the proposed profile, paths, stop conditions, and reset ID. Stop before Stress, Spike, Soak, or any official run until the student explicitly approves.
4. Execute only through the repository runner, which must refuse to overwrite JTL and report paths.
5. Validate a real JTL with `scripts/validate_jtl.py`, summarize without editing the source, and build a SHA-256 manifest with `scripts/build_manifest.py`.
6. Mark unexecuted or unverified artifacts `NOT_RUN` or `RUN_UNVERIFIED`. Only the student may mark `HUMAN_VERIFIED`.

## Plan requirements

- Reuse the complete Scenario B business sequence for Load, Stress, and Spike.
- Read users and business inputs from the external CSV.
- Extract and verify `token`, `user_id`, product `name` and `price`, `coupon_id`, `discount_amount`, `final_amount`, and `orderId`.
- Record coupon usage only after successful checkout.
- Verify order history contains the new `orderId`.
- Use a fixed coupon; do not silently use the known-bad percent calculation.
- Keep GUI listeners disabled during measured CLI runs. Open the raw JTL in the assigned report view afterward.

## Safety and evidence boundary

Read [references/evidence-policy.md](references/evidence-policy.md) before running or assessing evidence. Never modify the SUT to obtain a pass. Never invent workload values, metrics, resource readings, screenshots, narration, student review, defects, GitHub issues, uploads, or submission state.

If evidence is missing, stop and list the missing items. If an assertion fails, classify it first as a test, data, timing, environment, or candidate product problem. Require reproduction and `CONFIRM <BugID>` before publishing an issue.

## Bundled resources

- Read [references/rubric-checks.md](references/rubric-checks.md) when auditing completeness.
- Copy [assets/run-record-template.md](assets/run-record-template.md) after a real run.
- Copy [assets/human-review-template.md](assets/human-review-template.md) for the student's critique.
- Copy [assets/ai-critique-template.md](assets/ai-critique-template.md) only as a draft structure; the student must write and approve the substantive judgment.


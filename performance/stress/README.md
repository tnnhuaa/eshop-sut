# Stress plan — Scenario B Coupon Purchase

`23127280_Stress_20260815.jmx` implements the same canonical workflow used by the other HW05 profiles. It runs four serial standard JMeter thread groups at `L`, `ceil(1.5L)`, `2L`, and `3L`. `L` is mandatory and must be copied from the completed calibration result.

The CSV header must be:

```text
email,password,search_keyword,product_id,quantity,coupon_code,shipping_address
```

Use pre-seeded, valid credentials and a fixed coupon (`PERF50000` is the canonical performance seed; `BIGBUY` and `VIP100` remain accepted fixed test-data codes). The CSV is one global cycling pool shared across the four serialized stages. It must contain at least as many distinct credential rows as the peak stage (`3L`) so concurrently active virtual users remain isolated.

Coupon usage is persisted and limited per user. Configure the performance coupon's per-user usage allowance to cover the full run, including recycled rows, and reset/reseed the backend immediately before every official run. Without both controls, coupon-limit failures and accumulated carts/orders would corrupt the stress result.

Example CLI shape (do not use until calibration and the human execution gate are complete):

```powershell
jmeter.bat -n -t performance/stress/23127280_Stress_20260815.jmx -JL=<CALIBRATED_L> -Jbase_url=http://localhost:3000 -Jusers_csv=<ABSOLUTE_CSV_PATH> -Jramp_seconds=30 -Jhold_seconds=120 -Jthink_min_ms=500 -Jthink_max_ms=1500 -Jrun_id=23127280_Stress_20260815 -l <NEW_JTL_PATH> -e -o <NEW_EMPTY_HTML_REPORT_DIR>
```

Run in CLI/non-GUI mode. After the run, load the JTL into the disabled `POST-RUN ONLY - Aggregate Report` listener for the required stress report view. Never enable that listener during the official load run. `result_path` and `report_path` are documented pass-through properties; the authoritative output locations are still the CLI `-l` and `-o` arguments.

This plan does not seed data, select `L`, run the SUT, or create evidence. Those are separate human-gated steps.

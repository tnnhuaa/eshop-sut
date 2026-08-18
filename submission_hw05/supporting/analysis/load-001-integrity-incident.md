# Load `_001` Raw-JTL Integrity Incident

## Status

`REPLACED` — do not submit the current raw JTL as the accepted Load `_001` evidence. The student recorded and verified `23127280_Load_Official_20260818_002` as the replacement on 2026-08-18.

## Evidence mismatch

- Run ID: `23127280_Load_Official_20260817_001`
- Original accepted count in the HTML report, screenshots, and run record: `7108` samples
- Current raw JTL count: `7153` samples
- Extra rows: `45`
- SHA-256 recorded at acceptance: `3973fc488f9e10c4495a28502eab80799e3dcc0fe8da60486a9ea5f7ae88a08c`
- Current raw JTL SHA-256: `01b6085a1f0b6cd5e5d3cb9bfb91a37b34d00788547364d5b40d20a814bb1ea6`

The 45 extra rows form five groups of nine samples at approximately 00:40, 01:09, 01:29, 01:47, and 02:07 on 2026-08-18. Those times align with later preflight executions, not the accepted Load interval, which ended around 00:16.

## Resolution

The student seeded clean data and manually recorded a new CLI Load run as `23127280_Load_Official_20260818_002`. The replacement contains 7,120 successful samples, 0.00% errors, and a byte-preserved raw JTL. The `_001` file remains unchanged and excluded from submission.

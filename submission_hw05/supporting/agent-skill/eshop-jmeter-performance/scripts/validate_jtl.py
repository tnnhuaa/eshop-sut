#!/usr/bin/env python3
import argparse
import csv
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument("jtl", type=Path)
args = parser.parse_args()
if not args.jtl.is_file() or args.jtl.stat().st_size == 0:
    raise SystemExit("INCOMPLETE: JTL is missing or empty")
with args.jtl.open("r", encoding="utf-8-sig", newline="") as handle:
    reader = csv.DictReader(handle)
    required = {"timeStamp", "elapsed", "label", "responseCode", "success"}
    missing = required.difference(reader.fieldnames or [])
    if missing:
        raise SystemExit(f"INCOMPLETE: missing JTL columns: {', '.join(sorted(missing))}")
    rows = sum(1 for _ in reader)
if rows == 0:
    raise SystemExit("INCOMPLETE: JTL contains no samples")
print(f"RUN_UNVERIFIED: {rows} samples; student verification still required")


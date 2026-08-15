#!/usr/bin/env python3
import argparse
import hashlib
import json
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument("paths", nargs="+", type=Path)
parser.add_argument("--output", required=True, type=Path)
args = parser.parse_args()
records = []
for item in args.paths:
    if not item.is_file():
        records.append({"path": item.as_posix(), "state": "INCOMPLETE"})
        continue
    records.append({"path": item.as_posix(), "size": item.stat().st_size, "sha256": hashlib.sha256(item.read_bytes()).hexdigest(), "state": "RUN_UNVERIFIED"})
args.output.parent.mkdir(parents=True, exist_ok=True)
args.output.write_text(json.dumps({"files": records}, indent=2) + "\n", encoding="utf-8")
print(args.output)


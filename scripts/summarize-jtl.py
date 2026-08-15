#!/usr/bin/env python3
import argparse
import csv
import json
import math
from collections import Counter
from pathlib import Path


def percentile(values, fraction):
    if not values:
        return None
    ordered = sorted(values)
    rank = max(0, math.ceil(fraction * len(ordered)) - 1)
    return ordered[rank]


def main():
    parser = argparse.ArgumentParser(description="Summarize a real JMeter CSV JTL without changing it.")
    parser.add_argument("jtl", type=Path)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    if not args.jtl.is_file() or args.jtl.stat().st_size == 0:
        raise SystemExit(f"Missing or empty JTL: {args.jtl}")

    elapsed = []
    timestamps = []
    end_timestamps = []
    success = 0
    labels = Counter()
    codes = Counter()
    with args.jtl.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        required = {"timeStamp", "elapsed", "label", "responseCode", "success"}
        missing = required.difference(reader.fieldnames or [])
        if missing:
            raise SystemExit(f"JTL missing columns: {', '.join(sorted(missing))}")
        for row in reader:
            sample_elapsed = int(row["elapsed"])
            sample_start = int(row["timeStamp"])
            elapsed.append(sample_elapsed)
            timestamps.append(sample_start)
            end_timestamps.append(sample_start + sample_elapsed)
            labels[row["label"]] += 1
            codes[row["responseCode"]] += 1
            success += row["success"].lower() == "true"

    total = len(elapsed)
    if total == 0:
        raise SystemExit("JTL has no samples")
    duration = max(0.001, (max(end_timestamps) - min(timestamps)) / 1000)
    result = {
        "source": args.jtl.as_posix(),
        "evidence_state": "RUN_UNVERIFIED",
        "samples": total,
        "successes": success,
        "errors": total - success,
        "error_rate_percent": round((total - success) * 100 / total, 4),
        "duration_seconds": round(duration, 3),
        "throughput_samples_per_second": round(total / duration, 3),
        "elapsed_ms": {
            "min": min(elapsed),
            "p50": percentile(elapsed, 0.50),
            "p90": percentile(elapsed, 0.90),
            "p95": percentile(elapsed, 0.95),
            "p99": percentile(elapsed, 0.99),
            "max": max(elapsed),
        },
        "labels": dict(labels),
        "response_codes": dict(codes),
    }
    rendered = json.dumps(result, indent=2, ensure_ascii=False)
    print(rendered)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(rendered + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()

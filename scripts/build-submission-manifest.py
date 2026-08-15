#!/usr/bin/env python3
import argparse
import hashlib
import json
from pathlib import Path


def sha256(path):
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def main():
    parser = argparse.ArgumentParser(description="Build a read-only file manifest; never repairs missing evidence.")
    parser.add_argument("root", type=Path, nargs="?", default=Path.cwd())
    parser.add_argument("--output", type=Path, default=Path("submission-manifest.json"))
    args = parser.parse_args()
    root = args.root.resolve()
    output = (root / args.output).resolve() if not args.output.is_absolute() else args.output.resolve()
    entries = []
    for path in sorted(item for item in root.rglob("*") if item.is_file()):
        if any(part in {".git", "node_modules", "__pycache__"} for part in path.parts) or path.name == "jmeter.log" or path == output:
            continue
        entries.append({
            "path": path.relative_to(root).as_posix(),
            "size": path.stat().st_size,
            "sha256": sha256(path),
        })
    output.write_text(json.dumps({"root": root.name, "files": entries}, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(entries)} entries to {output}")


if __name__ == "__main__":
    main()

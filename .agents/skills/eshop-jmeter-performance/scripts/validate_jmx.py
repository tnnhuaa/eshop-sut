#!/usr/bin/env python3
import argparse
import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

SKILL_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_CONTRACT = SKILL_ROOT / "references" / "scenario-b-contract.json"


def load_contract(path):
    contract_path = path or DEFAULT_CONTRACT
    try:
        contract = json.loads(contract_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise ValueError(f"cannot read endpoint contract {contract_path}: {exc}") from exc

    required = {
        "name",
        "filename_pattern",
        "samplers",
        "csv_variables",
        "correlations",
        "listener_by_scenario",
    }
    missing = required.difference(contract)
    if missing:
        raise ValueError(f"endpoint contract missing keys: {', '.join(sorted(missing))}")
    try:
        re.compile(contract["filename_pattern"])
    except (TypeError, re.error) as exc:
        raise ValueError(f"invalid filename_pattern: {exc}") from exc
    for sampler in contract["samplers"]:
        if not isinstance(sampler, dict) or not {"number", "keyword"}.issubset(sampler):
            raise ValueError("each sampler needs number and keyword")
    return contract, contract_path


def validate(path, contract):
    errors = []
    if not re.fullmatch(contract["filename_pattern"], path.name):
        errors.append(f"filename does not match contract pattern: {contract['filename_pattern']}")
    try:
        root = ET.parse(path).getroot()
    except (ET.ParseError, OSError) as exc:
        return [f"XML parse failed: {exc}"]
    roots = [root]
    serialized = ET.tostring(root, encoding="unicode")
    if "<HTTPSamplerProxy" not in serialized:
        fragment_name = contract.get("fragment_filename")
        fragment = path.with_name(fragment_name) if fragment_name else None
        if fragment and fragment.is_file():
            try:
                fragment_root = ET.parse(fragment).getroot()
                roots.append(fragment_root)
                serialized += ET.tostring(fragment_root, encoding="unicode")
            except ET.ParseError as exc:
                errors.append(f"included endpoint fragment XML parse failed: {exc}")
        else:
            errors.append("plan contains no HTTP samplers and no configured sibling fragment")
    sampler_names = [
        element.attrib.get("testname", "").lower()
        for document_root in roots
        for element in document_root.iter("HTTPSamplerProxy")
    ]
    for sampler in contract["samplers"]:
        number = str(sampler["number"])
        keyword = str(sampler["keyword"]).lower()
        if not any(number in name and keyword in name for name in sampler_names):
            pattern = rf'testname="[^"]*{re.escape(number)}[^"]*{re.escape(keyword)}[^"]*"'
            if not re.search(pattern, serialized, re.IGNORECASE):
                errors.append(f"missing required sampler {number} ({keyword})")
    if any(document_root.find(".//IncludeController") is not None for document_root in roots):
        errors.append("IncludeController is not allowed; embed the workflow and use ModuleController")
    for variable in contract["csv_variables"]:
        if variable not in serialized:
            errors.append(f"missing CSV variable: {variable}")
    extracted = set()
    for document_root in roots:
        for processor in document_root.iter("JSONPostProcessor"):
            for prop in processor.findall("stringProp"):
                if prop.attrib.get("name") == "JSONPostProcessor.referenceNames" and prop.text:
                    extracted.update(item.strip() for item in prop.text.split(";") if item.strip())
    for correlation in contract["correlations"]:
        if correlation not in extracted:
            errors.append(f"missing extracted correlation variable: {correlation}")
    csv_sets = [element for document_root in roots for element in document_root.iter("CSVDataSet")]
    if not csv_sets:
        errors.append("missing CSV Data Set Config")
    for csv_set in csv_sets:
        values = {prop.attrib.get("name"): (prop.text or "") for prop in csv_set}
        if values.get("recycle") != "true" or values.get("shareMode") != "shareMode.all" or values.get("stopThread") != "false":
            errors.append(f"unsafe CSV pool settings in: {csv_set.attrib.get('testname', 'CSV Data Set')}")
    listeners = [element for document_root in roots for element in document_root.iter("ResultCollector")]
    if any(listener.attrib.get("enabled", "true") == "true" for listener in listeners):
        errors.append("GUI ResultCollector must be disabled for CLI execution")
    for scenario, listener_class in contract["listener_by_scenario"].items():
        if f"_{scenario}_" in path.name and not any(
            listener.attrib.get("guiclass") == listener_class for listener in listeners
        ):
            errors.append(f"missing assigned post-run listener: {listener_class}")
    request_payloads = "".join(
        ET.tostring(sampler, encoding="unicode")
        for document_root in roots
        for sampler in document_root.iter("HTTPSamplerProxy")
    )
    for literal in contract.get("forbidden_literals", []):
        if literal and literal in request_payloads:
            errors.append(f"forbidden literal is hardcoded in an HTTP sampler: {literal}")
    return errors


def main():
    parser = argparse.ArgumentParser(description="Validate a JMeter plan against an endpoint-group contract.")
    parser.add_argument("jmx", type=Path, nargs="+")
    parser.add_argument(
        "--contract",
        type=Path,
        help="JSON endpoint contract; defaults to the bundled Scenario B contract",
    )
    args = parser.parse_args()
    try:
        contract, contract_path = load_contract(args.contract)
    except ValueError as exc:
        raise SystemExit(f"CONTRACT ERROR: {exc}") from exc

    failed = False
    for path in args.jmx:
        errors = validate(path, contract)
        if errors:
            failed = True
            print(f"FAIL {path} [{contract['name']}]")
            for error in errors:
                print(f"  - {error}")
        else:
            print(f"PASS {path} [{contract['name']}; {contract_path.as_posix()}]")
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()

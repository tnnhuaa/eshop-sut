#!/usr/bin/env python3
import argparse
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

REQUIRED_SAMPLERS = [
    ("01", "login"),
    ("02", "search"),
    ("03", "product"),
    ("04", "cart"),
    ("05", "cart"),
    ("06", "coupon"),
    ("07", "checkout"),
    ("08", "coupon"),
    ("09", "orders"),
]
REQUIRED_VARIABLES = ["email", "password", "search_keyword", "product_id", "quantity", "coupon_code", "shipping_address"]


def validate(path):
    errors = []
    if not re.fullmatch(r"23127280_(Load|Stress|Spike|Soak)_\d{8}\.jmx", path.name):
        errors.append("filename does not follow 23127280_{ScenarioType}_{YYYYMMDD}.jmx")
    try:
        root = ET.parse(path).getroot()
    except (ET.ParseError, OSError) as exc:
        return [f"XML parse failed: {exc}"]
    roots = [root]
    serialized = ET.tostring(root, encoding="unicode")
    if "<HTTPSamplerProxy" not in serialized:
        fragment = path.with_name("scenario_b_fragment.jmx")
        if fragment.is_file():
            try:
                fragment_root = ET.parse(fragment).getroot()
                roots.append(fragment_root)
                serialized += ET.tostring(fragment_root, encoding="unicode")
            except ET.ParseError as exc:
                errors.append(f"included scenario fragment XML parse failed: {exc}")
        else:
            errors.append("plan contains no HTTP samplers and no sibling scenario_b_fragment.jmx")
    sampler_names = [
        element.attrib.get("testname", "").lower()
        for document_root in roots
        for element in document_root.iter("HTTPSamplerProxy")
    ]
    for number, keyword in REQUIRED_SAMPLERS:
        if not any(number in name and keyword in name for name in sampler_names):
            pattern = rf'testname="[^"]*{number}[^"]*{keyword}[^"]*"'
            if not re.search(pattern, serialized, re.IGNORECASE):
                errors.append(f"missing Scenario B sampler {number} ({keyword})")
    if any(document_root.find(".//IncludeController") is not None for document_root in roots):
        errors.append("IncludeController is not allowed; embed the workflow and use ModuleController")
    for variable in REQUIRED_VARIABLES:
        if variable not in serialized:
            errors.append(f"missing CSV variable: {variable}")
    extracted = set()
    for document_root in roots:
        for processor in document_root.iter("JSONPostProcessor"):
            for prop in processor.findall("stringProp"):
                if prop.attrib.get("name") == "JSONPostProcessor.referenceNames" and prop.text:
                    extracted.update(item.strip() for item in prop.text.split(";") if item.strip())
    for correlation in ["token", "user_id", "product_name", "product_price", "coupon_id", "discount_amount", "final_amount", "orderId"]:
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
    expected_listener = None
    if "_Load_" in path.name:
        expected_listener = "SummaryReport"
    elif "_Stress_" in path.name:
        expected_listener = "StatVisualizer"
    elif "_Spike_" in path.name:
        expected_listener = "ViewResultsFullVisualizer"
    if expected_listener and not any(listener.attrib.get("guiclass") == expected_listener for listener in listeners):
        errors.append(f"missing assigned post-run listener: {expected_listener}")
    request_payloads = "".join(
        ET.tostring(sampler, encoding="unicode")
        for document_root in roots
        for sampler in document_root.iter("HTTPSamplerProxy")
    )
    if "PERF50000" in request_payloads:
        errors.append("coupon is hardcoded in an HTTP sampler instead of read from CSV")
    return errors


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("jmx", type=Path, nargs="+")
    args = parser.parse_args()
    failed = False
    for path in args.jmx:
        errors = validate(path)
        if errors:
            failed = True
            print(f"FAIL {path}")
            for error in errors:
                print(f"  - {error}")
        else:
            print(f"PASS {path}")
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()

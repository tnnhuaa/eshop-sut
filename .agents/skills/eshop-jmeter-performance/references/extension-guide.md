# Extending the Skill to Another Endpoint Group

Use an endpoint contract to reuse the validation, execution guardrails, JTL checks, summaries, manifests, and evidence states without editing the validator.

## 1. Define the endpoint contract

Copy `assets/endpoint-contract-template.json` into the project and set:

- `filename_pattern`: accepted JMX filename pattern;
- `fragment_filename`: sibling JMX fragment, or `null` when samplers are embedded;
- `samplers`: ordered sampler number and identifying keyword;
- `csv_variables`: fields that must remain external;
- `correlations`: values that the plan must extract from responses;
- `listener_by_scenario`: assigned disabled post-run listener classes;
- `forbidden_literals`: business values that must not be hardcoded in requests.

Map the new workflow before generating JMX. Identify authentication, read-heavy, and transactional requests, then define assertions and downstream correlations for each response.

## 2. Validate the new plan

Run:

```text
python .agents/skills/eshop-jmeter-performance/scripts/validate_jmx.py --contract performance/contracts/new-group.json performance/load/StudentID_Load_YYYYMMDD.jmx
```

Treat every reported omission as a plan problem. Do not weaken the contract merely to obtain `PASS`.

## 3. Reuse the guarded workflow

After the plan passes contract validation:

1. validate the CSV row count and business data;
2. run a 1-VU, 1-iteration preflight;
3. present workload, paths, reset ID, and stop conditions;
4. require explicit approval before Stress, Spike, Soak, or an official run;
5. execute through the overwrite-safe repository runner;
6. validate the raw JTL, summarize it read-only, and build a SHA-256 manifest;
7. keep results `RUN_UNVERIFIED` until the student accepts the evidence.

The endpoint contract changes plan-specific checks. The evidence policy and human-verification boundary never change.

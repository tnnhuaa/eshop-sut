# HW05 completeness checks

- One end-to-end workflow covers auth-heavy, read-heavy, and transactional endpoint groups.
- Load, Stress, and Spike reuse that workflow and use external CSV data.
- Their assigned post-run views are distinct: Summary Report, Aggregate Report, and View Results Tree.
- Official tests run in CLI mode and preserve raw JTL plus generated HTML reports.
- Resource-monitor and hardware evidence comes from the student's machine.
- Soak lasts 10–15 minutes and reports observed stable RPS, p95, error rate, and memory ceiling.
- AI analysis is checked against raw JTL and includes a genuine student correction.
- Continuous testing discusses p95 regression, runner noise, cost, false alarms, baseline drift, and why Stress/Spike must not run against production.
- Agent Skill validation and a real demonstration video are included.
- Filenames follow `{StudentID}_{ScenarioType}_{YYYYMMDD}`.

The current TA rubric totals 100 points. Preserve the current rubric and do not reintroduce the resolved 90-point discrepancy from an earlier assignment version.

# HW02 Submission README

## Self-Assessment

| No. | Criteria | Grade | Self-Assessed Grade |
| --- | --- | ---: | ---: |
| 1 | Feature A - FR-06 Domain + Boundary | 25 | 25 |
| 2 | Feature B - FR-10 Domain + Boundary | 25 | 25 |
| 3 | Feature C - FR-15 Domain + Boundary | 25 | 25 |
| 4 | Feature D - Mobile FR-05 Domain + Boundary | 15 | 15 |
| 5 | Agent Skills | 10 | 10 |
|  | Total | 100 | 100 |

## Test Summary

| Metric | Count |
| --- | ---: |
| Features | 4 |
| Test cases designed | 126 |
| Test cases executed | 126 |
| Passed | 79 |
| Failed | 33 |
| Blocked / not executable from UI scope | 14 |
| Not executed | 0 |
| Bugs | 20 confirmed defects and 1 price clarification |

## Demo Videos

| Video | Link |
| --- | --- |
| Agent Skill end-to-end demo | [Demo link](https://youtu.be/wRbw4lFawZ4) |

## Notes

- The repository `README.md` is preserved as the SUT requirement specification.
- Functional execution followed the teacher clarification that testing results should be taken from the frontend UI.
- API/backend interactions were used only as supporting context or test-data setup when needed.

## Suggested Submission Tree

Source code folders such as `backend/`, `frontend-web/`, `frontend-admin/`, `frontend-mobile/`, and `node_modules/` are intentionally excluded from this tree.

```text
23127280_HW02_AI_DomainTesting_100.zip
├── README.md
├── reports/
│   ├── 23127280_HW02_Main_Report.md
│   ├── 23127280_HW02_Main_Report.pdf
│   ├── 23127280_Bug_Report.md
│   ├── 23127280_Bug_Report.pdf
│   ├── 23127280_AI_Audit_Report.md
│   ├── 23127280_AI_Audit_Report.pdf
│   ├── 23127280_AI_Critique.md
│   └── 23127280_AI_Critique.pdf
├── features/
│   ├── FR06_Product_Detail_Web/
│   ├── FR10_Order_State_Machine/
│   ├── FR15_Product_CRUD_Admin/
│   └── FR05_Product_Search_Mobile/
├── .agent/
│   ├── SKILL.md
│   ├── templates/
│   ├── examples/
│   ├── skill-change-log.md
│   ├── skill-evaluation.md
│   └── demo-video-links.md
├── supporting/
├── test-data/
└── logs/
    ├── environment.md
    ├── execution-log.md
    └── git_commit_log.txt
```

Before packaging, this `SUBMISSION_README.md` can be copied/renamed to `README.md`, and report files can be exported/renamed with the `23127280_` prefix shown above.

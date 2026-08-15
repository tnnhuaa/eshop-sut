# Evidence policy

Use only these states:

- `NOT_RUN`: no execution occurred.
- `RUN_UNVERIFIED`: execution output exists but the student has not accepted it.
- `HUMAN_VERIFIED`: the student inspected the source evidence and explicitly accepted it.
- `REJECTED`: the student rejected the run or artifact and recorded why.

Never generate or repair raw JTL samples, screenshots, Task Manager readings, hardware identity, video, narration, signatures, issue confirmation, YouTube publication, Moodle submission, or oral-defense evidence.

Preserve raw JTL files. Refuse an existing result path or non-empty HTML report folder. Record the Git commit, reset ID, command parameters, start/end time, and file hashes. Keep credentials, tokens, and other private data out of screenshots and reports.

Do not call a failed request a product defect until the test plan, data, timing, and environment have been excluded and the student reproduces it. Require the exact approval `CONFIRM <BugID>` before creating or publishing an issue.


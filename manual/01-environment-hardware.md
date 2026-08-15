# Environment and Hardware Evidence

Evidence state: `NOT_RUN`

## Capture once before official runs

1. Press `Win + R`, enter `dxdiag`, and choose **Save All Information**. Save the real file under `evidence/hardware/`.
2. Open Task Manager → Performance. Capture CPU model, total RAM, disk type, and hostname in one or more screenshots.
3. Record both runtimes: system `java -version`, then `C:\Users\User\Tools\temurin-17\bin\java.exe -version`. Official JMeter runs use the second runtime only.
4. Verify JMeter with scoped JDK 17: set `$env:JAVA_HOME='C:\Users\User\Tools\temurin-17'` in the evidence terminal, then run `C:\Users\User\Tools\apache-jmeter-5.6.3\bin\jmeter.bat -v`.
5. Record Node/npm versions and verify the hostname matches prior homework evidence; do not alter or fabricate it.

## Record

- Hostname:
- CPU:
- Logical processors:
- RAM:
- Storage:
- OS/build:
- Java:
- JMeter-scoped Java:
- JMeter:
- Node/npm:
- Evidence paths:
- Student verification/date:

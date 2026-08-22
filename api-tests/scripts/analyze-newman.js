const fs = require("fs");
const path = require("path");

const repo = path.resolve(__dirname, "..", "..");
const reportPath = process.argv[2]
  ? path.resolve(repo, process.argv[2])
  : path.join(repo, "postman", "reports", "final-newman.json");
const outputPath = process.argv[3]
  ? path.resolve(repo, process.argv[3])
  : path.join(repo, "postman", "reports", "final-newman-summary.json");
const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));

const grouped = new Map();
for (const execution of report.run.executions || []) {
  const name = execution.item?.name || "";
  const match = name.match(/^(REG|CHK|CPN)-(AI|H)-\d{3}/);
  if (!match) continue;
  const testId = match[0];
  const assertions = execution.assertions || [];
  const failures = assertions
    .filter((assertion) => assertion.error)
    .map((assertion) => ({
      assertion: assertion.assertion,
      message: assertion.error.message,
    }));
  let responseBody = "";
  try {
    responseBody = Buffer.from(execution.response.stream?.data || execution.response.stream || []).toString("utf8");
  } catch {}
  const statusFailure = failures.find((failure) => failure.assertion.endsWith("expected HTTP status"));
  const observedFromFailure = statusFailure?.message.match(/to include (\d{3})/)?.[1];
  const candidate = {
    testId,
    itemName: name,
    status: failures.length ? "FAILED" : "PASSED",
    responseCode: observedFromFailure ? Number(observedFromFailure) : execution.response?.code ?? null,
    responseBody: responseBody.slice(0, 1000),
    responseTime: execution.response?.responseTime ?? null,
    failures,
  };
  const existing = grouped.get(testId);
  if (!existing || candidate.failures.length > existing.failures.length) grouped.set(testId, candidate);
}

const cases = [...grouped.values()];

const duplicateExecutions = [];
const byApi = {};
for (const item of cases) {
  const api = item.testId.startsWith("REG") ? "Register" : item.testId.startsWith("CHK") ? "Checkout" : "CreateCoupon";
  byApi[api] ||= { total: 0, passed: 0, failed: 0 };
  byApi[api].total += 1;
  byApi[api][item.status.toLowerCase()] += 1;
}

const failureKinds = {};
for (const item of cases) {
  for (const failure of item.failures) {
    const key = failure.assertion.includes("expected HTTP status")
      ? "STATUS_MISMATCH"
      : failure.assertion.includes("clears cart")
        ? "CART_NOT_CLEARED"
        : failure.assertion.includes("plaintext")
          ? "PLAINTEXT_PASSWORD"
          : failure.assertion.includes("schema")
            ? "SCHEMA_MISMATCH"
            : "OTHER_ASSERTION";
    failureKinds[key] = (failureKinds[key] || 0) + 1;
  }
}

const summary = {
  generatedAt: new Date().toISOString(),
  collection: report.collection?.name,
  totalCases: cases.length,
  passedCases: cases.filter((item) => item.status === "PASSED").length,
  failedCases: cases.filter((item) => item.status === "FAILED").length,
  duplicateExecutions,
  byApi,
  failureKinds,
  runStats: report.run.stats,
  cases,
};

fs.writeFileSync(outputPath, `${JSON.stringify(summary, null, 2)}\n`);
console.log(JSON.stringify({
  outputPath,
  totalCases: summary.totalCases,
  passedCases: summary.passedCases,
  failedCases: summary.failedCases,
  duplicateExecutions,
  byApi,
  failureKinds,
  runStats: summary.runStats,
}, null, 2));

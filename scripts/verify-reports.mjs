import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "@playwright/test";

const root = path.resolve("artifacts", "html-reports");
const expectedStudentId = process.env.STUDENT_ID ?? "23127280";

function findReportIndexes(directory) {
  if (!fs.existsSync(directory)) return [];
  const indexes = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "trace") indexes.push(...findReportIndexes(absolute));
    } else if (entry.name === "index.html") {
      indexes.push(absolute);
    }
  }
  return indexes;
}

const reports = findReportIndexes(root).sort();
const latestReports = new Map();
for (const report of reports) {
  const [feature, browser, timestamp] = path.relative(root, report).split(path.sep);
  if (!feature || !browser || !timestamp) continue;
  const key = `${feature}/${browser}`;
  const current = latestReports.get(key);
  if (!current || timestamp > current.timestamp) {
    latestReports.set(key, { report, timestamp });
  }
}

const expectedKeys = ["FR06", "FR10", "FR15"].flatMap((feature) =>
  ["chromium", "firefox", "edge"].map((browser) => `${feature}/${browser}`),
);
const missingKeys = expectedKeys.filter((key) => !latestReports.has(key));
if (missingKeys.length > 0) {
  throw new Error(`Missing latest HTML reports for: ${missingKeys.join(", ")}`);
}

const reportsToVerify = expectedKeys.map((key) => latestReports.get(key).report);
console.log(`Found ${reports.length} historical reports; verifying the latest 9 feature-browser reports.`);

const browser = await chromium.launch({ headless: true });
try {
  for (const report of reportsToVerify) {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(report).href);
    await page.waitForFunction(
      (studentId) => document.body.innerText.includes(`Run by: ${studentId}`),
      expectedStudentId,
      { timeout: 15_000 },
    );
    const visibleText = await page.locator("body").innerText();
    const relative = path.relative(root, report);
    const timestamp = relative.split(path.sep).at(-2);
    if (!timestamp || !/^\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}\.\d{3}Z$/.test(timestamp)) {
      throw new Error(`Report path is missing a safe ISO timestamp: ${relative}`);
    }
    const isoTimestamp = timestamp.replace(
      /T(\d{2})-(\d{2})-(\d{2})\.(\d{3})Z$/,
      "T$1:$2:$3.$4Z",
    );
    if (!visibleText.includes(isoTimestamp)) {
      throw new Error(`Rendered report is missing ISO timestamp ${isoTimestamp}: ${relative}`);
    }
    console.log(`VALID ${relative} | Run by: ${expectedStudentId} | ${isoTimestamp}`);
    await page.close();
  }
} finally {
  await browser.close();
}

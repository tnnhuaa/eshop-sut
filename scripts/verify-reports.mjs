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
if (reports.length !== 9) {
  throw new Error(`Expected exactly 9 main HTML reports, found ${reports.length}`);
}

const browser = await chromium.launch({ headless: true });
try {
  for (const report of reports) {
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

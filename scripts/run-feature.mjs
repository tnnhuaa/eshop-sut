import { spawnSync } from "node:child_process";
import path from "node:path";
import process from "node:process";

const featureId = process.argv[2]?.toUpperCase();
const forwardedArgs = process.argv.slice(3);
const supportedFeatures = new Set(["FR06", "FR10", "FR15"]);
const supportedBrowsers = new Set(["chromium", "firefox", "edge"]);

if (!supportedFeatures.has(featureId)) {
  console.error("Feature must be one of: FR06, FR10, FR15");
  process.exit(2);
}

const projectArgument = forwardedArgs.find((arg) => arg.startsWith("--project="));
const requestedBrowser = projectArgument?.split("=")[1];

if (requestedBrowser && !supportedBrowsers.has(requestedBrowser)) {
  console.error("Browser project must be one of: chromium, firefox, edge");
  process.exit(2);
}

const browsers = requestedBrowser
  ? [requestedBrowser]
  : ["chromium", "firefox", "edge"];
const passthrough = forwardedArgs.filter((arg) => !arg.startsWith("--project="));
const playwrightCli = path.resolve(
  "node_modules",
  "@playwright",
  "test",
  "cli.js",
);

for (const browser of browsers) {
  const runTimestamp = new Date().toISOString();
  const safeTimestamp = runTimestamp.replaceAll(":", "-");
  const reportDir = path.join(
    "artifacts",
    "html-reports",
    featureId,
    browser,
    safeTimestamp,
  );
  const result = spawnSync(
    process.execPath,
    [
      playwrightCli,
      "test",
      `tests/${featureId.toLowerCase()}`,
      `--project=${browser}`,
      ...passthrough,
    ],
    {
      stdio: "inherit",
      env: {
        ...process.env,
        FEATURE_ID: featureId,
        BROWSER: browser,
        RUN_TIMESTAMP: runTimestamp,
        REPORT_DIR: reportDir,
      },
    },
  );

  if (result.error) {
    console.error(`Unable to start Playwright for ${featureId}/${browser}:`, result.error);
  }
  if (result.status !== 0) {
    process.exitCode = result.status ?? 1;
  }
}

import "dotenv/config";
import path from "node:path";
import { defineConfig, devices } from "@playwright/test";

const studentId = process.env.STUDENT_ID ?? "23127280";
const featureId = process.env.FEATURE_ID ?? "suite";
const browserId = process.env.BROWSER ?? "all";
const runTimestamp = process.env.RUN_TIMESTAMP ?? new Date().toISOString();
const safeTimestamp = runTimestamp.replaceAll(":", "-");
const reportDir =
  process.env.REPORT_DIR ??
  path.join("artifacts", "html-reports", featureId, browserId, safeTimestamp);

export default defineConfig({
  testDir: "./tests",
  globalSetup: "./tests/support/global-setup.ts",
  fullyParallel: false,
  workers: 1,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  timeout: 30_000,
  expect: { timeout: 7_500 },
  outputDir: path.join(
    "artifacts",
    "test-results",
    featureId,
    browserId,
    safeTimestamp,
  ),
  metadata: {
    "Run by": studentId,
    Feature: featureId,
    Browser: browserId,
    "Run timestamp": runTimestamp,
  },
  reporter: [
    ["list"],
    [
      "html",
      {
        outputFolder: reportDir,
        open: "never",
        title: `Run by: ${studentId} | ${featureId} | ${browserId} | ${runTimestamp}`,
      },
    ],
  ],
  use: {
    baseURL: process.env.WEB_BASE_URL ?? "http://127.0.0.1:5173",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    actionTimeout: 10_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "edge",
      use: { ...devices["Desktop Edge"], channel: "msedge" },
    },
  ],
  webServer: [
    {
      command: "node server.js",
      cwd: "backend",
      url: "http://127.0.0.1:3000/api/products",
      reuseExistingServer: false,
      timeout: 30_000,
    },
    {
      command: "npm run dev -- --host 127.0.0.1 --port 5173",
      cwd: "frontend-web",
      url: "http://127.0.0.1:5173",
      reuseExistingServer: false,
      timeout: 30_000,
    },
    {
      command: "npm run dev -- --host 127.0.0.1 --port 5174",
      cwd: "frontend-admin",
      url: "http://127.0.0.1:5174",
      reuseExistingServer: false,
      timeout: 30_000,
    },
  ],
});

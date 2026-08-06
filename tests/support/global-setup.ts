import { spawnSync } from "node:child_process";
import path from "node:path";
import process from "node:process";

export default async function globalSetup(): Promise<void> {
  if (process.env.FEATURE_ID !== "FR10") return;

  const seedScript = path.resolve("test-data", "seed-fr10-orders.js");
  const result = spawnSync(process.execPath, [seedScript], {
    cwd: process.cwd(),
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`FR10 database seed failed with exit code ${result.status}`);
  }
}

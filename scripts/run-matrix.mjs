import { spawnSync } from "node:child_process";
import process from "node:process";

const nodeCommand = process.execPath;
let hasFailure = false;

for (const featureId of ["FR06", "FR10", "FR15"]) {
  for (const browser of ["chromium", "firefox", "edge"]) {
    const result = spawnSync(
      nodeCommand,
      ["scripts/run-feature.mjs", featureId, `--project=${browser}`],
      { stdio: "inherit", env: process.env },
    );
    hasFailure ||= result.status !== 0;
  }
}

process.exitCode = hasFailure ? 1 : 0;

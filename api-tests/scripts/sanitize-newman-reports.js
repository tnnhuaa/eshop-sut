const fs = require("fs");
const path = require("path");

const repo = path.resolve(__dirname, "..", "..");
const reportDir = path.join(repo, "postman", "reports");
const argumentsFromCli = process.argv.slice(2);
const targets = argumentsFromCli.length
  ? argumentsFromCli.map((target) => path.resolve(repo, target))
  : [
      path.join(reportDir, "final-newman.html"),
      path.join(reportDir, "final-newman-summary.json"),
    ];
const jwtPattern = /eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g;

const result = [];
for (const filePath of targets) {
  const original = fs.readFileSync(filePath, "utf8");
  const matches = original.match(jwtPattern) || [];
  const sanitized = original.replace(jwtPattern, "[REDACTED_JWT]");
  fs.writeFileSync(filePath, sanitized, "utf8");
  result.push({ file: path.relative(repo, filePath), redactedTokens: matches.length });
}

console.log(JSON.stringify(result, null, 2));

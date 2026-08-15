const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const sqlite3 = require(path.resolve(__dirname, "../backend/node_modules/sqlite3")).verbose();

function arg(name, fallback) {
  const prefix = `--${name}=`;
  const value = process.argv.find((item) => item.startsWith(prefix));
  return value ? value.slice(prefix.length) : fallback;
}

function csv(value) {
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function run(db, sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function callback(error) {
      if (error) reject(error);
      else resolve({ changes: this.changes, lastID: this.lastID });
    });
  });
}

async function main() {
  const userCount = Number.parseInt(arg("users", "10"), 10);
  const maxUses = Number.parseInt(arg("max-uses", "1000"), 10);
  const runId = arg("reset-id", `reset-${new Date().toISOString().replace(/[:.]/g, "-")}`);
  const output = path.resolve(arg("output", path.resolve(__dirname, "../performance/data/users.csv")));
  const dbPath = path.resolve(__dirname, "../backend/database.sqlite");

  if (!Number.isInteger(userCount) || userCount < 1) throw new Error("--users must be a positive integer");
  if (!Number.isInteger(maxUses) || maxUses < 1) throw new Error("--max-uses must be a positive integer");
  if (!fs.existsSync(dbPath)) throw new Error(`Database not found: ${dbPath}. Start the backend first.`);

  const db = new sqlite3.Database(dbPath);
  try {
    await run(db, "BEGIN IMMEDIATE TRANSACTION");
    await run(db, "DELETE FROM coupon_usage WHERE coupon_id IN (SELECT id FROM coupons WHERE code = ?)", ["PERF50000"]);
    await run(db, "DELETE FROM coupons WHERE code = ?", ["PERF50000"]);
    await run(db, "DELETE FROM users WHERE email LIKE ?", ["perf_%@example.test"]);
    await run(
      db,
      "INSERT INTO coupons (code, type, discount_value, min_order_amount, expired_at, is_active, max_uses_per_user) VALUES (?, ?, ?, ?, ?, ?, ?)",
      ["PERF50000", "fixed", 50000, 100000, "2099-12-31", 1, maxUses],
    );

    const rows = ["email,password,search_keyword,product_id,quantity,coupon_code,shipping_address"];
    for (let index = 1; index <= userCount; index += 1) {
      const suffix = String(index).padStart(3, "0");
      const email = `perf_${suffix}@example.test`;
      const password = "Perf1234!";
      const address = `${index} Performance Street, HCMC`;
      await run(
        db,
        "INSERT INTO users (name, email, password, role, shipping_address) VALUES (?, ?, ?, 'user', ?)",
        [`Performance User ${suffix}`, email, password, address],
      );
      rows.push([email, password, "iPhone", 1, 1, "PERF50000", address].map(csv).join(","));
    }
    await run(db, "COMMIT");

    fs.mkdirSync(path.dirname(output), { recursive: true });
    const csvText = `${rows.join("\n")}\n`;
    fs.writeFileSync(output, csvText, "utf8");
    const manifest = {
      reset_id: runId,
      created_at_gmt7: new Date(Date.now() + 7 * 60 * 60 * 1000).toISOString().replace("Z", "+07:00"),
      database: "backend/database.sqlite",
      users: userCount,
      coupon: { code: "PERF50000", type: "fixed", discount_value: 50000, max_uses_per_user: maxUses },
      csv: path.relative(path.resolve(__dirname, ".."), output).replaceAll("\\", "/"),
      csv_sha256: crypto.createHash("sha256").update(csvText).digest("hex"),
      evidence_state: "RUN_UNVERIFIED",
    };
    fs.writeFileSync(path.resolve(__dirname, "../performance/data/last-reset.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
    console.log(JSON.stringify(manifest, null, 2));
  } catch (error) {
    try { await run(db, "ROLLBACK"); } catch (_) { /* no active transaction */ }
    throw error;
  } finally {
    db.close();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});


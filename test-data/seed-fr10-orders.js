const path = require("path");
const sqlite3 = require("../backend/node_modules/sqlite3").verbose();

const dbPath = path.resolve(__dirname, "../backend/database.sqlite");
const db = new sqlite3.Database(dbPath);

const orders = [
  ["FR10-A pending to confirm", 101000, "pending"],
  ["FR10-B confirmed to shipping", 102000, "confirmed"],
  ["FR10-C shipping to delivered", 103000, "shipping"],
  ["FR10-D user cancel pending", 104000, "pending"],
  ["FR10-E user cancel confirmed", 105000, "confirmed"],
  ["FR10-F user cancel shipping", 106000, "shipping"],
  ["FR10-K delivered final", 111000, "delivered"],
  ["FR10-L canceled final", 112000, "canceled"],
  ["FR10-AA cross-role shipping cancel", 121000, "shipping"],
  ["FR10-AB canceled admin mark delivered", 122000, "canceled"],
  ["FR10-P non-admin admin action", 117000, "pending"],
  ["FR10-X pending valid adjacent", 125000, "pending"],
  ["FR10-Y pending invalid skipped", 126000, "pending"],
  ["FR10-BVA-T confirmed user cancel", 131000, "confirmed"],
  ["FR10-BVA-U shipping user cancel", 132000, "shipping"],
  ["FR10-BVA-V shipping deliver then cancel", 133000, "shipping"],
  ["FR10-BVA-W pending cancel final", 134000, "pending"],
  ["FR10-BVA-Z shipping lowercase/case", 135000, "shipping"],
];

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function onRun(err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

async function main() {
  const user = await get("SELECT id FROM users WHERE email = ?", [
    "test@eshop.com",
  ]);

  if (!user) {
    throw new Error(
      "Missing seed user test@eshop.com. Start with the original seeded database first.",
    );
  }

  await run("DELETE FROM orders WHERE shipping_address LIKE 'FR10-%'");

  for (const [shippingAddress, totalAmount, status] of orders) {
    await run(
      "INSERT INTO orders (user_id, total_amount, status, shipping_address) VALUES (?, ?, ?, ?)",
      [user.id, totalAmount, status, shippingAddress],
    );
  }

  const rows = await all(
    "SELECT id, status, shipping_address FROM orders WHERE shipping_address LIKE 'FR10-%' ORDER BY id",
  );

  console.log("Seeded FR-10 orders into backend/database.sqlite");
  console.table(rows);
}

main()
  .catch((err) => {
    console.error(err.message);
    process.exitCode = 1;
  })
  .finally(() => db.close());

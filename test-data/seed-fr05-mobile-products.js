const path = require("path");
const sqlite3 = require("../backend/node_modules/sqlite3").verbose();

const dbPath = path.resolve(__dirname, "../backend/database.sqlite");
const db = new sqlite3.Database(dbPath);

const products = [
  [
    "FR05M-ALPHA Phone Basic",
    1200000,
    "Seed product for many-result mobile search.",
    "https://placehold.co/300x300/png?text=FR05M+Alpha+Basic",
    1,
  ],
  [
    "FR05M-ALPHA Phone Pro",
    2500000,
    "Second seed product for many-result mobile search.",
    "https://placehold.co/300x300/png?text=FR05M+Alpha+Pro",
    1,
  ],
  [
    "FR05M-ALPHA Tablet Mini",
    3500000,
    "Third seed product for scroll/list search.",
    "https://placehold.co/300x300/png?text=FR05M+Alpha+Tablet",
    2,
  ],
  [
    "FR05M-SINGLE-Op lung Pixel",
    99000,
    "Unique single-result product.",
    "https://placehold.co/300x300/png?text=FR05M+Single",
    3,
  ],
  [
    "FR05M-VIET Điện thoại Việt Nam",
    1999000,
    "Vietnamese keyword/accent search product.",
    "https://placehold.co/300x300/png?text=FR05M+Viet",
    1,
  ],
  [
    "FR05M-SAFE-<b>HTML</b>",
    888000,
    "Unsafe-looking name should render as text.",
    "https://placehold.co/300x300/png?text=FR05M+Safe",
    3,
  ],
  [
    "FR05M-BROKEN-IMAGE",
    777000,
    "Broken image URL should not crash product list.",
    "https://invalid.invalid/fr05m-broken-image.png",
    3,
  ],
];

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function onRun(err) {
      if (err) reject(err);
      else resolve(this);
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
  await run("DELETE FROM products WHERE name LIKE 'FR05M-%'");

  for (const product of products) {
    await run(
      "INSERT INTO products (name, price, description, imageUrl, category_id) VALUES (?, ?, ?, ?, ?)",
      product,
    );
  }

  const rows = await all(
    "SELECT id, name, price, category_id FROM products WHERE name LIKE 'FR05M-%' ORDER BY id",
  );

  console.log("Seeded FR-05-M products into backend/database.sqlite");
  console.table(rows);
}

main()
  .catch((err) => {
    console.error(err.message);
    process.exitCode = 1;
  })
  .finally(() => db.close());

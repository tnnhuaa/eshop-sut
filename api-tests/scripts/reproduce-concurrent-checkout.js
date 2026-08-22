const fs = require("fs");
const path = require("path");

const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const studentId = "23127280";
const runId = Date.now();
const commonHeaders = { "Content-Type": "application/json", "X-Student-Id": studentId };

async function request(endpoint, options = {}) {
  const response = await fetch(`${baseUrl}${endpoint}`, options);
  const text = await response.text();
  let body;
  try { body = JSON.parse(text); } catch { body = text; }
  return { status: response.status, body };
}

async function main() {
  const email = `${studentId}_concurrent_${runId}@execution.local`;
  const password = "Execution1!";
  await request("/api/register", {
    method: "POST",
    headers: commonHeaders,
    body: JSON.stringify({ name: "Concurrency Reproduction", email, password }),
  });
  const login = await request("/api/login", {
    method: "POST",
    headers: commonHeaders,
    body: JSON.stringify({ email, password }),
  });
  if (login.status !== 200 || !login.body.token) throw new Error(`Login setup failed: HTTP ${login.status}`);
  const authHeaders = { ...commonHeaders, Authorization: `Bearer ${login.body.token}` };
  const cart = await request("/api/cart", {
    method: "POST",
    headers: authHeaders,
    body: JSON.stringify({ id: 1, name: "Concurrent Product", price: 100000, quantity: 2 }),
  });
  if (cart.status !== 200) throw new Error(`Cart setup failed: HTTP ${cart.status}`);

  const checkoutBody = JSON.stringify({ shipping_address: "123 Concurrent St" });
  const [first, second] = await Promise.all([
    request("/api/checkout", { method: "POST", headers: authHeaders, body: checkoutBody }),
    request("/api/checkout", { method: "POST", headers: authHeaders, body: checkoutBody }),
  ]);
  const orders = await request("/api/orders/my-orders", { headers: authHeaders });
  const remainingCart = await request("/api/cart", { headers: authHeaders });
  const createdOrders = Array.isArray(orders.body) ? orders.body : [];
  const evidence = {
    testId: "CHK-H-005",
    timestamp: new Date().toISOString(),
    host: baseUrl,
    studentId,
    setup: { register: 200, login: login.status, cart: cart.status },
    concurrentCheckoutStatuses: [first.status, second.status],
    concurrentCheckoutBodies: [first.body, second.body],
    createdOrderCount: createdOrders.length,
    createdOrders,
    remainingCart: remainingCart.body,
    expected: "Exactly one 200 response, one 400/409 response, one order, and an empty cart.",
    passed: [first.status, second.status].filter((status) => status === 200).length === 1
      && [first.status, second.status].some((status) => status === 400 || status === 409)
      && createdOrders.length === 1
      && Array.isArray(remainingCart.body)
      && remainingCart.body.length === 0,
  };
  const output = path.resolve(__dirname, "..", "..", "evidence", "execution", "concurrent-checkout.json");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ output, ...evidence }, null, 2));
  if (!evidence.passed) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 2;
});

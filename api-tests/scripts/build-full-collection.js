const fs = require("fs");
const path = require("path");

const repo = path.resolve(__dirname, "..", "..");
const csvPath = path.join(repo, "test-cases", "API_Test_Cases.csv");
const collectionPath = path.join(repo, "postman", "HW06_API_Testing.postman_collection.json");
const dataDir = path.join(repo, "postman", "data");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  const headers = rows.shift();
  return rows
    .filter((values) => values.some((value) => value !== ""))
    .map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

function script(lines) {
  return { type: "text/javascript", exec: lines };
}

function jsonRequest(url, body, headers = []) {
  return {
    method: "POST",
    header: [{ key: "Content-Type", value: "application/json", type: "text" }, ...headers],
    body: { mode: "raw", raw: body, options: { raw: { language: "json" } } },
    url: { raw: `{{baseUrl}}${url}`, host: ["{{baseUrl}}"], path: url.replace(/^\//, "").split("/") },
  };
}

function uniqueEmail(raw, id) {
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return raw.replace(/reg_034/g, "reg_034_{{runId}}");
  }
  if (!data || Array.isArray(data) || typeof data !== "object" || typeof data.email !== "string") return raw;
  const email = data.email;
  if (id === "REG-AI-021") {
    data.email = "23127280_REG021_{{runId}}@DOMAIN.COM";
  } else if (email.startsWith("@")) {
    data.email = email;
  } else if (email.endsWith("@")) {
    data.email = `user_{{runId}}@`;
  } else if (!email.includes("@")) {
    data.email = `${email}_{{runId}}`;
  } else {
    const at = email.lastIndexOf("@");
    data.email = `${email.slice(0, at)}_{{runId}}${email.slice(at)}`;
  }
  return JSON.stringify(data);
}

function uniqueCoupon(raw) {
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return raw;
  }
  if (!data || Array.isArray(data) || typeof data !== "object" || typeof data.code !== "string" || data.code === "") return raw;
  data.code = `${data.code}_{{runId}}`;
  return JSON.stringify(data);
}

function expectedCodes(text) {
  return [...new Set((text.match(/\d{3}/g) || []).map(Number))];
}

const collectionPrerequest = [
  "if (!pm.environment.get('studentId')) pm.environment.set('studentId', '23127280');",
  "if (!pm.environment.get('runId')) pm.environment.set('runId', `${pm.environment.get('studentId')}_${Date.now()}`);",
  "pm.variables.unset('caseSetupError');",
  "pm.variables.unset('caseToken');",
  "pm.variables.unset('caseUserId');",
  "pm.request.headers.upsert({ key: 'X-Student-Id', value: pm.environment.get('studentId') });",
];

const setupItems = [
  {
    name: "LoginUser",
    event: [{ listen: "test", script: script([
      "pm.test('SETUP Login User returns 200', () => pm.response.to.have.status(200));",
      "const json = pm.response.json();",
      "pm.test('SETUP User token and role are valid', () => { pm.expect(json.token).to.be.a('string').and.not.empty; pm.expect(json.user.role).to.eql('user'); });",
      "pm.environment.set('userToken', json.token);",
    ]) }],
    request: jsonRequest("/api/login", JSON.stringify({ email: "test@eshop.com", password: "Test1234!" })),
    response: [],
  },
  {
    name: "LoginAdmin",
    event: [{ listen: "test", script: script([
      "pm.test('SETUP Login Admin returns 200', () => pm.response.to.have.status(200));",
      "const json = pm.response.json();",
      "pm.test('SETUP Admin token and role are valid', () => { pm.expect(json.token).to.be.a('string').and.not.empty; pm.expect(json.user.role).to.eql('admin'); });",
      "pm.environment.set('adminToken', json.token);",
      "pm.environment.set('adminUserId', String(json.user.id));",
    ]) }],
    request: jsonRequest("/api/login", JSON.stringify({ email: "admin@eshop.com", password: "Admin123!" })),
    response: [],
  },
  {
    name: "GetProducts",
    event: [{ listen: "test", script: script([
      "pm.test('SETUP Products endpoint returns 200', () => pm.response.to.have.status(200));",
      "pm.test('SETUP Products response is an array', () => pm.expect(pm.response.json()).to.be.an('array'));",
    ]) }],
    request: {
      method: "GET",
      header: [],
      url: { raw: "{{baseUrl}}/api/products", host: ["{{baseUrl}}"], path: ["api", "products"] },
    },
    response: [],
  },
];

function registerPrerequest(row, body) {
  if (!['REG-AI-020', 'REG-AI-021'].includes(row.Test_ID)) return [];
  let setupBody = body;
  if (row.Test_ID === "REG-AI-021") {
    const parsed = JSON.parse(body);
    parsed.email = parsed.email.toLowerCase();
    setupBody = JSON.stringify(parsed);
  }
  return [
    `const duplicateSetupBody = pm.variables.replaceIn(${JSON.stringify(setupBody)});`,
    "pm.sendRequest({ url: pm.environment.get('baseUrl') + '/api/register', method: 'POST', header: { 'Content-Type': 'application/json', 'X-Student-Id': pm.environment.get('studentId') }, body: { mode: 'raw', raw: duplicateSetupBody } }, (error, response) => {",
    "  pm.variables.set('setupStatus', error ? 'ERROR' : String(response.code));",
    "});",
  ];
}

function checkoutPrerequest(row) {
  const id = row.Test_ID;
  const noSetup = ['CHK-AI-005', 'CHK-AI-006', 'CHK-AI-007', 'CHK-AI-008', 'CHK-AI-009'].includes(id);
  if (noSetup) return [];
  if (id === 'CHK-AI-010') {
    return [
      "const adminToken = pm.environment.get('adminToken');",
      "pm.variables.set('caseToken', adminToken);",
      "pm.variables.set('caseUserId', pm.environment.get('adminUserId'));",
      "pm.sendRequest({ url: pm.environment.get('baseUrl') + '/api/cart', method: 'POST', header: { 'Content-Type': 'application/json', 'X-Student-Id': pm.environment.get('studentId'), Authorization: 'Bearer ' + adminToken }, body: { mode: 'raw', raw: JSON.stringify({ id: 1, name: 'Admin Execution Product', price: 100000, quantity: 1 }) } }, (error, response) => { if (error || response.code !== 200) pm.variables.set('caseSetupError', 'admin-cart'); });",
    ];
  }
  const emptyCart = id === 'CHK-AI-027' || id === 'CHK-H-003';
  const staleCart = id === 'CHK-H-004';
  const duplicateLines = id === 'CHK-AI-031';
  const quantity = id === 'CHK-AI-030' ? 3 : 2;
  const price = 100000;
  const cartItem = staleCart
    ? { id: 999999, name: 'Deleted Product', price, quantity: 1 }
    : { id: 1, name: 'Execution Product', price, quantity };
  const email = `23127280_${id.toLowerCase().replace(/-/g, '_')}_{{runId}}@execution.local`;
  const password = 'Execution1!';
  const lines = [
    `const caseEmail = pm.variables.replaceIn(${JSON.stringify(email)});`,
    `const casePassword = ${JSON.stringify(password)};`,
    "const baseUrl = pm.environment.get('baseUrl');",
    "const commonHeaders = { 'Content-Type': 'application/json', 'X-Student-Id': pm.environment.get('studentId') };",
    "pm.sendRequest({ url: baseUrl + '/api/register', method: 'POST', header: commonHeaders, body: { mode: 'raw', raw: JSON.stringify({ name: 'Execution User', email: caseEmail, password: casePassword }) } }, () => {",
    "  pm.sendRequest({ url: baseUrl + '/api/login', method: 'POST', header: commonHeaders, body: { mode: 'raw', raw: JSON.stringify({ email: caseEmail, password: casePassword }) } }, (loginError, loginResponse) => {",
    "    if (loginError || loginResponse.code !== 200) { pm.variables.set('caseSetupError', 'login'); return; }",
    "    const loginJson = loginResponse.json();",
    "    pm.variables.set('caseToken', loginJson.token);",
    "    pm.variables.set('caseUserId', String(loginJson.user.id));",
    "    pm.request.headers.upsert({ key: 'Authorization', value: 'Bearer ' + loginJson.token });",
  ];
  if (!emptyCart) {
    lines.push(
      `    const cartBody = ${JSON.stringify(JSON.stringify(cartItem))};`,
      "    pm.sendRequest({ url: baseUrl + '/api/cart', method: 'POST', header: { ...commonHeaders, Authorization: 'Bearer ' + loginJson.token }, body: { mode: 'raw', raw: cartBody } }, () => {",
    );
    if (duplicateLines) {
      lines.push(
        "      pm.sendRequest({ url: baseUrl + '/api/cart', method: 'POST', header: { ...commonHeaders, Authorization: 'Bearer ' + loginJson.token }, body: { mode: 'raw', raw: cartBody } }, () => {});",
      );
    }
    if (id === 'CHK-AI-002') {
      lines.push(
        "      pm.sendRequest({ url: baseUrl + '/api/cart', method: 'POST', header: { ...commonHeaders, Authorization: 'Bearer ' + loginJson.token }, body: { mode: 'raw', raw: JSON.stringify({ id: 2, name: 'Second Product', price: 150000, quantity: 1 }) } }, () => {});",
      );
    }
    if (id === 'CHK-AI-029') {
      lines.push(
        "      pm.sendRequest({ url: baseUrl + '/api/checkout', method: 'POST', header: { ...commonHeaders, Authorization: 'Bearer ' + loginJson.token }, body: { mode: 'raw', raw: JSON.stringify({ total_amount: 200000, shipping_address: 'First Checkout' }) } }, (error, response) => { if (error || response.code !== 200) pm.variables.set('caseSetupError', 'first-checkout'); });",
      );
    }
    lines.push("    });");
  }
  lines.push("  });", "});");
  return lines;
}

function couponPrerequest(row, body) {
  if (!['CPN-AI-017', 'CPN-AI-018'].includes(row.Test_ID)) return [];
  const parsed = JSON.parse(body);
  if (row.Test_ID === 'CPN-AI-018') parsed.code = parsed.code.toLowerCase();
  return [
    "const adminToken = pm.environment.get('adminToken');",
    `const duplicateSetupBody = pm.variables.replaceIn(${JSON.stringify(JSON.stringify(parsed))});`,
    "pm.sendRequest({ url: pm.environment.get('baseUrl') + '/api/admin/coupons', method: 'POST', header: { 'Content-Type': 'application/json', 'X-Student-Id': pm.environment.get('studentId'), Authorization: 'Bearer ' + adminToken }, body: { mode: 'raw', raw: duplicateSetupBody } }, (error, response) => {",
    "  pm.variables.set('setupStatus', error ? 'ERROR' : String(response.code));",
    "});",
  ];
}

function authHeaders(row) {
  const id = row.Test_ID;
  if (id === 'CHK-AI-005' || id === 'CPN-AI-007') return [];
  if (id === 'CHK-AI-006' || id === 'CPN-AI-008') return [{ key: 'Authorization', value: 'Token invalid-format', type: 'text' }];
  if (id === 'CHK-AI-007' || id === 'CPN-AI-009') return [{ key: 'Authorization', value: 'Bearer not-a-jwt', type: 'text' }];
  if (id === 'CHK-AI-008') return [{ key: 'Authorization', value: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6Miwicm9sZSI6InVzZXIifQ.invalid', type: 'text' }];
  if (id === 'CHK-AI-009' || id === 'CPN-AI-010') return [{ key: 'Authorization', value: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6Miwicm9sZSI6InVzZXIiLCJleHAiOjF9.invalid', type: 'text' }];
  if (id === 'CHK-AI-010') return [{ key: 'Authorization', value: 'Bearer {{adminToken}}', type: 'text' }];
  if (id === 'CPN-AI-011' || id === 'CPN-AI-012') return [{ key: 'Authorization', value: 'Bearer {{userToken}}', type: 'text' }];
  if (row.API === 'Checkout') return [{ key: 'Authorization', value: 'Bearer {{caseToken}}', type: 'text' }];
  if (row.API === 'CreateCoupon') return [{ key: 'Authorization', value: 'Bearer {{adminToken}}', type: 'text' }];
  return [];
}

function testLines(row) {
  const id = row.Test_ID;
  const allowed = expectedCodes(row.Expected_Status);
  const lines = [
    `const testId = ${JSON.stringify(id)};`,
    `const allowedCodes = ${JSON.stringify(allowed)};`,
    `pm.test(testId + ' | expected HTTP status', () => pm.expect(allowedCodes).to.include(pm.response.code));`,
    "pm.test(testId + ' | X-Student-Id sent', () => pm.expect(pm.request.headers.get('X-Student-Id')).to.eql(pm.environment.get('studentId')));",
    "pm.test(testId + ' | response time under 2000 ms', () => pm.expect(pm.response.responseTime).to.be.below(2000));",
  ];
  if (row.API === 'Checkout' && !['CHK-AI-005', 'CHK-AI-006', 'CHK-AI-007', 'CHK-AI-008', 'CHK-AI-009', 'CHK-AI-010'].includes(id)) {
    lines.push("pm.test(testId + ' | isolated checkout setup succeeded', () => pm.expect(pm.variables.get('caseSetupError')).to.eql(undefined));");
  }
  if (allowed.every((code) => code < 500)) {
    lines.push("pm.test(testId + ' | no unexpected 5xx', () => pm.expect(pm.response.code).to.be.below(500));");
  }
  lines.push(
    "let json = null;",
    "try { json = pm.response.json(); } catch (_) {}",
  );
  if (row.API === 'Register' && allowed.includes(200)) {
    lines.push(
      "if (pm.response.code === 200) pm.test(testId + ' | register success schema', () => { pm.expect(json).to.be.an('object'); pm.expect(json.message).to.eql('User registered successfully'); pm.expect(json.id).to.be.a('number').and.above(0); pm.expect(json).not.to.have.property('password'); });",
    );
  }
  if (row.API === 'Checkout' && allowed.includes(200)) {
    lines.push(
      "if (pm.response.code === 200) pm.test(testId + ' | checkout success schema', () => { pm.expect(json.message).to.eql('Checkout successful'); pm.expect(json.orderId).to.be.a('number').and.above(0); });",
    );
  }
  if (row.API === 'CreateCoupon' && allowed.includes(200)) {
    lines.push(
      "if (pm.response.code === 200) pm.test(testId + ' | coupon success schema', () => { pm.expect(json.message).to.eql('Coupon created'); pm.expect(json.id).to.be.a('number').and.above(0); });",
    );
  }
  if (id === 'REG-AI-033') {
    lines.push(
      "if (pm.response.code === 200) { const body = JSON.parse(pm.variables.replaceIn(pm.request.body.raw)); pm.sendRequest({ url: pm.environment.get('baseUrl') + '/api/login', method: 'POST', header: { 'Content-Type': 'application/json', 'X-Student-Id': pm.environment.get('studentId') }, body: { mode: 'raw', raw: JSON.stringify({ email: body.email, password: body.password }) } }, (error, response) => { pm.test(testId + ' | role injection is ignored', () => { pm.expect(error).to.eql(null); pm.expect(response.json().user.role).to.eql('user'); }); }); }",
    );
  }
  if (id === 'REG-AI-035') {
    lines.push(
      "if (pm.response.code === 200) { const body = JSON.parse(pm.variables.replaceIn(pm.request.body.raw)); pm.sendRequest({ url: pm.environment.get('baseUrl') + '/api/login', method: 'POST', header: { 'Content-Type': 'application/json', 'X-Student-Id': pm.environment.get('studentId') }, body: { mode: 'raw', raw: JSON.stringify({ email: body.email, password: body.password }) } }, (error, response) => { pm.test(testId + ' | password is not returned or stored as plaintext', () => { pm.expect(error).to.eql(null); pm.expect(response.json().user.password).not.to.eql(body.password); }); }); }",
    );
  }
  if (id === 'REG-H-005') {
    lines.push("if (pm.response.code === 200) pm.test(testId + ' | supplied id is ignored', () => pm.expect(json.id).not.to.eql(1));");
  }
  if (row.API === 'Checkout' && allowed.includes(200)) {
    const expectedTotal = id === 'CHK-AI-002' ? 350000 : id === 'CHK-AI-010' ? 100000 : id === 'CHK-AI-030' ? 300000 : id === 'CHK-AI-031' ? 400000 : 200000;
    lines.push(
      "if (pm.response.code === 200 && pm.variables.get('caseToken')) { pm.sendRequest({ url: pm.environment.get('baseUrl') + '/api/cart', method: 'GET', header: { Authorization: 'Bearer ' + pm.variables.get('caseToken'), 'X-Student-Id': pm.environment.get('studentId') } }, (error, response) => { pm.test(testId + ' | successful checkout clears cart', () => { pm.expect(error).to.eql(null); pm.expect(response.json()).to.be.an('array').that.is.empty; }); }); }",
      `if (pm.response.code === 200 && pm.variables.get('caseToken')) { const orderId = json.orderId; pm.sendRequest({ url: pm.environment.get('baseUrl') + '/api/orders/my-orders', method: 'GET', header: { Authorization: 'Bearer ' + pm.variables.get('caseToken'), 'X-Student-Id': pm.environment.get('studentId') } }, (error, response) => { const orders = response.json(); const order = orders.find((item) => item.id === orderId); pm.test(testId + ' | order is persisted for authenticated user', () => { pm.expect(error).to.eql(null); pm.expect(order).to.be.an('object'); pm.expect(String(order.user_id)).to.eql(pm.variables.get('caseUserId')); }); pm.test(testId + ' | server recalculates total from isolated cart', () => pm.expect(order.total_amount).to.eql(${expectedTotal})); pm.test(testId + ' | new order starts pending', () => pm.expect(order.status).to.eql('pending')); }); }`,
    );
  }
  if (id === 'CPN-AI-006') {
    lines.push(
      "if (pm.response.code === 200) { const requestBody = JSON.parse(pm.variables.replaceIn(pm.request.body.raw)); pm.sendRequest({ url: pm.environment.get('baseUrl') + '/api/coupons', method: 'GET', header: { Authorization: 'Bearer ' + pm.environment.get('adminToken'), 'X-Student-Id': pm.environment.get('studentId') } }, (error, response) => { pm.test(testId + ' | coupon persists with supplied fields', () => { pm.expect(error).to.eql(null); const found = response.json().find((coupon) => coupon.code === requestBody.code); pm.expect(found).to.be.an('object'); pm.expect(found.type).to.eql(requestBody.type); pm.expect(found.discount_value).to.eql(requestBody.discount_value); }); }); }",
    );
  }
  return lines;
}

function buildItem(row) {
  let body = row.Request_Data;
  if (row.API === 'Register') body = uniqueEmail(body, row.Test_ID);
  if (row.API === 'CreateCoupon') body = uniqueCoupon(body);
  let prerequest = [];
  if (row.API === 'Register') prerequest = registerPrerequest(row, body);
  if (row.API === 'Checkout') prerequest = checkoutPrerequest(row);
  if (row.API === 'CreateCoupon') prerequest = couponPrerequest(row, body);
  const events = [];
  if (prerequest.length) events.push({ listen: "prerequest", script: script(prerequest) });
  events.push({ listen: "test", script: script(testLines(row)) });
  return {
    name: `${row.Test_ID} | ${row.Test_Objective}`,
    description: `${row.Technique}\n\nRequirement: ${row.Requirement_ID}\n\nPreconditions: ${row.Preconditions}\n\nAudit: ${row.Audit_Label} — ${row.Audit_Reason}`,
    event: events,
    request: jsonRequest(row.Endpoint, body, authHeaders(row)),
    response: [],
  };
}

const rows = parseCsv(fs.readFileSync(csvPath, "utf8"));
if (rows.length !== 122) throw new Error(`Expected 122 CSV cases, found ${rows.length}`);
const groups = {
  Register: rows.filter((row) => row.API === "Register"),
  Checkout: rows.filter((row) => row.API === "Checkout"),
  CreateCoupon: rows.filter((row) => row.API === "CreateCoupon"),
};
if (groups.Register.length !== 41 || groups.Checkout.length !== 41 || groups.CreateCoupon.length !== 40) {
  throw new Error("Unexpected per-API case counts");
}

const collection = {
  info: {
    _postman_id: "22e31c50-f9b5-4ab4-8fb6-231272800006",
    name: "HW06 API Testing",
    description: "Full HW06 Postman collection generated from the reviewed CSV. Contains setup plus 122 traceable API test cases.",
    schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
  },
  event: [{ listen: "prerequest", script: script(collectionPrerequest) }],
  variable: [
    { key: "executionMode", value: "local" },
    { key: "caseToken", value: "" },
  ],
  item: [
    { name: "00 Setup", item: setupItems },
    { name: "01 Register", item: groups.Register.map(buildItem) },
    { name: "02 Checkout", item: groups.Checkout.map(buildItem) },
    { name: "03 Create Coupon", item: groups.CreateCoupon.map(buildItem) },
  ],
};

fs.mkdirSync(dataDir, { recursive: true });
for (const [api, cases] of Object.entries(groups)) {
  const fileName = api === "CreateCoupon" ? "create-coupon-cases.json" : `${api.toLowerCase()}-cases.json`;
  fs.writeFileSync(path.join(dataDir, fileName), `${JSON.stringify(cases, null, 2)}\n`);
}
fs.writeFileSync(collectionPath, `${JSON.stringify(collection, null, 2)}\n`);
console.log(JSON.stringify({ collectionPath, dataDir, counts: Object.fromEntries(Object.entries(groups).map(([key, value]) => [key, value.length])) }, null, 2));

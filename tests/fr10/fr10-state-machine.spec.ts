import { expect, test, type APIRequestContext, type Locator, type Page } from "@playwright/test";
import { authenticateViaApi } from "../support/auth.js";
import { loadScenarios, type Scenario } from "../support/data-loader.js";
import { environment } from "../support/environment.js";

type Order = { id: number; status: string; shipping_address: string };

const scenarios = loadScenarios("test-data/fr10/state-machine-scenarios.json");

function byId(id: string): Scenario {
  const scenario = scenarios.find((candidate) => candidate.id === id);
  if (!scenario) throw new Error(`Missing scenario ${id}`);
  return scenario;
}

async function adminHeaders(request: APIRequestContext): Promise<Record<string, string>> {
  const response = await request.post(`${environment.apiBaseUrl}/login`, { data: environment.admin });
  expect(response.ok(), "Admin API login must succeed").toBeTruthy();
  const { token } = (await response.json()) as { token: string };
  return { Authorization: `Bearer ${token}` };
}

async function seededOrder(request: APIRequestContext, shippingAddress: string): Promise<Order> {
  const response = await request.get(`${environment.apiBaseUrl}/admin/orders`, {
    headers: await adminHeaders(request),
  });
  expect(response.ok(), "FR10 seed orders must be available").toBeTruthy();
  const orders = (await response.json()) as Order[];
  const order = orders.find((candidate) => candidate.shipping_address === shippingAddress);
  expect(order, `Missing seed order ${shippingAddress}; run test-data/seed-fr10-orders.js`).toBeTruthy();
  return order as Order;
}

async function readStatus(request: APIRequestContext, orderId: number): Promise<string> {
  const response = await request.get(`${environment.apiBaseUrl}/orders/${orderId}`);
  expect(response.ok()).toBeTruthy();
  return ((await response.json()) as Order).status;
}

async function openAdminOrders(page: Page, request: APIRequestContext): Promise<void> {
  await authenticateViaApi(page, request, "admin");
  await page.goto(environment.adminBaseUrl);
  await page.getByText("Đơn hàng", { exact: true }).click();
  await expect(page.getByRole("heading", { name: "Quản lý Đơn hàng" })).toBeVisible();
}

function adminRow(page: Page, shippingAddress: string): Locator {
  return page.locator("tr", { has: page.getByText(shippingAddress, { exact: true }) });
}

async function openUserProfile(page: Page, request: APIRequestContext): Promise<void> {
  await authenticateViaApi(page, request, "user");
  await page.goto(`${environment.webBaseUrl}/profile`);
  await expect(page.getByRole("heading", { name: "Lịch sử đơn hàng" })).toBeVisible();
}

function userRow(page: Page, orderId: number): Locator {
  return page.locator("tr", { has: page.getByText(`#${orderId}`, { exact: true }) });
}

for (const id of ["FR10-DT-001", "FR10-DT-002", "FR10-DT-003"] as const) {
  const scenario = byId(id);
  test(`${scenario.id} — ${scenario.title}`, async ({ page, request }) => {
    const order = await seededOrder(request, scenario.setup.shippingAddress as string);
    await openAdminOrders(page, request);
    const row = adminRow(page, scenario.setup.shippingAddress as string);
    await expect(row).toContainText(scenario.expected.initialLabel as string);
    const action = { "FR10-DT-001": "Xác nhận", "FR10-DT-002": "Giao hàng", "FR10-DT-003": "Hoàn thành" }[id];
    await row.getByRole("button", { name: action }).click();
    await expect(row).toContainText(scenario.expected.label as string);
    await expect.poll(() => readStatus(request, order.id)).toBe(scenario.expected.status);
    if (id === "FR10-DT-003") await expect(row.getByRole("button")).toHaveCount(0);
  });
}

for (const id of ["FR10-DT-004", "FR10-DT-005"] as const) {
  const scenario = byId(id);
  test(`${scenario.id} — ${scenario.title}`, async ({ page, request }) => {
    const order = await seededOrder(request, scenario.setup.shippingAddress as string);
    await openUserProfile(page, request);
    const row = userRow(page, order.id);
    page.once("dialog", (dialog) => dialog.accept());
    await row.getByRole("button", { name: "Hủy đơn" }).click();
    await expect(row).toContainText(scenario.expected.label as string);
    await expect(row.getByRole("button", { name: "Hủy đơn" })).toHaveCount(0);
    await expect.poll(() => readStatus(request, order.id)).toBe(scenario.expected.status);
  });
}

for (const id of ["FR10-DT-006", "FR10-DT-021"] as const) {
  const scenario = byId(id);
  test(`${scenario.id} — ${scenario.title}`, async ({ page, request }) => {
    const order = await seededOrder(request, scenario.setup.shippingAddress as string);
    const token = await authenticateViaApi(page, request, "user");
    const response = await request.put(`${environment.apiBaseUrl}/orders/${order.id}/cancel`, {
      headers: { Authorization: `Bearer ${token}` },
      data: {},
    });
    expect(response.status()).toBe(scenario.expected.httpStatus);
    await expect.poll(() => readStatus(request, order.id)).toBe(scenario.expected.status);
  });
}

for (const id of ["FR10-DT-011", "FR10-DT-012", "FR10-DT-022"] as const) {
  const scenario = byId(id);
  test(`${scenario.id} — ${scenario.title}`, async ({ page, request }) => {
    await openAdminOrders(page, request);
    const row = adminRow(page, scenario.setup.shippingAddress as string);
    await expect(row).toContainText(scenario.expected.status === "delivered" ? "Đã giao" : "Đã hủy");
    await expect(row.getByRole("button")).toHaveCount(scenario.expected.actionCount as number);
  });
}

test(`${byId("FR10-DT-016").id} — ${byId("FR10-DT-016").title}`, async ({ request }) => {
  const scenario = byId("FR10-DT-016");
  const order = await seededOrder(request, scenario.setup.shippingAddress as string);
  const response = await request.put(`${environment.apiBaseUrl}/orders/${order.id}/cancel`, { data: {} });
  expect(response.status()).toBe(scenario.expected.httpStatus);
  await expect.poll(() => readStatus(request, order.id)).toBe(scenario.expected.status);
});

test(`${byId("FR10-DT-017").id} — ${byId("FR10-DT-017").title}`, async ({ page, request }) => {
  const scenario = byId("FR10-DT-017");
  const order = await seededOrder(request, scenario.setup.shippingAddress as string);
  const token = await authenticateViaApi(page, request, "user");
  const response = await request.put(`${environment.apiBaseUrl}/admin/orders/${order.id}/status`, {
    headers: { Authorization: `Bearer ${token}` },
    data: { status: scenario.input.targetStatus },
  });
  expect(response.status()).toBe(scenario.expected.httpStatus);
  await expect.poll(() => readStatus(request, order.id)).toBe(scenario.expected.status);
});

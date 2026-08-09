import { expect, test, type APIRequestContext, type Locator, type Page } from "@playwright/test";
import { authenticateViaApi } from "../support/auth.js";
import { loadScenarios, type Scenario } from "../support/data-loader.js";
import { environment } from "../support/environment.js";

type Order = { id: number; status: string; shipping_address: string };
type OrderSetup = {
  shippingAddress: string;
  role: "admin" | "user" | "unauthenticated";
  workflow:
    | "admin-transition"
    | "user-cancel-ui"
    | "user-cancel-api"
    | "admin-inspect"
    | "unauthenticated-cancel-api"
    | "user-admin-status-api";
};
type OrderInput = { action?: string; actionLabel?: string; targetStatus?: string };
type OrderExpected = {
  status: string;
  httpStatus?: number;
  initialLabel?: string;
  label?: string;
  actionCount?: number;
};

const scenarios = loadScenarios("test-data/fr10/state-machine-scenarios.json");

function annotateScenario(scenario: Scenario): void {
  test.info().annotations.push(
    { type: "feature", description: "FR10" },
    { type: "testCaseId", description: scenario.id },
  );
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

async function expectOrderStatus(
  request: APIRequestContext,
  orderId: number,
  expectedStatus: unknown,
): Promise<void> {
  await expect.poll(() => readStatus(request, orderId)).toBe(expectedStatus);
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

for (const scenario of scenarios) {
  test(`${scenario.id} — ${scenario.title}`, async ({ page, request }) => {
    annotateScenario(scenario);
    const setup = scenario.setup as OrderSetup;
    const input = scenario.input as OrderInput;
    const expected = scenario.expected as unknown as OrderExpected;
    const order = await seededOrder(request, setup.shippingAddress);

    switch (setup.workflow) {
      case "admin-transition": {
        await openAdminOrders(page, request);
        const row = adminRow(page, setup.shippingAddress);
        await expect(row).toContainText(String(expected.initialLabel));
        await row.getByRole("button", { name: String(input.actionLabel) }).click();
        await expect(row).toContainText(String(expected.label));
        await expectOrderStatus(request, order.id, expected.status);
        if (expected.actionCount !== undefined) {
          await expect(row.getByRole("button")).toHaveCount(expected.actionCount);
        }
        break;
      }
      case "user-cancel-ui": {
        await openUserProfile(page, request);
        const row = userRow(page, order.id);
        page.once("dialog", (dialog) => dialog.accept());
        await row.getByRole("button", { name: String(input.actionLabel) }).click();
        await expect(row).toContainText(String(expected.label));
        await expect(row.getByRole("button", { name: String(input.actionLabel) })).toHaveCount(0);
        await expectOrderStatus(request, order.id, expected.status);
        break;
      }
      case "user-cancel-api": {
        const token = await authenticateViaApi(page, request, "user");
        const response = await request.put(`${environment.apiBaseUrl}/orders/${order.id}/cancel`, {
          headers: { Authorization: `Bearer ${token}` },
          data: {},
        });
        expect(response.status(), "Shipping cancellation must be rejected").toBe(expected.httpStatus);
        await expectOrderStatus(request, order.id, expected.status);
        break;
      }
      case "admin-inspect": {
        await openAdminOrders(page, request);
        const row = adminRow(page, setup.shippingAddress);
        await expect(row).toContainText(String(expected.label));
        await expect(row.getByRole("button")).toHaveCount(Number(expected.actionCount));
        break;
      }
      case "unauthenticated-cancel-api": {
        const response = await request.put(`${environment.apiBaseUrl}/orders/${order.id}/cancel`, {
          data: {},
        });
        expect(response.status(), "Unauthenticated cancellation must be rejected").toBe(
          expected.httpStatus,
        );
        await expectOrderStatus(request, order.id, expected.status);
        break;
      }
      case "user-admin-status-api": {
        const token = await authenticateViaApi(page, request, "user");
        const response = await request.put(`${environment.apiBaseUrl}/admin/orders/${order.id}/status`, {
          headers: { Authorization: `Bearer ${token}` },
          data: { status: input.targetStatus },
        });
        expect(response.status(), "A normal user must not access the admin status endpoint").toBe(
          expected.httpStatus,
        );
        await expectOrderStatus(request, order.id, expected.status);
        break;
      }
      default:
        throw new Error(`Unsupported FR10 workflow for ${scenario.id}: ${String(setup.workflow)}`);
    }
  });
}

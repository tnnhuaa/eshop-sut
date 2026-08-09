import { expect, test, type Page } from "@playwright/test";
import { loadScenarios } from "../support/data-loader.js";

type ProductSetup = {
  productId: string | number;
  existingQuantity?: string;
  preconditionSubmitClicks?: number;
  mockProduct?: Record<string, unknown>;
};

type ProductInput = { quantity?: string; submitClicks?: number };
type ProductExpected = Record<string, string | number>;

class ProductDetailPage {
  constructor(private readonly page: Page) {}

  heading(name: string) {
    return this.page.getByRole("heading", { level: 1, name });
  }

  quantityInput() {
    return this.page.getByText("Số lượng:").locator("..").getByRole("spinbutton");
  }

  addButton() {
    return this.page.getByRole("button", { name: /Thêm vào giỏ hàng|Đã thêm/ });
  }

  async open(productId: string | number) {
    await this.page.goto(`/product/${productId}`);
  }

  async setQuantityAndSubmit(input: ProductInput) {
    if (input.quantity !== undefined) {
      await this.quantityInput().fill(input.quantity);
      await expect(this.quantityInput()).toHaveValue(input.quantity);
    }
    for (let click = 0; click < (input.submitClicks ?? 1); click += 1) {
      await this.addButton().click();
    }
  }

  async openCart() {
    await this.page.getByRole("link", { name: "Giỏ hàng" }).click();
    await expect(this.page).toHaveURL(/\/cart$/);
  }

  cartRow(productName: string) {
    return this.page.getByRole("row").filter({
      has: this.page.getByRole("cell", { name: productName, exact: true }),
    });
  }

  async expectCartLine(productName: string, quantity: string, rowCount: number) {
    const row = this.cartRow(productName);
    await expect(row).toHaveCount(rowCount);
    if (rowCount > 0) await expect(row).toContainText(quantity);
  }
}

const scenarios = loadScenarios("test-data/fr06/product-detail-scenarios.json");

test.describe("FR06 Product Detail", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => localStorage.clear());
  });

  for (const scenario of scenarios) {
    test(`${scenario.id} — ${scenario.title}`, async ({ page }) => {
      test.info().annotations.push(
        { type: "feature", description: "FR06" },
        { type: "testCaseId", description: scenario.id },
      );
      const setup = scenario.setup as ProductSetup;
      const input = scenario.input as ProductInput;
      const expected = scenario.expected as ProductExpected;
      const detail = new ProductDetailPage(page);

      if (setup.mockProduct) {
        await page.route("**/api/products/xss-fixture", async (route) => {
          await route.fulfill({ json: setup.mockProduct });
        });
      }

      let dialogCount = 0;
      page.on("dialog", async (dialog) => {
        dialogCount += 1;
        await dialog.dismiss();
      });

      await detail.open(setup.productId);

      switch (scenario.id) {
        case "FR06-DT-001":
          await expect(detail.heading(String(expected.name))).toBeVisible();
          await expect(page.getByText(String(expected.price), { exact: true })).toBeVisible();
          await expect(page.getByText(String(expected.description), { exact: true })).toBeVisible();
          await expect(page.getByText(String(expected.category), { exact: true })).toBeVisible();
          await expect(page.getByRole("img", { name: String(expected.name) })).toBeVisible();
          break;
        case "FR06-DT-002":
          await expect(detail.heading(String(expected.name))).toBeVisible();
          await expect(page.getByText(String(expected.price), { exact: true })).toBeVisible();
          await expect(page.getByRole("img", { name: String(expected.name) })).toBeVisible();
          break;
        case "FR06-DT-003":
          await expect(page.getByText(String(expected.notFoundText))).toBeVisible();
          await expect(page.getByRole("heading", { level: 1 })).toHaveCount(0);
          await expect(detail.addButton()).toHaveCount(0);
          break;
        case "FR06-DT-008":
          await expect(detail.heading("iPhone 15 Pro Max")).toBeVisible();
          await detail.setQuantityAndSubmit({
            quantity: setup.existingQuantity,
            submitClicks: setup.preconditionSubmitClicks,
          });
          await detail.setQuantityAndSubmit(input);
          await detail.openCart();
          await detail.expectCartLine(
            String(expected.name),
            String(expected.quantity),
            Number(expected.cartRows),
          );
          break;
        case "FR06-DT-013":
          await expect(detail.heading(String(expected.name))).toBeVisible();
          const inertDescription = page.locator("main p").filter({
            hasText: String(expected.description),
          });
          await expect(inertDescription).toHaveCount(1);
          await expect(inertDescription).toHaveText(String(expected.description));
          await expect(page.locator("main script")).toHaveCount(0);
          expect(dialogCount).toBe(Number(expected.dialogCount));
          break;
        case "FR06-DT-015":
          await expect(detail.heading("iPhone 15 Pro Max")).toBeVisible();
          await detail.setQuantityAndSubmit(input);
          await expect(detail.addButton()).toHaveText(String(expected.feedback));
          await expect(detail.quantityInput()).toHaveValue(String(input.quantity));
          break;
        default:
          await expect(detail.heading("iPhone 15 Pro Max")).toBeVisible();
          await detail.setQuantityAndSubmit(input);
          await detail.openCart();
          if ("cartEmptyText" in expected) {
            await expect(page.getByRole("heading", { name: String(expected.cartEmptyText) })).toBeVisible();
            await expect(page.getByRole("row")).toHaveCount(0);
          } else {
            await detail.expectCartLine(
              String(expected.name),
              String(expected.quantity),
              Number(expected.cartRows),
            );
          }
      }
    });
  }
});

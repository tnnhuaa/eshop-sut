import { expect, test, type Locator, type Page } from "@playwright/test";
import { loadScenarios } from "../support/data-loader.js";

type Product = { id: number; name: string; price: number | string };
type ProductInput = { name?: string; price?: string };
type ProductSetup = { targetName?: string; otherName?: string };
type ProductExpected = { productName?: string; price?: string; rowCount?: number; created?: boolean; updated?: boolean; otherUnchanged?: boolean; deleted?: boolean; loginHeading?: string; saved?: boolean; dialogCount?: number };

class AdminProductsPage {
  constructor(private readonly page: Page) {}

  async open() { await this.page.goto("http://127.0.0.1:5174"); }
  async login() {
    await this.open();
    await this.page.getByPlaceholder("Email").fill("admin@eshop.com");
    await this.page.getByPlaceholder("Password").fill("Admin123!");
    await this.page.getByRole("button", { name: "Login" }).click();
    await expect(this.page.getByText("EShop Admin", { exact: true })).toBeVisible();
    await this.openProductsTab();
  }
  async openProductsTab() {
    await this.page.getByText("Sản phẩm", { exact: true }).click();
    await expect(this.page.getByRole("heading", { name: "Quản lý Sản phẩm" })).toBeVisible();
  }
  async reloadProductsTab() {
    await this.page.reload();
    await this.openProductsTab();
  }
  nameInput() { return this.page.getByPlaceholder("Tên sản phẩm"); }
  priceInput() { return this.page.getByPlaceholder("Giá tiền"); }
  saveButton() { return this.page.getByRole("button", { name: "Lưu sản phẩm" }); }
  row(name: string): Locator {
    return this.page.getByRole("row").filter({
      has: this.page.getByRole("cell", { name, exact: true }),
    });
  }
  async fillProduct(input: ProductInput) {
    await this.nameInput().fill(input.name ?? "");
    await this.priceInput().fill(input.price ?? "");
  }
  async create(input: ProductInput) {
    await this.fillProduct(input);
    await this.saveButton().click();
  }
  async edit(name: string, input: ProductInput) {
    await this.row(name).getByRole("button", { name: "Sửa" }).click();
    await expect(this.page.getByRole("heading", { name: "Sửa sản phẩm" })).toBeVisible();
    await this.fillProduct(input);
  }
  async expectProductValues(name: string, price: string) {
    const productRow = this.row(name);
    await expect(productRow).toHaveCount(1);
    await expect(productRow).toContainText(price);
  }
}

const scenarios = loadScenarios("test-data/fr15/product-crud-scenarios.json");
const apiBase = "http://127.0.0.1:3000/api";

async function products(page: Page): Promise<Product[]> {
  const response = await page.request.get(`${apiBase}/products`);
  expect(response.ok()).toBeTruthy();
  return response.json() as Promise<Product[]>;
}

async function deleteNamedProducts(page: Page, names: string[]) {
  const allProducts = await products(page);
  for (const product of allProducts.filter((item) => names.includes(item.name))) {
    const response = await page.request.delete(`${apiBase}/products/${product.id}`);
    expect(response.ok()).toBeTruthy();
  }
}

async function createFixture(page: Page, name: string, price = "99999") {
  await deleteNamedProducts(page, [name]);
  const response = await page.request.post(`${apiBase}/products`, {
    data: { name, price, description: "FR15 fixture", imageUrl: "", category_id: 1 },
  });
  expect(response.ok()).toBeTruthy();
}

async function expectProductCountUnchanged(
  page: Page,
  action: () => Promise<void>,
): Promise<void> {
  const productCount = (await products(page)).length;
  await action();
  expect((await products(page)).length).toBe(productCount);
}

function managedScenarioNames(): string[] {
  return scenarios.flatMap((scenario) => {
    const input = scenario.input as ProductInput;
    const setup = scenario.setup as ProductSetup;
    return [input.name, setup.targetName, setup.otherName].filter(
      (name): name is string => Boolean(name),
    );
  });
}

test.describe("FR15 Product CRUD Admin", () => {
  test.afterEach(async ({ page }) => {
    await deleteNamedProducts(page, managedScenarioNames());
  });

  for (const scenario of scenarios) {
    test(`${scenario.id} — ${scenario.title}`, async ({ page }) => {
      test.info().annotations.push(
        { type: "feature", description: "FR15" },
        { type: "testCaseId", description: scenario.id },
      );
      const productsPage = new AdminProductsPage(page);
      const setup = scenario.setup as ProductSetup;
      const input = scenario.input as ProductInput;
      const expected = scenario.expected as ProductExpected;

      if (scenario.id === "FR15-DT-021") {
        await page.addInitScript(() => localStorage.clear());
        await productsPage.open();
        await expect(page.getByRole("heading", { name: String(expected.loginHeading) })).toBeVisible();
        await expect(page.getByPlaceholder("Email")).toBeVisible();
        await expect(page.getByRole("button", { name: "Lưu sản phẩm" })).toHaveCount(0);
        return;
      }

      let dialogs = 0;
      page.on("dialog", async (dialog) => { dialogs += 1; await dialog.dismiss(); });
      await productsPage.login();

      if (setup.targetName) await createFixture(page, setup.targetName);
      if (setup.otherName) await createFixture(page, setup.otherName);
      if (setup.targetName || setup.otherName) {
        await productsPage.reloadProductsTab();
      }

      switch (scenario.id) {
        case "FR15-DT-001":
          await expect(productsPage.row(String(expected.productName))).toContainText(String(expected.price));
          await expect(page.getByRole("row")).toHaveCount(Number(expected.rowCount) + 1);
          await expect(productsPage.row(String(expected.productName)).getByRole("button", { name: "Sửa" })).toBeVisible();
          break;
        case "FR15-DT-002":
        case "FR15-DT-005":
          await productsPage.create(input);
          await expect(productsPage.row(String(input.name))).toBeVisible();
          await expect(productsPage.row(String(input.name))).toContainText(String(input.price));
          await expect(productsPage.nameInput()).toHaveValue("");
          if (expected.dialogCount !== undefined) expect(dialogs).toBe(expected.dialogCount);
          break;
        case "FR15-DT-007":
          {
          await expectProductCountUnchanged(page, () => productsPage.create(input));
          await expect(productsPage.nameInput()).toHaveValue("");
          await expect(productsPage.saveButton()).toBeVisible();
          break;
          }
        case "FR15-DT-008":
        case "FR15-DT-025":
        case "FR15-BVA-006":
          {
          await expectProductCountUnchanged(page, () => productsPage.create(input));
          await expect(productsPage.nameInput()).toHaveValue(String(input.name));
          await expect(productsPage.saveButton()).toBeVisible();
          break;
          }
        case "FR15-DT-012":
          await productsPage.edit(String(setup.targetName), input);
          await productsPage.saveButton().click();
          await productsPage.expectProductValues(String(input.name), String(input.price));
          await expect(productsPage.nameInput()).toHaveValue("");
          break;
        case "FR15-DT-013":
          await productsPage.edit(String(setup.targetName), input);
          await productsPage.saveButton().click();
          await expect(productsPage.row(String(input.name)).first()).toBeVisible();
          await expect(productsPage.row(String(setup.otherName))).toBeVisible();
          await expect(productsPage.row(String(setup.otherName))).not.toContainText(String(input.name));
          break;
        case "FR15-DT-016":
          await createFixture(page, String(input.name), String(input.price));
          await productsPage.reloadProductsTab();
          await expect(productsPage.row(String(input.name))).toBeVisible();
          await productsPage.row(String(input.name)).getByRole("button", { name: "Xóa" }).click();
          await expect(productsPage.row(String(input.name))).toHaveCount(0);
          await expect(page.getByRole("heading", { name: "Quản lý Sản phẩm" })).toBeVisible();
          break;
        case "FR15-DT-024":
          await productsPage.edit(String(setup.targetName), input);
          await expect(productsPage.nameInput()).toHaveValue(String(input.name));
          await page.getByRole("button", { name: "Hủy sửa" }).click();
          await expect(productsPage.nameInput()).toHaveValue("");
          await expect(productsPage.row(String(input.name))).toHaveCount(0);
          await expect(productsPage.row(String(setup.targetName))).toBeVisible();
          break;
      }
    });
  }
});

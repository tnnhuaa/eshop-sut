import type { APIRequestContext, Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { environment } from "./environment.js";

type Role = "user" | "admin";

export async function authenticateViaApi(
  page: Page,
  request: APIRequestContext,
  role: Role,
): Promise<string> {
  const credentials = role === "admin" ? environment.admin : environment.user;
  const response = await request.post(`${environment.apiBaseUrl}/login`, {
    data: credentials,
  });
  expect(response.ok(), `API login failed for ${role}`).toBeTruthy();
  const body = (await response.json()) as { token: string };
  const storageKey = role === "admin" ? "adminToken" : "token";
  await page.addInitScript(
    ({ key, token }) => localStorage.setItem(key, token),
    { key: storageKey, token: body.token },
  );
  return body.token;
}

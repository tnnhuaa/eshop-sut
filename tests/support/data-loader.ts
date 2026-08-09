import fs from "node:fs";
import path from "node:path";

export type Scenario = {
  id: string;
  title: string;
  preconditions: string[];
  setup: Record<string, unknown>;
  input: Record<string, unknown>;
  expected: Record<string, unknown>;
  assertionTypes: string[];
};

export function loadJsonObject<T>(relativePath: string): T {
  const absolutePath = path.resolve(process.cwd(), relativePath);
  const parsed: unknown = JSON.parse(fs.readFileSync(absolutePath, "utf8"));
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error(`JSON file must contain an object: ${relativePath}`);
  }
  return parsed as T;
}

export function loadScenarios(relativePath: string): Scenario[] {
  const absolutePath = path.resolve(process.cwd(), relativePath);
  const parsed: unknown = JSON.parse(fs.readFileSync(absolutePath, "utf8"));
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error(`Scenario file must contain a non-empty array: ${relativePath}`);
  }

  for (const scenario of parsed) {
    if (
      typeof scenario !== "object" ||
      scenario === null ||
      !("id" in scenario) ||
      !("title" in scenario) ||
      !("input" in scenario) ||
      !("expected" in scenario)
    ) {
      throw new Error(`Invalid scenario schema in: ${relativePath}`);
    }
  }
  return parsed as Scenario[];
}

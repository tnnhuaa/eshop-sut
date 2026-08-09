import fs from 'node:fs';
import path from 'node:path';

const [fileArg, minimumArg = '12'] = process.argv.slice(2);
if (!fileArg) throw new Error('Usage: validate-scenarios.mjs <data-file> [minimum-count]');

const file = path.resolve(fileArg);
const minimum = Number.parseInt(minimumArg, 10);
const scenarios = JSON.parse(fs.readFileSync(file, 'utf8'));
if (!Array.isArray(scenarios)) throw new Error('Scenario file must contain a JSON array.');
if (!Number.isInteger(minimum) || minimum < 1) throw new Error('Minimum count must be a positive integer.');
if (scenarios.length < minimum) throw new Error(`Expected at least ${minimum} scenarios, found ${scenarios.length}.`);

const required = ['id', 'title', 'preconditions', 'setup', 'input', 'expected', 'assertionTypes'];
const ids = new Set();
const assertionTypes = new Set();
for (const [index, scenario] of scenarios.entries()) {
  if (!scenario || typeof scenario !== 'object' || Array.isArray(scenario)) throw new Error(`Scenario ${index + 1} must be an object.`);
  for (const field of required) if (!(field in scenario)) throw new Error(`Scenario ${index + 1} is missing ${field}.`);
  if (typeof scenario.id !== 'string' || !scenario.id.trim()) throw new Error(`Scenario ${index + 1} has an invalid id.`);
  if (ids.has(scenario.id)) throw new Error(`Duplicate scenario id: ${scenario.id}`);
  ids.add(scenario.id);
  if (!Array.isArray(scenario.preconditions) && (typeof scenario.preconditions !== 'object' || scenario.preconditions === null)) throw new Error(`${scenario.id}: preconditions must be an array or object.`);
  for (const field of ['setup', 'input', 'expected']) if (!scenario[field] || typeof scenario[field] !== 'object' || Array.isArray(scenario[field])) throw new Error(`${scenario.id}: ${field} must be an object.`);
  if (!Array.isArray(scenario.assertionTypes) || scenario.assertionTypes.length === 0) throw new Error(`${scenario.id}: assertionTypes must be a non-empty array.`);
  for (const type of scenario.assertionTypes) assertionTypes.add(type);
}
if (assertionTypes.size < 3) throw new Error(`Expected at least 3 distinct assertion types, found ${assertionTypes.size}.`);
console.log(`VALID ${path.relative(process.cwd(), file)}: ${scenarios.length} scenarios, ${assertionTypes.size} assertion types.`);

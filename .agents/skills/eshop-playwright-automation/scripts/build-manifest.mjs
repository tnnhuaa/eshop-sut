import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const values = {};
for (let i = 0; i < args.length; i += 2) {
  if (!args[i]?.startsWith('--') || args[i + 1] === undefined) throw new Error('Arguments must be --key value pairs.');
  values[args[i].slice(2)] = args[i + 1];
}
for (const key of ['feature', 'spec', 'data', 'report', 'browser', 'output']) if (!values[key]) throw new Error(`Missing --${key}.`);

for (const key of ['spec', 'data', 'report']) {
  if (!fs.existsSync(path.resolve(values[key]))) throw new Error(`${key} does not exist: ${values[key]}`);
}
const output = path.resolve(values.output);
fs.mkdirSync(path.dirname(output), { recursive: true });
const manifest = {
  feature: values.feature,
  browser: values.browser,
  generatedAt: new Date().toISOString(),
  artifacts: { spec: values.spec, data: values.data, report: values.report },
  humanReview: 'PENDING',
  defectStatus: 'UNCONFIRMED'
};
fs.writeFileSync(output, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
console.log(`WROTE ${path.relative(process.cwd(), output)}`);

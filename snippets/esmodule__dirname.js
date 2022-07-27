// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
const body = `import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);`;
const description = "";

module.exports = {
  prefix: ["!dirname"],
  type: ["javascript", "typescript","javascriptreact"],
  description: description || body,
  body,
};

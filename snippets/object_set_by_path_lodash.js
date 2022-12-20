const body = `
import {set} from 'lodash-es'
set(obj, path, value)
`;
const description = "";

module.exports = {
  prefix: ["ls", "ospl"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

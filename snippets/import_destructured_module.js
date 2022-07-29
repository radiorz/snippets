const body = `
import { $1 } from '$2';
`;
const description = "";

module.exports = {
  disabled: true,
  prefix: ["impo"],
  type: ["javascript", "typescript", "javascriptreact"],
  description: description || body,
  body: body.trim(),
};

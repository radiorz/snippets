const { TYPES } = require("../src/common/consts/types");
const body = `
const timeout = \${1:1000}
await new Promise((resolve) => setTimeout(resolve, timeout))
`;
const description = "";

module.exports = {
  prefix: ["sleep", "!sleep", "delay", "await"],
  type: [TYPES.javascript, TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

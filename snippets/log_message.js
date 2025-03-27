const { JS_LIKE } = require("../src/common/consts/types");
const body = `
\`\${1}模块.\${2: '执行'},但失败,原因为:\${3}\`
`;
const description = "";

module.exports = {
  prefix: ["!log_message", "!m"],
  type: [...JS_LIKE],
  description: description || body,
  body: body.trim(),
};

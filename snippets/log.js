const { JS_LIKE } = require("../src/common/consts/types");

const body = `console.log(\`\$1\`,\$1)`;
module.exports = {
  key: "console_log",
  prefix: ["csl", "logg"],
  type: JS_LIKE,
  description: body,
  body,
};

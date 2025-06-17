const { JS_LIKE } = require("../src/common/consts/types");
const body = `console.log(\`\$1\`,JSON.stringify(\$1,null,2))`;

module.exports = {
  key: "console_log_json",
  prefix: ["csljson"],
  type: JS_LIKE,
  description: description || body,
  body,
};

const { JS_LIKE } = require("../src/common/consts/types");
const body = `console.log(\`\$1\`,\$1, "\${TM_FILENAME}",\${TM_LINE_INDEX})`;

module.exports = {
  key: "console_log",
  prefix: ["cslinfo"],
  type: JS_LIKE,
  body,
};

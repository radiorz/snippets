const { TYPES } = require("../src/common/consts/types");
const body = `
  function hello() {
    console.log(\`hello\`)
  }
  hello()
`;
const description = "";

module.exports = {
  prefix: ["!hello"],
  type: [TYPES.javascript, TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

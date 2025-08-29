const { TYPES } = require("../src/common/consts/types");
const body = `
function $1() {
  $2
}
`;
const description = "";

module.exports = {
  prefix: ["!fn", "fn", "func"],
  type: [
    TYPES.typescript,
    TYPES.javascript,
    TYPES.typescriptreact,
    TYPES.javascriptreact,
  ],
  description: description || body,
  body: body.trim(),
};

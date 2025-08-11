const { TYPES } = require("../src/common/consts/types");
const body = `
function $1() {
  $2
}
`;
const description = "";

module.exports = {
  prefix: ["!fn", "fn", "func"],
  type: [TYPES.javascript, TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

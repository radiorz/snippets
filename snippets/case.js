const { TYPES } = require("../src/common/consts/types");
const body = `
  case $1: {
    $2
    break;
  }
`
const description = "";

module.exports = {
  prefix: ["!case"],
  type: [TYPES.javascript, TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

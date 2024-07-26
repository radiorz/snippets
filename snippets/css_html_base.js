const { TYPES } = require("../src/common/consts/types");
const body = `
* {
    padding: 0;
    margin: 0;
}
`;
const description = "";

module.exports = {
  prefix: ["!html"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};

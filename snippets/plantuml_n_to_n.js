const { TYPES } = require("../src/common/consts/types");
const body = `
"n"--"n"
`;
const description = "";

module.exports = {
  prefix: ["!plantuml_nn"],
  type: [TYPES.plantuml],
  description: description || body,
  body: body.trim(),
};

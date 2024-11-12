const { TYPES } = require("../src/common/consts/types");
const body = `
"1"--"1"
`;
const description = "";

module.exports = {
  prefix: ["!plantuml_11"],
  type: [TYPES.plantuml],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body = `
  transform: rotate(360deg);
`;
const description = "";

module.exports = {
  prefix: ["!rotate"],
  type: [TYPES.css],
  description: description || body,
  body: body.trim(),
};

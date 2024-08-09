const { TYPES } = require("../src/common/consts/types");
const body = `
  transform: scale(2);
`;
const description = "";

module.exports = {
  prefix: ["!scale"],
  type: [TYPES.css, TYPES.sass, TYPES.scss],
  description: description || body,
  body: body.trim(),
};

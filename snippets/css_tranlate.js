const { TYPES } = require("../src/common/consts/types");
const body = `
  transform: translate(300px 400px);
`;
const description = "";

module.exports = {
  prefix: ["!translate"],
  type: [TYPES.css, TYPES.sass, TYPES.scss],
  description: description || body,
  body: body.trim(),
};

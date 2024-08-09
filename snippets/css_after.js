const { TYPES } = require("../src/common/consts/types");
const body = `
  ::after {
    content: '';
    display: inline-block;
  }
`
const description = "";

module.exports = {
  prefix: ["!after"],
    type: [TYPES.css, TYPES.sass, TYPES.scss],
  description: description || body,
  body: body.trim(),
};

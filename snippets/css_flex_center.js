const { TYPES } = require("../src/common/consts/types");
const body = `
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const description = "";

module.exports = {
  prefix: ["!flex_center"],
    type: [TYPES.css, TYPES.sass, TYPES.scss],
  description: description || body,
  body: body.trim(),
};

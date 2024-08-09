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
    type: [TYPES.css, TYPES.sass, TYPES.scss],
  description: description || body,
  body: body.trim(),
};

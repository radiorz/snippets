const { TYPES } = require("../src/common/consts/types");
const body = `
.circle {
  border-radius: 50%;
}
`;
const description = "";

module.exports = {
  prefix: ["!circle"],
    type: [TYPES.css, TYPES.sass, TYPES.scss],
  description: description || body,
  body: body.trim(),
};

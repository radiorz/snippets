const { TYPES } = require("../src/common/consts/types");
const body = `
.border {
  border: solid 1px gray;
}
`
const description = "";

module.exports = {
  prefix: ["!border"],
    type: [TYPES.css, TYPES.sass, TYPES.scss],
  description: description || body,
  body: body.trim(),
};

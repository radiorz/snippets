const { TYPES } = require("../src/common/consts/types");

const body = `
const \${1:func} =  () => {
  $1
}
`;
const description = "";

module.exports = {
  prefix: ["!funa"],
  type: [
    TYPES.typescript,
    TYPES.javascript,
    TYPES.typescriptreact,
    TYPES.javascriptreact,
  ],
  description: description || body,
  body: body.trim(),
};

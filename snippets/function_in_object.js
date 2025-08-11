const { TYPES } = require("../src/common/consts/types");
const body = `
 \${1:func}(){

 }
`
const description = "";

module.exports = {
  prefix: ["!funo"],
  type: [
    TYPES.typescript,
    TYPES.javascript,
    TYPES.typescriptreact,
    TYPES.javascriptreact,
  ],
  description: description || body,
  body: body.trim(),
};

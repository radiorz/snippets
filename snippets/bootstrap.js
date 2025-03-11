const { TYPES } = require("../src/common/consts/types");
const body = `
async function bootstrap(){
  $1
}
bootstrap()
`;
const description = "";4

module.exports = {
  prefix: ["!bootstrap"],
  type: [TYPES.javascript,TYPES.typescript,TYPES.typescriptreact,TYPES.javascriptreact],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body = `
async function bootstrap(){
  $1
}
bootstrap()
`;
const description = "";

module.exports = {
  prefix: ["!bootstrap"],
  type: [TYPES.javascript,TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

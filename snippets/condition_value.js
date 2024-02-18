const { TYPES } = require("../src/common/consts/types");
const body = `
let \${1:value}
if(\${2:true}){
  $1 = "1"
}else {
  $2 = "2"
}
`
const description = "";

module.exports = {
  prefix: ["!condition_value"],
  type: [TYPES.javascript,TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

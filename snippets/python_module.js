const { TYPES } = require("../src/common/consts/types");
const body = `
""
__author__ = 'tikkhun' 

$1
  
`
const description = "";

module.exports = {
  prefix: ["!python_module"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body = `
Map<\${1:string},\${2:any}> = new Map()
`;
const description = "";

module.exports = {
  prefix: ["!map"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

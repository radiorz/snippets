const { TYPES } = require("../src/common/consts/types");
const body = `
Set<\${1:any}> = new Set()
`;
const description = "";

module.exports = {
  prefix: ["!set"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body = `
  private \${1:value}: \${2: any} 
`;
const description = "";

module.exports = {
  prefix: ["!private"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

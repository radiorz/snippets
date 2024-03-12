const { TYPES } = require("../src/common/consts/types");
const body = `
  this.\$set(this.\${1:name},\`\${2:key}\`,\${3:undefined})
`;
const description = "";

module.exports = {
  prefix: ["!thisSet"],
  type: [TYPES.javascript, TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

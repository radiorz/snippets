const { TYPES } = require("../src/common/consts/types");
const body = `
  .$\{1:name}{
  
  }
`;
const description = "";

module.exports = {
  prefix: ["!class"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body = `
  name            String           @unique
  title           String?
  description     String? 
`;
const description = "";

module.exports = {
  prefix: ["!ntd"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};

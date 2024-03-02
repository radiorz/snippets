const { TYPES } = require("../src/common/consts/types");
const body = `
/**
 * 说明:
 * @description: 
 */ 
`;
const description = "";

module.exports = {
  prefix: ["!comment_value"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};

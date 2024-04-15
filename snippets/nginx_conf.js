const { TYPES } = require("../src/common/consts/types");
const body = `
123123
`;
const description = "";

module.exports = {
  prefix: ["!conf"],
  type: ['nginx'],
  description: description || body,
  body: body.trim(),
};

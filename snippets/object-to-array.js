const { TYPES } = require("../src/common/consts/types");
const body = `
const arr = Object.entries(\${1:obj}).map(([key, value]) => ({ key, value }));
`;
const description = "";

module.exports = {
  prefix: ["!object-to-array"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};


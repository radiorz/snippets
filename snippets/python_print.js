const { TYPES } = require("../src/common/consts/types");

const body = `
print("$1 ",$1)
`;
const description = "";

module.exports = {
  prefix: ["!p","csl"],
  type: [TYPES.python],
  description: description || body,
  body: body.trim(),
};

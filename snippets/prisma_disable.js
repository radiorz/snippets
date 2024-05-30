const { TYPES } = require("../src/common/consts/types");
const body = `
  disabled    Boolean @default(false)
`;
const description = "";

module.exports = {
  prefix: ["!disable"],
  type: [TYPES.prisma],
  description: description || body,
  body: body.trim(),
};

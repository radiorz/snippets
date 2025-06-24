const { TYPES } = require("../src/common/consts/types");
const body = `
  name        String   @unique
  title       String?
  description String?
  icon        String?
`;
const description = "";

module.exports = {
  prefix: ["!ntd", "!desc"],
  type: [TYPES.prisma],
  description: description || body,
  body: body.trim(),
};

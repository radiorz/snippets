const { TYPES } = require("../src/common/consts/types");
const body = `
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updateAt  DateTime @updatedAt
`;
const description = "";

module.exports = {
  prefix: ["!common"],
  type: [TYPES.prisma],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body = `
  id              Int              @id @default(autoincrement())
  createdAt       DateTime         @default(now())
  updatedAt       DateTime         @updatedAt
`;
const description = "";

module.exports = {
  prefix: ["!icu"],
  type: [TYPES.prisma],
  description: description || body,
  body: body.trim(),
};

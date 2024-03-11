const { TYPES } = require("../src/common/consts/types");
const body = `
export enum \${1:EnumType} {
  \${2: Value}
}
`;
const description = "";

module.exports = {
  prefix: ["!enum"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

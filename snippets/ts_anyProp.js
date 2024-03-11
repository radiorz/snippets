const { TYPES } = require("../src/common/consts/types");
const body = `
    [prop: string]: any;
`;
const description = "";

module.exports = {
  prefix: ["!anyProp"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

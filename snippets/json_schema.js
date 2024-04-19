const { TYPES } = require("../src/common/consts/types");
const body = `
  "$schema": "http://json-schema.org/draft-07/schema#",
`;
const description = "";

module.exports = {
  prefix: ["!json_schema"],
  type: [TYPES.json, TYPES.jsonc],
  description: description || body,
  body: body.trim(),
};

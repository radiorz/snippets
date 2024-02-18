const { origin: file_name } = require("./file_name");

const body = `
const { TYPES } = require("../src/common/consts/types");
const body = \`
  $2
\`
const description = "";

module.exports = {
  prefix: ["!\${1:${file_name}}"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};
`;

const description = "";

module.exports = {
  prefix: ["!snippet"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

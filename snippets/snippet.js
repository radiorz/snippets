const { origin: file_name } = require("./file_name");

const body = `
const body = \`\`
const description = "";

module.exports = {
  prefix: ["!\${1:${file_name}}"],
  type: ["javascript"],
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

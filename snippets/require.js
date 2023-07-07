const body = `
const $1 = require('$1');
`;
const description = "";

module.exports = {
  prefix: ["!require"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

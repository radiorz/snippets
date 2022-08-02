const body = `
// -> $1
`;
const description = "";

module.exports = {
  prefix: ["expect", "//-"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

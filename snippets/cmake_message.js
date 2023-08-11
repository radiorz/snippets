const body = `
message(STATUS "$1: \${$1}")
`;
const description = "";

module.exports = {
  prefix: ["message"],
  type: ["cmake"],
  description: description || body,
  body: body.trim(),
};

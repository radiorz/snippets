const body = `
\/\/ ****** $1 ******
`;

const description = "";
module.exports = {
  prefix: ["///"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

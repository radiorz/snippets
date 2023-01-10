const body = `
  [...new Array(10).keys()].map(i=>i+1)
`;
const description = "";

module.exports = {
  prefix: ["!ten"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

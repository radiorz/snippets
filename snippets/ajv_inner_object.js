const body = `
  type: 'object',
  properties: {
    $2
  },
  required: []
`;
const description = "";

module.exports = {
  prefix: ["ajvInnerObject"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

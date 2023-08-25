const body = `
\${1:name}: {
  type: 'object',
  properties: {
    $2
  },
  required: []
},
`;
const description = "";

module.exports = {
  prefix: ["ajvObject"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

const body = `
\${1:name}: {
  type: 'array',
  items: {
    $2
  },
},
`;
const description = "";

module.exports = {
  prefix: ["ajvArray"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

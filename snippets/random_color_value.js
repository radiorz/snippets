const body = `
const color = \`#\${(~~(Math.random() * (1 << 24))).toString(16)}\`
`;
const description = "";

module.exports = {
  prefix: ["!color"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

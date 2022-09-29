const body = `
const [first,...rest] = \${1:arr}
\${1:arr} = rest
`;
const description = "";

module.exports = {
  prefix: ["aeir", "item_remove_from_array_end_immutable"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

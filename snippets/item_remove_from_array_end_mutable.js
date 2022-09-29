const body = `
const \${2:last} = \${1:arr}.pop()
`;
const description = "";

module.exports = {
  prefix: ["aer", "item_remove_from_array_end_mutable"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

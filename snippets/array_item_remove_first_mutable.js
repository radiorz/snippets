const body = `
const \${2:first} = \${1:arr}.shift()
`;
const description = "";

module.exports = {
  prefix: ["afr", "item_remove_from_array_first_mutable"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

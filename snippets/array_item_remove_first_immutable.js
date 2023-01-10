const body = `
const [first,...\${2:rest}] = \${1:arr}
`;
const description = "";

module.exports = {
  prefix: ["afri", "item_remove_from_array_first_immutable"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

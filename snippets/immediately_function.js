const body = `
(() => {
  $1
})();
`;
const description = "";

module.exports = {
  prefix: ["!if", "if", "iif"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

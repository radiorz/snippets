const body = `
\(state, { payload }) => {
  if (!payload) {
    return;
  }
  state.\${1:value} = payload;
}

`;
const description = "";

module.exports = {
  prefix: ["state"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

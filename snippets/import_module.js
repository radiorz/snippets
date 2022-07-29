const body = `
import $2 from '$1';
`;
const description = "";

module.exports = {
  disabled: true,// 原因 react snippets 已经有了
  prefix: ["impo"],
  type: ["javascript", "typescript", "javascriptreact"],
  description: description || body,
  body: body.trim(),
};

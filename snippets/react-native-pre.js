const body = `<Text style={{backgroundColor:'red'}}>{$1}</Text>`;
const description = "";

module.exports = {
  prefix: ["!prern"],
  type: ["javascript", "javascriptreact", "typescriptreact", "typescript"],
  description: description || body,
  body: body.trim(),
};

const body = `{"\${1:key}":"$2"},`;
const description = "一个花括号包含的东西";

module.exports = {
  prefix: ["!{", "kk"],
  type: ["jsonc", "json"],
  description: description || body,
  body: body.trim(),
};

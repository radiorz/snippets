const body = `{"$1":"$2"},`;
const description = "";

module.exports = {
  prefix: ["!{", "kk"],
  type: ["jsonc", "json"],
  description: description || body,
  body: body.trim(),
};

const body = ``
const description = "";

module.exports = {
  prefix: ["!snippet"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

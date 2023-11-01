const body = `\${$1}`
const description = "";

module.exports = {
  prefix: ["$","!$"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

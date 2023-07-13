const body = `
# `
const description = "";

module.exports = {
  prefix: ["//"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

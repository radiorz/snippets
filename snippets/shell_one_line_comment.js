const body = `# $1`
const description = "";

module.exports = {
  prefix: ["//"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

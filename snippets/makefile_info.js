const body = `
$(info \$1: $($1))
`
const description = "";

module.exports = {
  prefix: ["!info"],
  type: ["makefile"],
  description: description || body,
  body: body.trim(),
};

const body = `
isEqual=\\$(test \\$((\${1:\\$value})) -eq \\$((\${2:\\$value2})))
`
const description = "";

module.exports = {
  prefix: ["!test","!equal"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

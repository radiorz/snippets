const body = `
  ['\${1:int}':['\${2:int}']]
`
const description = "";

module.exports = {
  prefix: ["!ctype"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

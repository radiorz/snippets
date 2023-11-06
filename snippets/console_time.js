const body = `
console.time("\${1}")
console.timeEnd("\${1}")
`
const description = "";

module.exports = {
  prefix: ["!time",'logTime'],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

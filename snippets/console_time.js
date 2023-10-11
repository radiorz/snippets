const body = `
console.time("timer\${1}")
// console.timeEnd("timer\${1}")
`
const description = "";

module.exports = {
  prefix: ["!time",'logTime'],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

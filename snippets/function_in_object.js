const body = `
 \${1:func}(){

 }
`
const description = "";

module.exports = {
  prefix: ["!fun"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

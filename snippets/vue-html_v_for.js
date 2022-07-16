const body = `
v-for='(item,i) of \${1:lists}' :key='i'
`

const description = "vfor has a key";

module.exports = {
  prefix: ["vfor"],
  type: ["vue-html"],
  description: description || body,
  body:body.trim(),
}

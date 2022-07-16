const body = `
v-for='(item,i) of \${1:lists}' :key='i'
`

const description = "vfor has a key";

module.exports = {
  prefix: ["vfor"],
  // 不知为何 vue-html 不生效 只好加上 html
  type: ["vue-html",'html'],
  description: description || body,
  body:body.trim(),
}

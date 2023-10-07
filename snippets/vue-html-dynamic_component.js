const body = `
<component :is="$1"></component>
`
const description = "";

module.exports = {
  prefix: ["!component"],
  type: ["html","vue-html"],
  description: description || body,
  body: body.trim(),
};

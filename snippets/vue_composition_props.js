const body = `
const props =  defineProps({
  $1
})
`
const description = "";

module.exports = {
  prefix: ["!props"],
  type: ["javascript",'typescript'],
  description: description || body,
  body: body.trim(),
};

const body = `
const emit = defineEmits(['$1'])
// emit('$1')
`
const description = "";

module.exports = {
  prefix: ["!props"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

const body = `
const emit = defineEmits<{
  ($1):void
}>()
// emit('$1')
`
const description = "";

module.exports = {
  prefix: ["!emit"],
  type: ["typescript"],
  description: description || body,
  body: body.trim(),
};

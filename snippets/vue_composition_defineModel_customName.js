const body = `
defineProps(['$1'])
defineEmits(['update:$1'])
// $emit('update:$1', '')
`;
const description = "";

module.exports = {
  prefix: ["!defineCustomModel"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

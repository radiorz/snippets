const body = `
defineProps({
  modelValue: \${1:String},
  // modelModifiers: { default: ()=>({})} // 改写modifier的实现
})
defineEmits(['update:modelValue'])
// $emit('update:modelValue', '')
`;
const description = "";

module.exports = {
  prefix: ["!defineModel"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

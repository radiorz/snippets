const body = `
watch(
  ()=>\${1:value},
  async (newVal,oldVal)=>{
    // 
    $2
  },
  {
    // deep: true,
    // immediate: true,
    // flush: 'post'
  }
)
`;
const description = "";

module.exports = {
  prefix: ["!cwatch"],
  type: ["javascript",'typescript'],
  description: description || body,
  body: body.trim(),
};

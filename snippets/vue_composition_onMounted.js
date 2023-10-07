const body = `
onMounted(()=>{
  
})
`;
const description = "";

module.exports = {
  prefix: ["!cwatch"],
  type: ["javascript",'typescript'],
  description: description || body,
  body: body.trim(),
};

const body = `
watchPostEffect(async ()=>{
    $1
})
`;
const description = "";

module.exports = {
  prefix: ["!watchPostEffect"],
  type: ["javascript",'typescript'],
  description: description || body,
  body: body.trim(),
};

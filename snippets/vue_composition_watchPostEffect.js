const body = `
watchPostEffect(async ()=>{
    $1
})
`;
const description = "";

module.exports = {
  prefix: ["!cwatchPostEffect"],
  type: ["javascript",'typescript'],
  description: description || body,
  body: body.trim(),
};

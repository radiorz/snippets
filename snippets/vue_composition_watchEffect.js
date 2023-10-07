const body = `
watchEffect(async ()=>{
    $1
})
`;
const description = "";

module.exports = {
  prefix: ["!cwatchEffect"],
  type: ["javascript",'typescript'],
  description: description || body,
  body: body.trim(),
};

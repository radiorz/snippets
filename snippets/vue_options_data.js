const body = `
data(){
  return {
    $1
  }
},
`
const description = "";

module.exports = {
  prefix: ["!data"],
  type: ["javascript",'typescript'],
  description: description || body,
  body: body.trim(),
};

const body = `
new Promise((resolve,reject)=>{
  $1
})
`;
const description = "";
module.exports = {
  prefix: ["!promise"],
  type: ["javascript", "typescript","javascriptreact"],
  description: description || body,
  body: body.trim(),
};


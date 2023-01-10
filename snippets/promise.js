const body = `
new Promise((resolve,reject)=>{
  $1
})
`;
const description = "";
module.exports = {
  prefix: ["!promise"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};


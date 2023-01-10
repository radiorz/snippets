const body = `try{
  $1
}catch(err){
  $2
}`;
const description = "";
module.exports = {
  prefix: ["trycc"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body,
};

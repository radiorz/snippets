
const body = `($1) => { 
  $2 
}`;
const description = "箭头函数";
module.exports = {
  prefix: ["anfn"],
  type: ["javascript", "typescript",'vue'],
  description: description || body,
  body,
};

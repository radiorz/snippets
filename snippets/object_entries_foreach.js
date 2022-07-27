// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
const body = `Object.entries(options).forEach(([key,value])=>{
$1
}`;
const description = "";

module.exports = {
  prefix: ["oef"],
  type: ["javascript", "typescript","javascriptreact"],
  description: description || body,
  body,
};

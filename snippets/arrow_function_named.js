const body = `
const \${1:func} = ($2) => { 
  $3
}`;
const description = "箭头函数";
module.exports = {
  prefix: ["afn"],
  type: [
    "javascript",
    "typescript",
    "vue",
    "javascriptreact",
    "typescriptreact",
  ],
  description: description || body,
  body,
};

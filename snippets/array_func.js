
const body = `($1) => { $2 }`;
const description = "";
module.exports = {
  key: "array_func",
  prefix: ["anfn"],
  type: ["javascript", "typescript",'vue'],
  description: description || body,
  body,
};

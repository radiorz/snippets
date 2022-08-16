
const body = `($1) => { $2 }`;
const description = "";
module.exports = {
  prefix: ["anfn"],
  type: ["javascript", "typescript",'vue'],
  description: description || body,
  body,
};

const body = `
function typeOf (value){
  return Object.prototype.toString.call(value).slice(8,-1).toLowerCase()
}
`;
const description = "检验数据类型";

module.exports = {
  prefix: ["typeOf"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};


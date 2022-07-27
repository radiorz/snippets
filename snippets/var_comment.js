const body = `
\/**
 * @var $1  
 * @desc $变量定义
 * @property {string} $2 $变量名
 * 
 */
`;
const description = "";

module.exports = {
  prefix: ["!vh"],
  type: ["javascript", "typescript","javascriptreact"],
  description: description || body,
  body: body.trim(),
};

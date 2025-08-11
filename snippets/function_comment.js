const { TYPES } = require("../src/common/consts/types");
const body = `
/**
 * @function $1 $2
 * @description 函数用于
 * @param 
 * @returns
 * @example
 * \$1() // ->
 */
export function \${1:fun}(){

}
`;
const description = "";

module.exports = {
  prefix: ["!comment_function","!func"],
  type: [TYPES.typescript,TYPES.javascript,TYPES.typescriptreact,TYPES.javascriptreact],
  description: description || body,
  body: body.trim(),
};

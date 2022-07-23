/**
 * @author 
 * @file 
 * @desc 单行封闭注释
 * @todo
 * 
 * @done
 * @example
 */
const body = `
\${BLOCK_COMMENT_START}* ****** \$1 ****** \${BLOCK_COMMENT_END}
`;
const description = "/** ******  ****** */";
module.exports = {
  prefix: [`//`, "ccc"],
  type: ["javascript", "typescript","java"],
  description: description || body,
  body: body.trim(),
};


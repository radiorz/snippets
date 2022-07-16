const body = `
/**
 * @author 
 * @file 
 * @desc $1
 * @todo
 * 
 * @done
 * @example
 */
`;
const description = "";
module.exports = {
  prefix: ["!fh"],
  type: ["javascript", "typescript", "java"],
  description: description || body,
  body: body.trim(),
};

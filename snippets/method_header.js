const body = `
/**
 * @method $1
 * @param {} 
 * @returns {}
 * @desc $2
 * @example
 */
`;
const description = "";
module.exports = {
  prefix: ["!mh","!funh"],
  type: ["javascript", "typescript", "java"],
  description: description || body,
  body: body.trim(),
};

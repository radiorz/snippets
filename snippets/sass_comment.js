const body = `
\/**
  * 功能:
  * TODO: 
  * [] 
  * 注释: 
  * - 
  */
`;
const description = "";

module.exports = {
  prefix: ["!bz"],
  type: ["scss"],
  description: description || body,
  body: body.trim(),
};

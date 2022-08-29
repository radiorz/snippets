const body = `
(() => {
  $1
})();
`;
const description = "";

module.exports = {
  prefix: ["!if", "if"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

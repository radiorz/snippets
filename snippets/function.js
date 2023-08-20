const body = `
function () {
  $1
}
`;
const description = "";

module.exports = {
  prefix: ["!fn", "fn", "func"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

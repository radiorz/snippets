const body = `
$1 = "$1", // $2
`;
const description = "";

module.exports = {
  prefix: ["!enum_prop"],
  type: ['typescript'],
  description: description || body,
  body: body.trim(),
};

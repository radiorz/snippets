const body = `
namespace \${1:demo} {

} // namespace \$1
`;
const description = "";

module.exports = {
  prefix: ["!namespace"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};

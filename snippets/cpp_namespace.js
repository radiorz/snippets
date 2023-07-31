const body = `
namespace \${1:demo} {

} // namespace \$1
`;
const description = "";

module.exports = {
  prefix: ["!namspace"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

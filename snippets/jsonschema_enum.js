const body = `
{
  "type": "string",
  "default": "$1",
  "enum": ["$1"],
}
`;
const description = "";

module.exports = {
  prefix: ["!enumschema"],
  type: ["javascript", "typescript", "json", "jsonc"],
  description: description || body,
  body: body.trim(),
};

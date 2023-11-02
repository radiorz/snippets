const body = `
{
  "type":"array",
  "items": {
    "\${1:value}":{
      "name": "\${1:value}",
      "type": "object",
    }
  }
}
`;
const description = "";

module.exports = {
  prefix: ["!arraySchema"],
  type: ["javascript","typescript",'json','jsonc'],
  description: description || body,
  body: body.trim(),
};

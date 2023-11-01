const body = `
{
  "type":"object",
  "properties": {
    "\${1:value}":{
      "name": "\${1:value}",
      "type": "object",
    }
  }
}
`;
const description = "";

module.exports = {
  prefix: ["!object"],
  type: ["javascript",'json','jsonc'],
  description: description || body,
  body: body.trim(),
};

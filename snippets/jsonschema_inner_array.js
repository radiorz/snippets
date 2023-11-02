const body = `
"type": "array",
"items": {
  $1
},
`;
const description = "";

module.exports = {
  prefix: ["!inArraySchema"],
  type: ["javascript", "typescript","json",'jsonc'],
  description: description || body,
  body: body.trim(),
};

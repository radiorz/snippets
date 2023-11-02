const body = `
  type: 'array',
  items: {
    $2
  },
`;
const description = "";

module.exports = {
  prefix: ["!inArray"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

const body = `
"$1": "$2",
`;
const description = "";

module.exports = {
  prefix: ["!line"],
  type: ["json", "jsonc",'javascript','typescript'],
  description: description || body,
  body: body.trim(),
};

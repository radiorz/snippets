const body = `
"$1": "$2"
`;
const description = "";

module.exports = {
  prefix: ["!", "!line"],
  type: ["json"],
  description: description || body,
  body: body.trim(),
};

const body = `
"$1": "$2",
`;
const description = "";

module.exports = {
  prefix: ["!", "!line", "ll"],
  type: ["json", "jsonc"],
  description: description || body,
  body: body.trim(),
};

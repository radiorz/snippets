const body = `
print("$1 \${$1}");
`;
const description = "";

module.exports = {
  prefix: ["csl", "!print", "pr"],
  type: ["dart"],
  description: description || body,
  body: body.trim(),
};

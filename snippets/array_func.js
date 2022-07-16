const body = `console.log(\`\$1\`,$1)`;
const description = "";
module.exports = {
  key: "array_func",
  prefix: ["anfn"],
  type: ["javascript", "typescript"],
  description: description || body,
  body,
};

const body = `console.log(\`\$1\`,$1)`;

module.exports = {
  key: "console_log",
  prefix: ["csl"],
  type: ["javascript", "typescript"],
  description: "console.log(*)",
  body,
};

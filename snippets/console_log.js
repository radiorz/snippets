const body = `console.log(\`\$1\`,$1)`;

module.exports = {
  key: "console_log",
  prefix: ["csl", "logg"],
  type: ["javascript", "typescript"],
  description: "console.log(*)",
  body,
};

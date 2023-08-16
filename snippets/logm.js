const body = `console.log(\`\$1\`)`;

module.exports = {
  key: "console_log",
  prefix: ["cslm","logm"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: "console.log(*)",
  body,
};

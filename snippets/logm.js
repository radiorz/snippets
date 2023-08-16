const body = `console.log(\`\$1\`)`;

module.exports = {
  key: "console_log_message",
  prefix: ["cslm","logm"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: "console.log(*)",
  body,
};

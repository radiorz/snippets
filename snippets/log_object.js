const body = `console.log(\`\$1\`,JSON.stringify(\$1,null,2))`;

module.exports = {
  key: "console_log_json",
  prefix: ["csljson"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: "console.log(*)",
  body,
};

const body = `console.log(\`\$1\`,\$1, "\${TM_FILENAME}",\${TM_LINE_INDEX})`;

module.exports = {
  key: "console_log",
  prefix: ["csl", "logg"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: "console.log(*)",
  body,
};

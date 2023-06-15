const body = `
logger.debug(\`\$1\`,\$1);
`
const description = "";

module.exports = {
  prefix: ["!debug"],
  type: ["javascript","typescript"],
  description: description || body,
  body: body.trim(),
};

const body = `
const timeout = \${1:1000}
await new Promise((resolve) => setTimeout(resolve, timeout))
`;
const description = "";

module.exports = {
  prefix: ["wait","!wait", "delay",'await'],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

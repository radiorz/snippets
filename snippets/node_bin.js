const body = `
#!/usr/bin/env node
`;
const description = "";

module.exports = {
  prefix: ["!node","!nb"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

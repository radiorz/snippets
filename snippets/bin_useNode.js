const body = `
#!/usr/bin/env node
`;
const description = "";

module.exports = {
  prefix: ["!node","#"],
  type: ["javascript","typescript"],
  description: description || body,
  body: body.trim(),
};

const body = `
#!/usr/bin/env zx 
await \$\`\`
`;
const description = "";
module.exports = {
  prefix: ["!zx"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

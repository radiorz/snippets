const body = `
#!/usr/bin/env zx
/**
 * 功能: \$1
 * 
 */ 
await \$\`\`
`;
const description = "";
module.exports = {
  prefix: ["!zx"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

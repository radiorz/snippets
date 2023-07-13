const body = `
#!/bin/bash
`;
const description = "";

module.exports = {
  prefix: ["!bash","#"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

const body = `
\${LINE_COMMENT} ****** $1 ******
`;

const description = "";
module.exports = {
  prefix: ["///"],
  type: ["javascript", "typescript","java"],
  description: description || body,
  body: body.trim(),
};

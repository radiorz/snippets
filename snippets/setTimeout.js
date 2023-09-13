const body = `
const timeout= \${2:500};
const timeoutId = setTimeout(() => {
  $1
}, Timeout);
`;
const description = "";

module.exports = {
  prefix: ["setTimeout"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

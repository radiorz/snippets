const body = `
const interval= \${2:500};
const intervalId = setInterval(() => {
  $1
}, interval);
`;
const description = "";

module.exports = {
  prefix: ["setInterval"],
  type: ["javascript","typescript"],
  description: description || body,
  body: body.trim(),
};

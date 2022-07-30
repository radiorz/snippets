const body = `
await new Promise(resolve=>{setTimeout(resolve,\${1:1000})})
`;
const description = "";

module.exports = {
  prefix: ["await", "delay"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

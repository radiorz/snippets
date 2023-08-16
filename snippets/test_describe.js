const body = `
describe("\${1:description}",() => {
  
})
`;
const description = "";

module.exports = {
  prefix: ["!describe"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

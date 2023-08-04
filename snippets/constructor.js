const body = `
  constructor(){}
`;
const description = "";

module.exports = {
  prefix: ["constructor", "!constructor"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

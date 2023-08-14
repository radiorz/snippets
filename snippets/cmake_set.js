const body = `
set($1 "$2")
`;
const description = "";

module.exports = {
  prefix: ["set"],
  type: ["cmake"],
  description: description || body,
  body: body.trim(),
};

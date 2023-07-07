const body = `
import $1 from '$1'
`;
const description = "";

module.exports = {
  prefix: ["!import"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

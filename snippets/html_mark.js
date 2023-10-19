const body = `
<div>ShitHereForSearch</div>
`;
const description = "";

module.exports = {
  prefix: ["!shit", "!mark"],
  type: ["html",'vue-html'],
  description: description || body,
  body: body.trim(),
};

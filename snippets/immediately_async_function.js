const body = `
(\${2:async} () => {
  $1
})();
`;
const description = "";

module.exports = {
  prefix: ["!async", "iaf"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

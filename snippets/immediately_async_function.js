const body = `
(\${2:async} () => {
  $1
})();
`;
const description = "";

module.exports = {
  // ()() 不显示..
  prefix: ["!async", "ifa", "iifea"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

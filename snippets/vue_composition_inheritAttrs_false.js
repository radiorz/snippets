const body = `
defineOptions({
  inheritAttrs: false
})
`;
const description = "";

module.exports = {
  prefix: ["!noInheritAttrs"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

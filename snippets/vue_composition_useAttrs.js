const body = `
// 获取所有透传的值
const attrs = useAttrs()
`
const description = "";

module.exports = {
  prefix: ["!useAttrs"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

const body = `
# 生产文件
dist
# 依赖
node_modules**
`
const description = "";

module.exports = {
  prefix: ["!ignore_vue"],
  type: ["ignore"],
  description: description || body,
  body: body.trim(),
};

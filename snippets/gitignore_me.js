const body = `
# 生产文件
dist
# 缓存等
.trash
.temp
.vendor
# 依赖
node_modules**
`;
const description = "";

module.exports = {
  prefix: ["!me"],
  type: ["ignore"],
  description: description || body,
  body: body.trim(),
};

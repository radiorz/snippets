const body = `
| select-string -pattern \\$pattern
`;
const description = "过滤字符串";

module.exports = {
  prefix: ["ss"],
  type: ["powershell"],
  description: description || body,
  body: body.trim(),
};

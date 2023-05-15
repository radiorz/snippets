const body = `
  // ****** parsing 获取并转换成handler所需字段 ******
  // ****** verify 排除不允许等错误 ******
  // ****** handle 处理逻辑并生成result ******
  // ****** result 结果的进一步处理,加密等 ******
  `;
const description = "";

module.exports = {
  prefix: ["!handlerLifeCycle"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

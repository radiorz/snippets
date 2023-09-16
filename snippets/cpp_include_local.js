const body = `
#include "$1.h"
`;
const description = "";

module.exports = {
  // 与系统库的关键词统一,在输入后进行选择即可
  prefix: ["#include", "include"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body = `
// 变成c 才能被调用
#ifdef __cplusplus
extern "C"
{
#endif
namespace $1 {
  $2

}

#ifdef __cplusplus
}
`;
const description = "";

module.exports = {
  prefix: ["!hc"],
  type: [TYPES.cpp],
  description: description || body,
  body: body.trim(),
};

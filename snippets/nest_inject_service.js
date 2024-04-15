const { TYPES } = require("../src/common/consts/types");
const body = `
  @Inject($2)
  private readonly $1: $2;
`;
// TODO 暂时不知道为何 大写字母不自动转换,只能先$2替代
const description = "";

module.exports = {
  prefix: ["!nest_inject_service"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

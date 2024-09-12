/**
 * # TODO
 * # DONE
 * ## 20240912 星期四
 * - 暂时保留# 虽然@是蓝色显示
 * # FUTURE
 */
const { TYPES } = require("../src/common/consts/types");
const { LANGUAGE_LABELS } = require("../src/common/consts/types");
const { body: today } = require("./today");
const body = `
\${BLOCK_COMMENT_START}* 
 * # TODO
 * - $1
 * # DONE
 * ## ${today}
 * # FUTURE
 \${BLOCK_COMMENT_END}
`;
const description = "";

module.exports = {
  prefix: ["!todo"],
  type: LANGUAGE_LABELS.filter((language) => language !== TYPES.markdown),
  description: description || body,
  body: body.trim(),
};

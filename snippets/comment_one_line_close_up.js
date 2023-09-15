/**
 * @author
 * @file
 * @desc 单行封闭注释
 * @todo
 *
 * @done
 * @example
 */
const { LANGUAGE_LABELS } = require("../src/common/consts/types");

const body = `
\${BLOCK_COMMENT_START} ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ \$1 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ \${BLOCK_COMMENT_END}
`;
const description = "/** ******  ****** */";
module.exports = {
  prefix: ['!down'],
  type: LANGUAGE_LABELS,
  description: description || body,
  body: body.trim(),
};

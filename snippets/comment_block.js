const { LANGUAGE_LABELS } = require("../src/common/consts/types");
const body = `
\${BLOCK_COMMENT_START}* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 * @desc $1
 \${BLOCK_COMMENT_END}
  $2

\${BLOCK_COMMENT_START}* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 * @desc $1
 \${BLOCK_COMMENT_END}
`;
const description = "";

module.exports = {
  prefix: ["!comment_block", "!b"],
  // 即全部
  type: LANGUAGE_LABELS,
  description: description || body,
  body: body.trim(),
};

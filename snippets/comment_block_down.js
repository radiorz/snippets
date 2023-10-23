const { LANGUAGE_LABELS } = require("../src/common/consts/types");
const body = `
\${BLOCK_COMMENT_START}* 
 * ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 * @desc $1 
 \${BLOCK_COMMENT_END}
`;
const description = "";

module.exports = {
  prefix: ["!comment_block_down", "!down"],
  // 即全部
  type: LANGUAGE_LABELS,
  description: description || body,
  origin: body,
  body: body.trim(),
};

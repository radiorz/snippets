const { TYPES } = require("../src/common/consts/types");
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
  type: [TYPES.javascript, TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

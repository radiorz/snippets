const { LANGUAGE_LABELS } = require("../src/common/consts/types");
const { origin: down } = require("./comment_block_down");
const { origin: up } = require("./comment_block_up");

const body = `
${down}
  $2
${up}
`;
const description = "";

module.exports = {
  prefix: ["!comment_block", "!b"],
  // 即全部
  type: LANGUAGE_LABELS,
  description: description || body,
  original: body,
  body: body.trim(),
};

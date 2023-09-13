const { LANGUAGE_LABELS,TYPES } = require("../src/common/consts/types");
const body = `
\${LINE_COMMENT} ****** $1 ******
`;

const description = "";
module.exports = {
  prefix: ["///"],
  type: LANGUAGE_LABELS.filter(type=>![TYPES.vue,TYPES.html].includes(type)),
  description: description || body,
  body: body.trim(),
};

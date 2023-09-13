const { TYPES } = require("../src/common/consts/types");
const body = `
:<<EOF
$1
EOF
`;
const description = "";
module.exports = {
  prefix: ["##", "///"],
  type: [TYPES.shellscript],
  description: description || body,
  body: body.trim(),
};

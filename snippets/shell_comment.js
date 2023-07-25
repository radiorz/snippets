const body = `
:<<EOF
$1
EOF
`;
const description = "";
const TYPES = require("../src/common/consts/types");
module.exports = {
  prefix: ["##", "///"],
  type: [TYPES.shellscript],
  description: description || body,
  body: body.trim(),
};

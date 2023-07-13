const body = `
:<<EOF
$1
EOF
`;
const description = "";
const types = require("../utils/types");
module.exports = {
  prefix: ["##",'///'],
  type: [types.shellscript],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body =
  "${TM_FILENAME_BASE/([a-z]*)[-@_.*0-9]+([a-z]*)/${1:/capitalize}${2:/capitalize}/g}";
// "${TM_FILENAME_BASE/(^[A-Za-z]+).*?(\\.[^\\\\\\/]+)?$/${1:/capitalize}/}";
const description = "";

module.exports = {
  prefix: ["!File"],
  type: [
    TYPES.javascript,
    TYPES.typescript,
    TYPES.javascriptreact,
    TYPES.typescriptreact,
  ],
  description: description || body,
  origin: body,
  body: body.trim(),
};
!vue

const { TYPES } = require("../src/common/consts/types");
const body =
  "${TM_FILENAME_BASE/(^[A-Za-z]+).*?(\\.[^\\\\\\/]+)?$/${1:/capitalize}/}";
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

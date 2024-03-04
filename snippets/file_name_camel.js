const { TYPES } = require("../src/common/consts/types");
const body = "${TM_FILENAME_BASE/(\\w+)\\.(.*)/${1:/camelcase}/}";
const description = "";

module.exports = {
  prefix: ["!fileName"],
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

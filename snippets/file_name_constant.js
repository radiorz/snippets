const { TYPES } = require("../src/common/consts/types");
const body = "${TM_FILENAME_BASE/([^_]+)/${1:/upcase}/g}";
const description = "Convert the filename to UPPER_SNAKE_CASE";

module.exports = {
  prefix: ["!FILE_CONST"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
  origin: body,
};

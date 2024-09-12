const { TYPES } = require("../src/common/consts/types");
const body = `
$CURRENT_YEAR$CURRENT_MONTH$CURRENT_DATE $CURRENT_DAY_NAME
`;
const description = "";

module.exports = {
  prefix: ["!today"],
  type: [
    TYPES.markdown,
    TYPES.javascript,
    TYPES.typescript,
    TYPES.typescriptreact,
    TYPES.javascriptreact,
  ],
  description: description || body,
  body: body.trim(),
};

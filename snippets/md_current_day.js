const { TYPES } = require("../src/common/consts/types");
const body = `
$CURRENT_YEAR$CURRENT_MONTH$CURRENT_DATE $CURRENT_DAY_NAME
`;
const description = "";

module.exports = {
  prefix: ["!current_day", "!day"],
  type: [TYPES.markdown],
  description: description || body,
  body: body.trim(),
};

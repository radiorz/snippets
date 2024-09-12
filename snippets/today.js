const { LANGUAGE_LABELS } = require("../src/common/consts/types");
const body = `
$CURRENT_YEAR$CURRENT_MONTH$CURRENT_DATE $CURRENT_DAY_NAME
`;
const description = "";

module.exports = {
  prefix: ["!today"],
  type: LANGUAGE_LABELS,
  description: description || body,
  body: body.trim(),
};

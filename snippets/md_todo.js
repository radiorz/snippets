const { TYPES } = require("../src/common/consts/types");
const { body: md_current_day } = require("./md_current_day");
const body = `
# TODO
- $1
# DONE
## ${md_current_day}
- 
# FUTURE
`;
const description = "";

module.exports = {
  prefix: ["!todo"],
  type: [TYPES.markdown],
  description: description || body,
  body: body.trim(),
};

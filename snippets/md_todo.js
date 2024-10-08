const { TYPES } = require("../src/common/consts/types");
const { body: today } = require("./today");
const body = `
# TODO
- $1
# DONE
## ${today}
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

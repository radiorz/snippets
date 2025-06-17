const { TYPES } = require("../src/common/consts/types");
const body = `
# $1

## 功能

## 使用

`
const description = "";

module.exports = {
  prefix: ["!readme"],
  type: [TYPES.markdown],
  description: description || body,
  body: body.trim(),
};

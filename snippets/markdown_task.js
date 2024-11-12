const { TYPES } = require("../src/common/consts/types");
const body = `
# 任务
## 任务描述

## 解答

## 补充说明

`
const description = "";

module.exports = {
  prefix: ["!task"],
  type: [TYPES.markdown],
  description: description || body,
  body: body.trim(),
};

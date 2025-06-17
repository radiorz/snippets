const { origin: fileName } = require("./file_name");

const body = `
#!/bin/bash

${fileName}() {
  # 定义参数
  local value=$1
}

`;
const description = "";

module.exports = {
  prefix: ["!shell", "!"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

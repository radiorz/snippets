const { origin: fileHeader } = require("./file_header");
const { origin: fileName } = require("./file_name");
const body = `${fileHeader}
import React, { useState, useEffect, memo } from 'react'

function \${1:${fileName}}() {
  return (
    <div>
      \${1:${fileName}}
    </div>
  )
}

export default \${1:${fileName}}

`;

const description = "react 函数组件";

module.exports = {
  prefix: ["!react"],
  type: ["javascript","javascriptreact"],
  description: description || body,
  body: body.trim(),
};

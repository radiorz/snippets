const { origin: fileHeader } = require("./file_header");
const { origin: fileName } = require("./file_name");
const body = `${fileHeader}
import { useState, useEffect, memo } from "react"
export interface \${1}Props {
  // value: any
}
export const \${1:${fileName}}:React.FC<\${1}Props> = ()=> {
  return (
    <div>
      \${1}
    </div>
  )
}


`;

const description = "react 函数组件";

module.exports = {
  prefix: ["!react"],
  type: ["typescript", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

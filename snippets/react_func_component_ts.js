const { origin: fileHeader } = require("./file_header");
const { origin: fileName } = require("./file_name");
const { TYPES } = require("../src/common/consts/types");
const body = `${fileHeader}
import { useState, useEffect, memo } from "react"
// export interface \${1}Props {
  // value: any
// }
export const \${1:${fileName}}:React.FC/* <\${1}Props> */ = ()=> {
  return (
    <div>
      \${1}
    </div>
  )
}
  
// 默认导出
export default $1


`;

const description = "react 函数组件";

module.exports = {
  prefix: ["!react", "!r"],
  type: [TYPES.typescript, TYPES.typescriptreact],
  description: description || body,
  body: body.trim(),
};

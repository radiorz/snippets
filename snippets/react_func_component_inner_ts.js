const { origin: fileHeader } = require("./file_header");
const { origin: fileName } = require("./file_name");
const body = `
/**
 * 
*/
export const \${1:${fileName}}:React.FC<{
  value: any
}> = ()=> {
  return (
    <div> 
      \${1}
    </div>
  )
}

`;

const description = "react 函数组件";

module.exports = {
  prefix: ["!rc"],
  type: ["typescript", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

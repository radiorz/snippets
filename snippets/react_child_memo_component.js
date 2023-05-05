const body = `
// import React, { memo } from 'react'
const \${1:Comp} = memo(() => {
  return (
    <></>
  )
})

`;
const description = "memo component";

module.exports = {
  prefix: ["!react_memo_component", "!rmc"],
  type: ["javascript", "javascriptreact"],
  description: description || body,
  body: body.trim(),
};

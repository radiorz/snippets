const body = `
// import React, { memo } from 'react'
const \$1 = memo(() => {
  return (
    <div></div>
  )
})

`;
const description = "";

module.exports = {
  prefix: ["!react_memo_component", "!rmc"],
  type: ["javascript", "javascriptreact"],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body = `
  animation-name: \${1:changeColor};
  /* 动画时间 */
  animation-duration: 2s;
  /* 延迟 */
  animation-delay: 4s;
  /* 动画影响 */
  animation-fill-mode: forwards;
  /* 动画重复执行 */
  animation-iteration-count: infinite;
`;
const description = "";

module.exports = {
  prefix: ["!animation"],
    type: [TYPES.css, TYPES.sass, TYPES.scss],
  description: description || body,
  body: body.trim(),
};

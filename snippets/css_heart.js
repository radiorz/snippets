const { TYPES } = require("../src/common/consts/types");
const body = `
  .heart {
    width: 200px;
    height:200px;
    background: red;
    transform: rotate(45deg)
  }
  .heart::before {
    content: '';
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    background: red;
    transform: transformX(-100px)
  }
  .heart::after {
    content: '';
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    background: red;
    transform: transformY(-100px)

  }
`;
const description = "";

module.exports = {
  prefix: ["!heart"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};

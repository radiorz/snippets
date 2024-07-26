const { TYPES } = require("../src/common/consts/types");
const body = `
@keyframes $1 {
  0% {
  /* background-color: black; */
  }

  100% {
   /* background-color: white; */
  }
}
`;
const description = "";

module.exports = {
  prefix: ["!keyframes"],
  type: [TYPES.css],
  description: description || body,
  body: body.trim(),
};

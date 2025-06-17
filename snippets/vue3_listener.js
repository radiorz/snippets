const { TYPES } = require("../src/common/consts/types");
const body = `
function on$1(event) {

}

onMounted(() => window.addEventListener('$1', on$1))
onUnmounted(() => window.removeEventListener('$1',  on$1))
`;
const description = "";

module.exports = {
  prefix: ["!v3_listener"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body = `
  Vue.set(this.\${1:name},\`\${2:key}\`,\${3:undefined})
`;
const description = "";

module.exports = {
  prefix: ["!vSet",'!vueSet'],
  type: [TYPES.javascript, TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

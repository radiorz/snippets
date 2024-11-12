const { TYPES } = require("../src/common/consts/types");
const body = `
entity \${1:实体}{
  *id
  name名称
}
`;
const description = "";

module.exports = {
  prefix: ["!plantuml_entity"],
  type: [TYPES.plantuml],
  description: description || body,
  body: body.trim(),
};

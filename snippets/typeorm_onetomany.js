const { TYPES } = require("../src/common/consts/types");
const { origin: file_name_camel } = require("./file_name_camel");
const body = `
    @OneToMany(() => \${1:ObjectType}, ($2) => $2.${file_name_camel})
    \${2:object}s: \${1:ObjectType}[]
`;
const description = "";

module.exports = {
  prefix: ["!typeorm_onetomany"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

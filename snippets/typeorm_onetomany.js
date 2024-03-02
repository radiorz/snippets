const { TYPES } = require("../src/common/consts/types");
const body = `
    @OneToMany(() => $2, ($1) => $1.user)
    \${1:object}s: \${2:Type}[]
`;
const description = "";

module.exports = {
  prefix: ["!typeorm_onetomany"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

const { TYPES } = require("../src/common/consts/types");
const body = `
/**
 * 说明: 
 */
@ManyToOne(() => $2, ($1) => $1.\${2:values})
\${1:obj}: \${2:Type};
`;
const description = "";

module.exports = {
  prefix: ["!typeorm_manytoone"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

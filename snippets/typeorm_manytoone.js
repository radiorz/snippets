// 暂时没找到$1转大写的方法
const { TYPES } = require("../src/common/consts/types");
const {origin: file_name_camel} = require("./file_name_camel");
const body = `
/**
 * 说明: 
 */
@ManyToOne(() => \${1:ObjectType}, ($2) => $2.\${3:${file_name_camel}})
\${2:object}: \${1:ObjectType};
`;
const description = "";

module.exports = {
  prefix: ["!typeorm_manytoone"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

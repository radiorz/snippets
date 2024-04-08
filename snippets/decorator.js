const { TYPES } = require("../src/common/consts/types");
const { origin: fileName } = require("./file_name_big_camel");

const body = `
export const ${fileName} = () => {
  return (target: any, propertyKey?: string, descriptor?: PropertyDescriptor) => {
    $2
  };
};
`;
const description = "";

module.exports = {
  prefix: ["!decorator"],
  type: [TYPES.javascript, TYPES.typescript],
  description: description || body,
  body: body.trim(),
};

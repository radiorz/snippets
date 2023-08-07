const body = `
#include <$1>
`;
const description = "";

module.exports = {
  prefix: ["!include", "#include"],
  type: ["cpp", "c"],
  description: description || body,
  body: body.trim(),
};

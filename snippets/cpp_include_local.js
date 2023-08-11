const body = `
#include "$1.h"
`;
const description = "";

module.exports = {
  prefix: ["!include"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};

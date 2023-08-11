const body = `
#include <$1.h>
`;
const description = "";

module.exports = {
  prefix: ["!include"],
  type: ["c"],
  description: description || body,
  body: body.trim(),
};

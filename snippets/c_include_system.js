const body = `
#include <$1.h>
`;
const description = "";

module.exports = {
  prefix: ["#include", "include"],
  type: ["c"],
  description: description || body,
  body: body.trim(),
};

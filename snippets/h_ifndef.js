const { TYPES } = require("../src/common/consts/types");
const body = `
#ifndef __\${1:HELLO_H}__
#define __\${1:HELLO_H}__

$2

#endif
`;
const description = "";

module.exports = {
  prefix: ["!ifndef"],
  type: [TYPES.c, TYPES.cpp],
  description: description || body,
  body: body.trim(),
};

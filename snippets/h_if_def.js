const { TYPES } = require("../src/common/consts/types");
const { origin: file_name_constant } = require("./file_name_constant");
const body = `
#ifndef __\${1:${file_name_constant}}_H__
#define __\${1:${file_name_constant}}_H__


#endif

`;
const description = "";

module.exports = {
  prefix: ["!hif", "!ifndef"],
  type: [TYPES.cpp, TYPES.c],
  description: description || body,
  body: body.trim(),
};

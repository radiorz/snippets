const { origin: fileHeader } = require("./file_header");
const { origin: file_name } = require("./file_name");
const { origin: file_name_big_camel } = require("./file_name_big_camel");
const body = `${fileHeader}
import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
export interface \${2:${file_name_big_camel}}Options {
}

export const default$2Options: $2Options = {
};

export function \${1:${file_name}}(options: Partial<$2Options> = {}) {
  const opts = { ...default$2Options, ...options };
  const [\${3:value}] = useState(null);

  return {\$3};
}
export default\${1:${file_name}}

`;
const description = "";

module.exports = {
  prefix: ["!hook", "!rhook"],
  type: ["typescript", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

const { origin: fileHeader } = require("./file_header");
const { origin: file_name } = require("./file_name");

const body = `${fileHeader}
import { useState, useEffect } from "react";

export default function \${1:${file_name}}() {
  const [\${2:value}] = useState(null);

  return {\$2};
}

`;
const description = "";

module.exports = {
  prefix: ["!hook"],
  type: ["typescript", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

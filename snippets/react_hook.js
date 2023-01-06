const { origin: fileHeader } = require("./file_header");
const { origin: file_name } = require("./file_name");
const body = `${fileHeader}
import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";

export default function \${1:${file_name}}() {
  const [\$2] = useState(null);
  return {\$2};
}

`;
const description = "";

module.exports = {
  prefix: ["!hook"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body: body.trim(),
};

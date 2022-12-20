const body = `
import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";

export default function use\${1:Something}() {
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

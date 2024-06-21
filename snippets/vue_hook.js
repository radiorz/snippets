const { origin: fileHeader } = require("./file_header");
const { origin: file_name } = require("./file_name");
const body = `${fileHeader}
import { ref } from "vue";

export const default$2Options = {
};

export function \${1:${file_name}}(options = {}) {
  const opts = { ...default$2Options, ...options };
  const \${3:value}  = ref(null);

  return {\$3};
}

`;
const description = "";

module.exports = {
  prefix: ["!vhook"],
  type: ["javascript", "javascriptreact"],
  description: description || body,
  body: body.trim(),
};

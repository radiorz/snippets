const { origin: fileHeader } = require("./file_header");
const { origin: file_name } = require("./file_name");
const body = `
${fileHeader}
import { ref } from 'vue'
export default function \${1:${file_name}} {
  $2
  
  return {
    $3
  }
}
`;
const description = "";

module.exports = {
  prefix: ["!vue_hook",'!composable'],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

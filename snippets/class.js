const { origin: fileHeader } = require("./file_header");
const { origin: fileName } = require("./file_name");

const body = `${fileHeader}
export default class \${1:${fileName}} {
  constructor(options) {
    \${3:Object.assign(this, options)};
  }
}
`;
const description = "";

module.exports = {
  prefix: ["!class"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

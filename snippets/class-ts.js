const { origin: fileHeader } = require("./file_header");
const { origin: fileName } = require("./file_name");

const body = `${fileHeader}
export interface $1Options {

}

export class \${1:${fileName}} {
  static defaultOptions:$1Options = {
  }
  options: $1Options
  constructor(options?: Partial<$1Options>) {
    this.options = Object.assign($1.defaultOptions, options);
  }
}

`;
const description = "";

module.exports = {
  prefix: ["!class"],
  type: ["typescript"],
  description: description || body,
  body: body.trim(),
};

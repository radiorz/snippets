const { origin: fileHeader } = require("./file_header");
const { origin: fileName } = require("./file_name");

const body = `${fileHeader}
export interface Options {

}
export const DEFAULT_OPTIONS = {

};
export class \${1:${fileName}} {
  options: Options;
  constructor(options?: Partial<Options>) {
    this.options = Object.assign(DEFAULT_OPTIONS, options);
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

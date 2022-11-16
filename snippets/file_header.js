const dirname = "${TM_DIRECTORY/^(.*[\\\\|\\/])(.*)/$2/}";
const { origin: filename } = require("./file_name");
const body = `
/**
 * @author
 * @file $TM_FILENAME
 * @fileBase ${filename}
 * @path $RELATIVE_FILEPATH
 * @dir $TM_DIRECTORY
 * @desc $2
 * @todo
 *
 * @done
 * @example
 */
`;

const description = "";
module.exports = {
  prefix: ["!fh"],
  type: ["javascript", "typescript", "java"],
  description: description || body,
  origin: body,
  body: body.trim(),
};

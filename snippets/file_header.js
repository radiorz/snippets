/**
 *  @desc
 *   说明
 *   @author 作者
 *   @file 文件全名
 *   @fileBase 文件的Base名称，如果 index 就是 hook， 如果 名称就是哪个名称
 *   @path 相对根目录的路径
 *   @from 来源 有的时候可能是外部复制黏贴的写个来源
 *   @desc 具体说明
 *   @todo
 *
 *   @done
 *   @example
 */

const { origin: filename } = require("./file_name");

const body = `
/**
 * @author
 * @file $TM_FILENAME
 * @fileBase ${filename}
 * @path $RELATIVE_FILEPATH
 * @from 
 * @desc $10
 * @todo
 * 
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

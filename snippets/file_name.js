/**
 * file_name
 * @author
 * @file file_name.js
 * @fileBase file_name
 * @path snippets\file_name.js
 * @dir D:\code\snippets\snippets
 * @desc 如果是 index.* 则取他的目录名，如果是 xxx.* 那么取 xxx
 * @todo
 *
 * @done
 * @example
 */
const body =
  "${RELATIVE_FILEPATH/.*[\\\\|\\/](.*)[\\\\|\\/]index\\..*|.*[\\\\|\\/](.*)\\..*|(.*)\\..*/$1$2$3/}";
const description = "";

module.exports = {
  prefix: ["!file_name"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  origin: body,
  body: body.trim(),
};

/**
 * @author
 * @file debug_temp.js
 * @fileBase debug_temp
 * @path snippets\debug_temp.js
 * @from 
 * @desc
 * 由于不同的项目日志系统可能不一致,所以将常用日志格式提取到单独的snippets中
 * 可能你的日志系统是这样的
 * logger.debug()
 * diag.debug()
 * console.log()
 * ...
 * 
 * @todo
 * 
 *
 * @done
 * @example
 */
const body = `
\`$1\`,$1
`;
const description = "";

module.exports = {
  prefix: ["```"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

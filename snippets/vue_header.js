/**
 * @author
 * @file vue_header.js
 * @fileBase vue_header
 * @path snippets\vue_header.js
 * @from 
 * @desc
 *  vue 的文件头部标注
 *  采用了统一的 file_header 标准
 *  
 * @todo

 *
 * @done
 * @example
 */
const { origin: fileHeader } = require("./file_header");
const body = `
<!--
 ${fileHeader}
-->
`;
const description = "";

module.exports = {
  prefix: ["!header",'!vh'],
  type: ["vue"],
  description: description || body,
  origin: body,
  body: body.trim(),
};

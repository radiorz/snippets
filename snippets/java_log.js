/**
 * @author 
 * @file 
 * @desc java 打印日志最基础语句
 * @todo
 * 
 * @done
 * @example
 */
const body = `System.out.println("$1 " + $1);`;
const description = "";

module.exports = {
  prefix: ["csl"],
  type: ["java"],
  description: description || body,
  body: body.trim(),
};

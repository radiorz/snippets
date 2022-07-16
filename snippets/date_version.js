/**
 * @author
 * @file date_version.js
 * @desc 日期直接做版本
 * @todo 
 * [] fix 现在无法直接使用，因为有0在前面需要手动删除 vscode 没有提供无0版的月份日期
 * 详见 https://code.visualstudio.com/docs/editor/userdefinedsnippets
 * @done
 * @example
 */

const body = `"$CURRENT_YEAR.$CURRENT_MONTH.$CURRENT_DATE"`;

module.exports = {
  prefix: ["!tv"],
  type: ["javascript", "typescript", "java", "vue"],
  body,
  description: "今天日期",
};

/**
 * child_process.exec(command[, options][, callback])
 * 使用 nodejs 执行文件
 */
const body = `
const { execFile } = require("child_process");
const command = \`$1.exe\`
execFile(command, function (err, data) {
  console.log(err);
  console.log(data.toString());
});
`;

const description = "使用 nodejs 执行exe文件";

module.exports = {
  prefix: ["exe"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

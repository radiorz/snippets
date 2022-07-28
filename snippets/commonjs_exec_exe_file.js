/**
 * child_process.exec(command[, options][, callback])
 */
const body = `
const { execFile } = require("child_process");
const command = \`$1.exe\`
execFile(command, function (err, data) {
  console.log(err);
  console.log(data.toString());
});
`;

const description = "";

module.exports = {
  prefix: ["exe"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};


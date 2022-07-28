/**
 * child_process.exec(command[, options][, callback])
 */
const body = `
const { exec } = require("child_process");
const command = \`$1\`
exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
`;

const description = "";

module.exports = {
  prefix: ["exec"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

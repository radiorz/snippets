const body = `
const { spawn } = require("child_process");
const [command,...args] = \`$1\`.split(" ");
const child = spawn(command,args,{stdio:"inherit"});
child.stdout.on('data', (data) => {
  console.log(data.toString());
});

child.stderr.on('data', (data) => {
  console.error(data.toString());
});

child.on('exit', (code) => {
  console.log(\`Child exited with code \${code}\`);
});
child.on("error", (err) => {})
child.on("close", () => {})
`;

const description = "使用 nodejs spawn 执行命令";

module.exports = {
  prefix: ["spawnexe"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

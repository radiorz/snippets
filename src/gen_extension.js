const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const packageJsonPath = path.join(
  __dirname,
  "../vscode-extension/package.json"
);
// 修改 package.json
const packageJson = require(packageJsonPath);
const glob = require("glob");
const files = glob.sync("./build/**.json");

packageJson.contributes.snippets = [];
files.forEach((file) => {
  const filename = path.basename(file, ".json");
  packageJson.contributes.snippets.push({
    language: filename,
    path: `./snippets/${filename}.json`,
  });
});
console.log(`packageJson`, packageJson.contributes.snippets);
// 复制 build 文件 到 vscode-extension

// 将 packageJson写回到文件中
const version = dayjs().format("YYYY.M.DD");
packageJson.version = version;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`写入文件成功`, packageJsonPath);

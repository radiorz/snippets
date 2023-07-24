const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const glob = require("glob");
const logger = require("../../common/logger");
// ----------------------------------------------------------------
const packageJsonPath = path.join(
  __dirname,
  "../../..",
  "vscode-extension/package.json"
);
const files = glob.sync("./.build/**.json");
const packageJson = require(packageJsonPath);

//----------------------------------------------------------------

class ExtensionHandler {
  constructor() {}
  copyBuildSnippets(file, filename) {
    fs.copyFileSync(
      file,
      path.resolve(`./vscode-extension/snippets/${filename}.json`)
    );
  }
  // 抽象的开始
  start() {
    logger.info("开始添加代码片段");
    packageJson.contributes.snippets = [];
    if (!fs.existsSync("./vscode-extension/snippets")) {
      fs.mkdirSync("./vscode-extension/snippets");
    }
    files.forEach((file) => {
      const filename = path.basename(file, ".json");
      // packageJSON 的添加
      packageJson.contributes.snippets.push({
        language: filename,
        path: `./snippets/${filename}.json`,
      });
      this.copyBuildSnippets(file, filename);
    });
    this.changeVersion();
    this.outputPackageJson();
    logger.info("结束添加代码片段");
  }
  changeVersion() {
    const version = dayjs().format("YYYY.M.D");
    packageJson.version = version;
  }
  outputPackageJson() {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }
}

module.exports = ExtensionHandler;

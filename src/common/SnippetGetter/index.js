const glob = require("glob");
const path = require("path");

const snippetsGlobPattern = "./snippets/*.js";
const snippetTextsGlobPattern = "./snippetsTexts/*";

class SnippetGetter {
  constructor() {}
  static get() {
    const optionSnippetFiles = glob.sync(snippetsGlobPattern);
    const textSnippetFiles = glob.sync(snippetTextsGlobPattern);
    // 原始 snippet 配置

    return {
      optionSnippets: optionSnippetFiles
        .map((filePath) => {
          const snippetOptions = require(path.join(
            __dirname,
            "../../..",
            filePath
          ));
          return { filePath, ...snippetOptions };
        })
        .filter((option) => option),
      textSnippets: textSnippetFiles
        .map((filePath) => {
          try {
            const file = filePath.split("/").at(-1);
            if (!file) {
              throw new Error("文件全称有问题");
            }
            const [fileName, ext] = file.split(".");
            if (!fileName) throw new Error("没有文件名");
            // 读取文件
            const body = fs.readFileSync(path.resolve(filePath), "utf8");
            if (!body || !body.trim()) throw new Error("文件为空");
            return {
              fileName,
              ext,
              body,
            };
          } catch (error) {
            logger.error(`获取${filePath}text snippet出错`, error.message);
            return null;
          }
        })
        .filter((option) => option),
    };
  }
}
module.exports = SnippetGetter;

const glob = require("glob");
const path = require("path");
const fs = require("fs");
const logger = require("../logger");

const snippetsGlobPattern = "./snippets/*.js";
const snippetTextsGlobPattern = "./snippetTexts/*";
const EXTS_LANGUAGE_MAP = require("../consts/extsLanguageMap");
const { isObject } = require("../funcs");
class SnippetGetter {
  constructor() {}
  static get() {
    const textSnippetFiles = glob.sync(snippetTextsGlobPattern);
    const optionSnippetFiles = glob.sync(snippetsGlobPattern);
    const textSnippets = textSnippetFiles.map((filePath) => {
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
        return SnippetGetter.tranTextSnippet({
          fileName,
          ext,
          body,
        });
      } catch (error) {
        logger.error(`获取${filePath}text snippet出错`, error.message);
        return null;
      }
    });
    return [
      ...textSnippets,
      ...optionSnippetFiles.map((filePath) => {
        try {
          const snippetOptions = require(path.join(
            __dirname,
            "../../..",
            filePath
          ));
          return SnippetGetter.tranSnippet({ filePath, ...snippetOptions });
        } catch (error) {
          logger.error(`获取${filePath} snippet出错`, error.message);
          return null;
        }
      }),
    ].filter((option) => option);
  }
  static tranTextSnippet({ fileName, ext, body } = {}) {
    const type = EXTS_LANGUAGE_MAP[ext];
    return {
      type,
      body,
      key: `text_${fileName}`,
      description: body,
      prefix: [`!${fileName}`],
    };
  }
  static tranSnippet({ filePath, ...snippetOption } = {}) {
    if (!snippetOption) {
      throw new Error("snippet is nothing");
    }
    if (!isObject(snippetOption)) {
      throw new Error(`snippet must be an object`);
    }
    if (!snippetOption.body) {
      throw new Error(`snippet must be an object with body`);
    }
    if (snippetOption.disabled) {
      throw new Error(`snippet disabled`);
    }
    let { key, body, ...rest } = snippetOption;
    const snippet = { ...rest };
    snippet.key = key || path.basename(filePath, ".js");
    snippet.body = body.split("\n");
    return snippet;
  }
}
module.exports = SnippetGetter;

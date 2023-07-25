/**
 * @author
 * @file index.js
 * @fileBase vsAdapter
 * @path packages\vsAdapter\index.js
 * @from
 * @desc 生成 visual studio 格式的 snippets
 * @todo
 *
 *
 * @done
 * @example
 */
const fs = require("fs");
const { create } = require("xmlbuilder2");
const path = require("path");
const { isArray } = require("../common/funcs");
const logger = require("../common/logger");
const snippetDir = path.join(__dirname, "../../.build-vs");
if(!fs.existsSync(snippetDir)){
  fs.mkdirSync(snippetDir);
}
const SnippetGetter = require("../common/SnippetGetter");
const { languageFileMap } = require("./consts");
function getRoot() {
  return create({
    version: "1.0",
    encoding: "utf-8",
  })
    .ele("CodeSnippets", {
      xmlns: "http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet",
    })
    .ele("CodeSnippet", { Format: "1.0.0" });
}

class Adapter {
  constructor() {}
  start() {
    this.genSnippets();
  }
  genSnippets() {
    logger.info("开始生成");
    const snippetOptions = SnippetGetter.get();
    snippetOptions.forEach((snippetOption = {}) => {
      const types = isArray(snippetOption.type)
        ? snippetOption.type
        : [snippetOption.type];
      types.forEach((type) => {
        const xml = this.tranSnippet({ ...snippetOption, type });
        const fileType = languageFileMap[type];
        if (!fileType) {
          logger.error("这个类型暂不支持");
          return;
        }
        // 存储
        const saveDir = path.join(snippetDir, fileType);
        console.log(`saveDir`, saveDir);
        if (!fs.existsSync(saveDir)) {
          fs.mkdirSync(saveDir);
        }
        const writeStream = fs.createWriteStream(
          path.join(saveDir, `${snippetOption.key}.snippet`)
        );
        writeStream.write(xml);
        writeStream.end();
      });
    });
    logger.info("结束生成");
  }
  tranSnippet(snippetOption = {}) {
    let { key, type, body, description, prefix } = snippetOption;
    const root = getRoot();
    const header = create()
      .ele("Header")
      .ele("Title")
      .txt(key)
      .up()
      .ele("Shortcut")
      .txt(prefix)
      .up()
      .ele("Description")
      .dat(description)
      .up()
      .ele("Author")
      .txt("tikkhun")
      .up()
      .ele("SnippetTypes")
      .ele("SnippetType")
      .txt("Expansion")
      .up()
      .ele("SnippetType")
      .txt("SurroundsWith")
      .up();
    // 替换 body中的 变量
    let _body = body.join("\n");
    const snippet = create({
      version: "1.0",
      encoding: "123",
    })
      .ele("Snippet")
      .ele("Code", { Language: type })
      .dat(_body)
      .ele("Declarations")
      .ele("Literal")
      .up()
      .up();

    const total = root.import(header.root()).import(snippet.root());
    const xml = total.end({ prettyPrint: true });
    return xml;
  }
}
module.exports = Adapter;

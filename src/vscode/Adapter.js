/**
 * @author
 * @file index.js
 * @fileBase vscodeAdapter
 * @path packages\vscodeAdapter\index.js
 * @from
 * @desc 生成 vscode 格式的 snippets
 * @todo
 *
 *
 * @done
 * @example
 */
const path = require("path");
const fs = require("fs");
const { isString, isArray } = require("../common/funcs");
const logger = require("../common/logger");
// 全局变量
const SnippetGetter = require("../common/SnippetGetter");
const snippetsDir = path.join(__dirname, "../../snippets");
const buildDir = path.join(__dirname, "../../.build");

console.log(`snippetsDir`, snippetsDir);
class Adapter {
  constructor() {}
  start() {
    this.genSnippets();
  }
  // 转换一个 snippets
  snippets = {};
  setSnippetType(type) {
    const types = isArray(type) ? type : [type];
    types.forEach((_type) => {
      if (this.snippets[_type]) {
        return;
      }
      // 添加新类型
      this.snippets[_type] = {};
    });
  }
  /** 将 snippet 设置进缓存中 */
  setSnippetToSnippets(snippet = {}) {
    const { type, key, ...rest } = snippet;
    const types = isString(type) ? [type] : type;
    // 如果没有这个类型先设置类型(JavaScript之类的)
    this.setSnippetType(types);
    // 添加
    types.forEach((type) => {
      this.snippets[type][key] = rest;
    });
  }
  genSnippets() {
    logger.info("开始生成");
    const snippetOptions = SnippetGetter.get();
    // 获取选项
    snippetOptions.forEach((snippetOption = {}) => {
      try {
        const { filePath, ...snippet } = snippetOption;
        // 缓存起来
        this.setSnippetToSnippets(snippet);
      } catch (error) {
        logger.error(`选项文件(${filePath})添加错误`, error.message);
      }
    });
    // 导出文件
    this.outputSnippets();
    logger.info("结束生成");
  }

  outputSnippets() {
    if (!fs.existsSync(buildDir)) {
      fs.mkdirSync(buildDir);
    }
    Object.entries(this.snippets).forEach(([language, _snippets]) => {
      const file = fs.createWriteStream(
        path.resolve(buildDir, `${language}.json`)
      );
      file.write(JSON.stringify(_snippets, null, 2));
      file.end();
    });
  }
}

module.exports = Adapter;

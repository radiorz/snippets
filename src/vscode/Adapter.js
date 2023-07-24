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
const { isString, isArray, isObject } = require("../common/funcs");
const logger = require("../common/logger");
const EXTS_LANGUAGE_MAP = require("../common/consts/extsLanguageMap");
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
  tranSnippet({ filePath, ...snippetOption } = {}) {
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
    const { optionSnippets, textSnippets } = SnippetGetter.get();
    // 获取选项
    optionSnippets.forEach((snippetOption = {}) => {
      try {
        // 获取snippet 配置(稍作转换)
        const snippet = this.tranSnippet(snippetOption);
        // 缓存起来
        this.setSnippetToSnippets(snippet);
      } catch (error) {
        logger.error(
          `选项文件(${snippetOption.filePath})添加错误`,
          error.message
        );
      }
    });
    // 导出
    textSnippets.forEach((fileOption = {}) => {
      try {
        // 获取snippet 配置
        const snippet = this.tranTextSnippet(fileOption);
        // 缓存起来
        this.setSnippetToSnippets(snippet);
      } catch (error) {
        logger.error(`添加${filePath}文件错误`, error.message);
      }
    });
    // 导出文件
    this.outputSnippets();
    logger.info("结束生成");
  }
  tranTextSnippet({ fileName, ext, body } = {}) {
    const type = EXTS_LANGUAGE_MAP[ext];
    return {
      type,
      body,
      key: `text_${fileName}`,
      description: body,
      prefix: [`!${fileName}`],
    };
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

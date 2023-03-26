const glob = require("glob");
const path = require("path");
const fs = require("fs");
const isString = (a) => typeof a === "string";
const isArray = (a) => Array.isArray(a);
const isObject = (a) => typeof a === "object" && a != null;
const { EXTS_LANGUAGE_MAP } = require("./utils");
const logger = {
  warn: (...args) => console.warn("[WARN]", ...args),
  debug: (...args) => console.debug("[DEBUG]", ...args),
  error: (...args) => console.error("[ERROR]", ...args),
  info: (...args) => console.info("[INFO]", ...args),
};
(async () => {
  let snippets = {
    javascript: {},
    typescript: {},
  };
  // 这是使用了 vscode 写法的提示
  const files = glob.sync("./snippets/*.js");
  console.log(`files`, files);
  files.forEach((file) => {
    try {
      // 获取字符串
      const snippet = require(path.join("../", file));
      if (!snippet) throw new Error("snippet is nothing");
      if (!isObject(snippet) || !snippet.body) {
        throw new Error(`snippet must be an object with \"body\"!`);
      }
      if (snippet.disabled) {
        return logger.warn(`snippet disabled`, file);
      }
      snippet.body = snippet.body.split("\n");
      let { key, type, ...rest } = snippet;
      if (!key) key = path.basename(file, ".js");
      // console.log(`key,type,rest`, key, type, rest);
      // 添加进最终数据
      if (isString(type)) {
        setNewType(snippets, type);
        snippets[type][key] = rest;
      } else if (isArray(type)) {
        type.forEach((t) => {
          setNewType(snippets, t);
          snippets[t][key] = rest;
        });
      }
    } catch (error) {
      logger.error(JSON.stringify({ file }), error.message);
    }
  });

  // ****** 获取纯文本提示 ******
  const textSnippets = glob.sync("./snippetTexts/*");
  console.debug("textSnippets", textSnippets);
  textSnippets.forEach((filePath) => {
    try {
      // 通过后缀获取类型
      const file = filePath.split("/").at(-1);
      const [fileName, ext] = file.split(".");
      const type = EXTS_LANGUAGE_MAP[ext];
      if (!fileName) throw new Error("没有文件名");
      if (!type) throw new Error("不支持这种类型");
      setNewType(snippets, type);
      // 通过读取每行来转换成 snippets
      const body = fs.readFileSync(path.resolve(filePath), "utf8");
      if (!body || !body.trim()) throw new Error("文件为空");
      snippets[type][`text_${fileName}`] = {
        body,
        description: "file",
        prefix: [`!${fileName}`],
      };
    } catch (error) {
      logger.error(`读取纯文本出错了`, filePath, error.message);
    }
  });

  Object.entries(snippets).forEach(([language, snippets]) => {
    const file = fs.createWriteStream(`./.build/${language}.json`);
    file.write(JSON.stringify(snippets, null, 2));
    // console.log(`snippets`, snippets);
    file.end();
    logger.debug(`language done`, language);
  });
})();
/**
 * 设置没有的类型
 * @param {Object} snippets
 * @param {string} type
 */
function setNewType(snippets = {}, type) {
  if (snippets[type]) return;
  snippets[type] = {};
}
function setASnippet(snippets = {}, type, value) {}

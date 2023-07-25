/** 语言类型 */
const LANGUAGE_LABELS = [
  "c",
  "cpp",
  "css",
  "go",
  "html",
  "java",
  "javascript",
  "javascriptreact",
  "json",
  "makefile",
  "markdown",
  "plaintext",
  "powershell",
  "sass",
  "scss",
  "shellscript",
  "typescript",
  "typescriptreact",
  "vue",
  "xml",
  "yaml",
];
function genLanguageObj(labels = LANGUAGE_LABELS) {
  const obj = {};
  for (const language of labels) {
    obj[language] = language;
  }
  return obj;
}
const TYPES = genLanguageObj();
module.exports = TYPES;

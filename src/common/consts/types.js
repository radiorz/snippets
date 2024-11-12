/** 语言类型 */
const LANGUAGE_LABELS = [
  "c",
  "cpp",
  "css",
  "sass",
  "scss",
  "go",
  "html",
  "java",
  "javascript",
  "javascriptreact",
  "json",
  "makefile",
  "markdown",
  "plaintext",
  'plantuml',
  "powershell",
  "sass",
  "scss",
  "shellscript",
  "typescript",
  "typescriptreact",
  "ignore",
  "vue",
  "xml",
  "yaml",
  "nginx",
  "prisma",
  "python"
];
function genLanguageObj(labels = LANGUAGE_LABELS) {
  const obj = {};
  for (const language of labels) {
    obj[language] = language;
  }
  return obj;
}
const TYPES = genLanguageObj();
module.exports = { TYPES, LANGUAGE_LABELS };

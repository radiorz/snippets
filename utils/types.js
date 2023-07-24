const LANGUAGE_LABELS = [
  "shellscript",
  "javascript",
  "typescript",
  "c",
  "cpp",
  "typescriptreact",
  "javascriptreact",
  "css",
  "scss",
  "sass",
  "go",
  "yaml",
  "html",
  "java",
  "json",
  "makefile",
  "markdown",
  "plaintext",
  "powershell",
  "xml",
  "vue",
];
function genLanguageObj(labels = LANGUAGE_LABELS) {
  const obj = {};
  for (const language of labels) {
    obj[language] = language;
  }
  return obj;
}
module.exports = genLanguageObj();

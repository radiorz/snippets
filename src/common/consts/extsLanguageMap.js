const {TYPES} = require("./types");
/**
 * 文件后缀对应的文件类型(语言)
 */
const EXTS_LANGUAGE_MAP = {
  yaml: TYPES.yaml,
  yml: TYPES.yaml,
  js: TYPES.javascript,
  ts: TYPES.typescript,
  sh: TYPES.shellscript,
  java: TYPES.java,
  jsx: TYPES.javascriptreact,
  tsx: TYPES.typescriptreact,
  ps1: TYPES.powershell,
  sass: TYPES.sass,
  scss: TYPES.scss,
  html: TYPES.html,
  go: TYPES.go,
  md: TYPES.markdown,
  c: TYPES.c,
  css: TYPES.css,
  cpp: TYPES.cpp,
  cc: TYPES.cpp,
  C: TYPES.c,
};
module.exports = EXTS_LANGUAGE_MAP;

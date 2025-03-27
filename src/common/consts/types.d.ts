declare const LANGUAGE_LABELS = [
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
  "plantuml",
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
  "python",
] as const;
declare type LanguageLabel = (typeof LANGUAGE_LABELS)[number];
declare const TYPES: Record<LanguageLabel, LanguageLabel>;
declare const JS_LIKE: LanguageLabel[];
export { TYPES, LANGUAGE_LABELS, JS_LIKE };

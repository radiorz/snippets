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
const { create } = require("xmlbuilder2");
const path = require("path");
const snippetDir = path.join(__dirname, "../../vs-snippets");

const root = create({
  version: "1.0",
  encoding: "utf-8",
})
  .ele("CodeSnippets", {
    xmlns: "http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet",
  })
  .ele("CodeSnippet", { Format: "1.0.0" });
class Adapter {
  constructor() {}
  start() {}
  genSnippets() {
    const header = create().ele("Header", {}).ele("Title", {});

    const snippet = create({
      version: "1.0",
      encoding: "123",
    })
      .ele("Snippet", {})
      .ele("Code", {});

    const total = root.import(header.root()).import(snippet.root());
    const xml = total.end({ prettyPrint: true });
    console.log(`xml`, xml);
  }
}
module.exports = Adapter;

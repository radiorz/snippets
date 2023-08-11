const SnippetGetter = require("../common/SnippetGetter");
const fs = require("fs");
const path = require("path");
class ReadMeGenerator {
  start() {
    const snippetOptions = SnippetGetter.get();
    this.toHtml(snippetOptions);
    this.toMarkdown(snippetOptions);
  }
  toHtml(snippetOptions) {
    const file = fs.createWriteStream(path.join(__dirname, "./index.html"));
    // 使用markdown 自带表格 这个表格内不能显示代码段,只能用 html 的手段了
    const headers = ["序号", "快捷键", "支持语言", "更多介绍"];
    file.write(`
<!DOCTYPE html>
<table>  
  <thead>
    <tr>
        ${headers
          .map((header) => {
            return `<th>${header}</th>`;
          })
          .join("    \n")}
    </tr>
  </thead>
  <tbody>`);
    snippetOptions.forEach((option = {}, index) => {
      const { filePath, prefix, type, description, body } = option;
      if (description.includes("<")) {
        file.write(`
        <tr>
        <td>${index}</td>
        <td>${JSON.stringify(prefix)}</td>
        <td>${JSON.stringify(type)} </td>
        <td>带<的代码不能用html显示,详见 ${filePath}</td>
        </tr>`);
        return;
      }
      file.write(`
    <tr>
      <td>${index}</td>
      <td>${JSON.stringify(prefix)}</td>
      <td>${JSON.stringify(type)} </td>
      <td><pre><code>${description}
      </code></pre></td>
    </tr>`);
    });
    file.write(`
     </tbody>
</table>`);
    file.end();
  }
  toMarkdown(snippetOptions) {
    const file = fs.createWriteStream(path.join(__dirname, "./index.md"));
    // 使用markdown 自带表格 这个表格内不能显示代码段,只能用 html 的手段了
    const headers = ["序号", "快捷键", "支持语言", "更多介绍"];
    file.write(`|${headers.join("|")}|\n`);
    file.write(`|${headers.map(() => "--").join("|")}|\n`);
    snippetOptions.forEach((option = {}, index) => {
      const { filePath, prefix, type, description, body } = option;

      file.write(
        `| ${index}|${JSON.stringify(prefix)}|${JSON.stringify(
          type
        )} |${JSON.stringify(description)}|\n`
      );
    });

    file.end();
  }
}
module.exports = ReadMeGenerator;

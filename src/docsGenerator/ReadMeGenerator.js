const SnippetGetter = require("../common/SnippetGetter");
const fs = require("fs");
const path = require("path");
class ReadMeGenerator {
  start() {
    const snippetOptions = SnippetGetter.get();
    const file = fs.createWriteStream(path.join(__dirname, "./readme.md"));
    // 使用markdown 自带表格 这个表格内不能显示代码段,只能用 html 的手段了
    const headers = ["序号", "快捷键", "支持语言", "更多介绍"];
    file.write(` 
<table>  
    <thead>
      <tr>
        ${headers.map((header) => {
          return `<th>${header}</th>`;
        })}
      </tr>
    </thead>
    <tbody>
    `);
    snippetOptions.forEach((option = {}, index) => {
      const { prefix, type, description, body } = option;
      file.write(`
<tr>
      <td>${index}</td>
      <td>${JSON.stringify(prefix)}</td>
      <td>${JSON.stringify(type)} </td>
      <td><pre>${description}</pre></td>
</tr>
`);
    });
    file.write(`
    </tbody>    
</table>`);
    file.end();
  }
}
module.exports = ReadMeGenerator;

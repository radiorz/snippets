const SnippetGetter = require("../common/SnippetGetter");
const fs = require("fs");
const path = require("path");
class ReadMeGenerator {
  start() {
    const snippetOptions = SnippetGetter.get();
    const file = fs.createWriteStream(path.join(__dirname, "./readme.md"));
    file.write(`| 序号 | 快捷键 | 支持语言 | 更多介绍 |\n`);
    file.write("|---|---|---|---|\n");
    snippetOptions.forEach((option = {}, index) => {
      const { prefix, type, description, body } = option;
      file.write(
        `|${index}| ${JSON.stringify(prefix)} | ${JSON.stringify(
          type
        )} | ${JSON.stringify(description)} |\n`
      );
    });
    file.end();
  }
}
module.exports = ReadMeGenerator;

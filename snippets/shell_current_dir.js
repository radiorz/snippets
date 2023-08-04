const body = `
# sh文件所在路径
CURRENT_DIR=$(dirname "\\$0")
`;
const description = "";

module.exports = {
  prefix: ["!currentDir"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

const body = `
tar -zxvf \${1:压缩包名}.tar.gz -C \${2:.}
`;
const description = "";

module.exports = {
  prefix: ["!tarout"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

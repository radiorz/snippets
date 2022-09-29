const body = `
tar -zxvf \${1:压缩包名}.tar.gz -C \${2:.}
`;
const description = `
此为解压

-f <filename>  后加 filename
-z 压缩 采用 gz
-j 压缩 采用 bz2
-c: 建立压缩档案（.tar)
-v 显示所有过程

-x 解压
-O 解开到标准输出

`;

module.exports = {
  prefix: ["!tarout"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

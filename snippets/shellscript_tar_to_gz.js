/**
 * @author
 * @file shellscript_tar.js
 * @fileBase shellscript_tar
 * @path snippets\shellscript_tar.js
 * @from 
 * @desc 这是 压缩成 * tar.gz
 * @todo

 *
 * @done
 * @example
 */
// https://www.cnblogs.com/jyaray/archive/2011/04/30/2033362.html
// tart -zcvf 目标名称 源文件
const body = `
$now = \${1:$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND}
tar -zcvf target.tar.gz \${2:./*} 
`;
const description = `此为压缩

-f <filename>  后加 filename
-z 压缩 采用 gz
-j 压缩 采用 bz2
-c: 建立压缩档案（.tar)
-v 显示所有过程

-x 解压
-O 解开到标准输出
`;

module.exports = {
  prefix: ["!tar","!gz"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

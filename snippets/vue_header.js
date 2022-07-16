const body = `
 <!--
  * @file \${1:该文件的描述信息}
  * @Date $CURRENT_YEAR年$CURRENT_MONTH月$CURRENT_DATE日 $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND
  * TODO
  * [] \${2}
  * @example
  * 
-->
`;
const description = "";

module.exports = {
  prefix: ["!vh"],
  type: ["vue"],
  description: description || body,
  body: body.trim(),
};

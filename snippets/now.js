const body = `"$CURRENT_YEAR年$CURRENT_MONTH月$CURRENT_DATE日 $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND"`;

module.exports = {
  prefix: ["now"],
  // 这种通用的或许全部平台都可以加一个（或许要制定一个 type：all 的命令
  type: ["javascript", "typescript", "java", "vue",'markdown'],
  body,
  description: "当前时间",
};

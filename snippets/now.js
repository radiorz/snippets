const body = `"$CURRENT_YEAR年$CURRENT_MONTH月$CURRENT_DATE日 $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND"`;

module.exports = {
  prefix: ["now", "!now"],
  type: ["javascript", "typescript", "java", "vue"],
  body,
  description: "当前时间",
};

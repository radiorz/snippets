const body = `"$CURRENT_YEAR年$CURRENT_MONTH月$CURRENT_DATE日 $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND"`;

module.exports = {
  prefix: ["now"],
  type: "javascript",
  body,
  description: "当前时间",
};

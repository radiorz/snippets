const body = `"$CURRENT_YEAR.$CURRENT_MONTH.$CURRENT_DATE"`;

module.exports = {
  prefix: ["!tv"],
  type: ["javascript", "typescript", "java", "vue"],
  body,
  description: "今天日期",
};


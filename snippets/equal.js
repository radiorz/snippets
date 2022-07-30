// 似乎不起作用。。。
const body = `===`;
const description = "";

module.exports = {
  prefix: ["equal"],
  disabled: true, // not working 没什么用
  type: ["javascript", "typescript", "vue"],
  description: description || body,
  body: body.trim(),
};

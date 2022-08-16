const body = `set \${1:property}() {
  $2
}`;
const description = "class 中的 set";

module.exports = {
  disabled: true, // JavaScript snippets 中有了
  prefix: ["set"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

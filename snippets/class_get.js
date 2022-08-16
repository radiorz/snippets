const body = `get \${1:property}() {
  return $2
}`;
const description = "class 中的 get";

module.exports = {
  disabled: true, // JavaScript snippets 中有了
  prefix: ["get"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};


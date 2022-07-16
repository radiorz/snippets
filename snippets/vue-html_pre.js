const body = `<pre style=\"color:red\"> {{\${1:\`注意了\`}}} </pre>`;
const description = "";

module.exports = {
  prefix: ["rrr"],
  type: ["vue-html"],
  description: description || body,
  body: body.trim(),
};

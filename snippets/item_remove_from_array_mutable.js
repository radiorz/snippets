const body = `
  const index = \${1:arr}.findIndex((item)=>{item.\${2:id}===\${2:id}})
  \${1:arr}.splice(index, 1)
`;
const description = "";

module.exports = {
  prefix: ["airm", "item_remove_from_array_mutable"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

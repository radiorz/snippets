const body = `
  \${1:arr} = \${1:arr}.filter((item)=>\${2:item.id === id})
`;
const description = "";

module.exports = {
  prefix: ["ari","item_remove_from_array_immutable"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};


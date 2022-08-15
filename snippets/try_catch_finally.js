const body = `
try {
  
} catch (err) {
  console.log('err',err)
} finally {
  
}
`;
const description = "";

module.exports = {
  disabled: true, // javscript snippets 已经有了
  prefix: ["tcf"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

const body = `
const \${1:func} =  () =>{
  $1
}
`;
const description = "";

module.exports = {
  prefix: ["!funa"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

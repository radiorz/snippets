const body = `
async function \${1:myFunc}(){
  $2
}
`;
const description = "";

module.exports = {
  prefix: ["async", "!async"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

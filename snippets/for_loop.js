const body = `
for(;;){
  $1
}
`;
const description = "";

module.exports = {
  prefix: ["!for"],
  type: ["javascript", "typescript", "c", "cpp"],
  description: description || body,
  body: body.trim(),
};

const body = `
it("\${1:description}",()=>{
  
})
`;
const description = "";

module.exports = {
  prefix: ["!test", "it", "test", "!it"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

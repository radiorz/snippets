const body = `
.then(()=>{

})
.catch(()=>{})
`;
const description = "";

module.exports = {
  prefix: [".thencatch"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

const body = `
return {
  $1
}
`
const description = "";

module.exports = {
  prefix: ["!return_object",'rr'],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

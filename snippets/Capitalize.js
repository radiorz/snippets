const body = `
function capitalize(str){
  const [first,...rest] = str
  if(!first) return ''
  return first.toUpperCase()+ rest.join('').toLowerCase()
}
`
const description = "";

module.exports = {
  prefix: ["Capitalize"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

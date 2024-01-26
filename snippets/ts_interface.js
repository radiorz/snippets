const body = `
export interface $1 {
  
}
`
const description = "";

module.exports = {
  prefix: ["!interface"],
  type: ["typescript"],
  description: description || body,
  body: body.trim(),
};

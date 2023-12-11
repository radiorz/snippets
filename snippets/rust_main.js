const body = `
fn main () {
  $1
}
`
const description = "";

module.exports = {
  prefix: ["!main"],
  type: ["rust"],
  description: description || body,
  body: body.trim(),
};

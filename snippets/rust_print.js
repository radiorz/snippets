const body = `
println!("$1 {}", $1);
`
const description = "";

module.exports = {
  prefix: ["logg","print"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

const body = `
println!("$1 {}", $1);
`
const description = "";

module.exports = {
  prefix: ["logg","!print","csl"],
  type: ["rust"],
  description: description || body,
  body: body.trim(),
};

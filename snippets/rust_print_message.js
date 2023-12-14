const body = `
println!("$1");
`;
const description = "";

module.exports = {
  prefix: ["logm", "!printm"],
  type: ["rust"],
  description: description || body,
  body: body.trim(),
};

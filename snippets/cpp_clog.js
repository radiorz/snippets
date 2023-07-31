const body = `
clog << "$1 "<< \${1:0} << endl;
`;
const description = "";

module.exports = {
  prefix: ["clog", "log", "csl"],
  type: ["cpp"],
  description: description || body,
  body: body.trim(),
};

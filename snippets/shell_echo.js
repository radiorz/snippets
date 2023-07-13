const body = `
echo -e "$1\n";
`;
const description = "";

module.exports = {
  prefix: ["!echo"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

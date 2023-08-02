const body = `
printf("$1 %\${2:d}\\n",$1);
`;
const description = "";

module.exports = {
  prefix: ["printf"],
  type: ["c"],
  description: description || body,
  body: body.trim(),
};

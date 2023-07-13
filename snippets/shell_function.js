const body = `
\${1:functionName}(){
  \${2:echo -e "hello\\n"}
}
`;
const description = "";

module.exports = {
  prefix: ["!fun"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

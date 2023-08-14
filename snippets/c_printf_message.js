const body = `
printf(\"$1\\n");
`;
const description = "";

module.exports = {
  prefix: ["printfm","printm"],
  type: ["c"],
  description: description || body,
  body: body.trim(),
};

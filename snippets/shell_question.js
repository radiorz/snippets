const body = `
echo -e "请输入: "
read -r answer
`;
const description = "";

module.exports = {
  prefix: ["!question"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

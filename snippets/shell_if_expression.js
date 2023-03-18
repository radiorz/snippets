const body = `
# 判断
if [ \${1:true} ]
then
    \${2:echo "123"}
fi
`;
const description = "";

module.exports = {
  prefix: ["!if"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

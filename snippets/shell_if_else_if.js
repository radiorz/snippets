const body = `
if [ \${1:true} ]
then
   echo "true"
elif [ \${2:true} ]
then
   echo "second true"
else
   echo "default"
fi
`;
const description = "";

module.exports = {
  prefix: ["!ifif"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

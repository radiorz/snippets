const body = `
if \${1:true}; then
   \${2:echo "true"}
else 
   \${2:echo "false"}
fi
`;
const description = "";

module.exports = {
  prefix: ["!elseif","!ife"],
  type: ["shellscript"],
  description: description || body,
  body: body.trim(),
};

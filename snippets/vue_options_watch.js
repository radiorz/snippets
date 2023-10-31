const body = `
"\${1:value}": {
  handler(newVal,oldVal) {
    console.log(\`\${1:value}\`,'newVal=',newVal,'oldVal=',oldVal);
  },
  // deep: true,
  // immediate: true
},
`;
const description = "";

module.exports = {
  prefix: ["!watch"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

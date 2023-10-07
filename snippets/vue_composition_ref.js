const body = `
const \${1:value} = ref(\${2: 0})
`;
const description = "";

module.exports = {
  prefix: ["!ref"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

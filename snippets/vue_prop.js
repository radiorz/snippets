const body = `
  \${1:value}: {
    type: \${2: String},
    // default: ()=> '',
    // required: true,
    // validator() { return  }
  },
`
const description = "";

module.exports = {
  prefix: ["!prop"],
  type: ["javascript",'typescript'],
  description: description || body,
  body: body.trim(),
};

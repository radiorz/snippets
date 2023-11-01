const body = `

    "\${1:value}":{
      "name": "\${1:value}",
      "type": "\${2:string}",
    }

`;
const description = "";

module.exports = {
  prefix: ["!properties"],
  type: ["javascript", "json", "jsonc"],
  description: description || body,
  body: body.trim(),
};

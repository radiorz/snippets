const body = `
  setup(props,ctx){
    $1
    return {
      $2
    }
  },
`
const description = "";

module.exports = {
  prefix: ["!setup"],
  type: ["javascript",'typescript'],
  description: description || body,
  body: body.trim(),
};

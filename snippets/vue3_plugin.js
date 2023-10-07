const body = `
export default {
  install(app,options){
    app.config.globalProperties.$\${1:plugin} = $2
    app.provide('\${1:plugin}',$2)
  }
}
`;
const description = "";

module.exports = {
  prefix: ["!plugin"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};

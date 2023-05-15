const { origin: file_header } = require("./file_header");
const { origin: file_name } = require("./file_name");
const body = `
${file_header}
import { defineStore } from 'pinia'

const use\${1:${file_name}}Store = defineStore('\${1:${file_name}}',{
  state:()=>({
    value: 0
  }),
  // getters:{},
  actions: {
    setValue(){
    
    }
  }
})
export default use\${1:${file_name}}Store
`;
const description = "";

module.exports = {
  prefix: ["!pinia"],
  type: ["javascript", "typescript"],
  description: description || body,
  body: body.trim(),
};

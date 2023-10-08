// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
const body = `export default {
  // components: {},
  // filters:{},
  // props: {},
  // data(){
  //   return{
  //     
  //   }
  // },
  // computed:{},
  // watch:{},
  // created(){},
  // mounted(){},
  methods: {
    $1
  },
}`;
const description = "";

module.exports = {
  prefix: ["!mixin"],
  type: ["javascript", "typescript", "javascriptreact", "typescriptreact"],
  description: description || body,
  body,
};

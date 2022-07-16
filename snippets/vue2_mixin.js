// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
const body = `export default {
  // 组件名
  components: {},
  // filters:{},
  // mixins:[],
  // props: {},
  // data(){
  //   return{
  //     
  //   }
  // },
  // 组件方法
  // computed:{},
  // watch:{},
  // mounted(){},
  methods: {},
}`;
const description = "";

module.exports = {
  prefix: ["oef"],
  type: ["javascript", "typescript"],
  description: description || body,
  body,
};

const fileName = require("./file_name");
const vueHeader = require("./vue_header");

const body = `
${vueHeader.origin}
<template>
  <div>
  </div>
</template>

<script>
export default {
  // 组件名
  name: '\${1:${fileName.origin}}',
  components: {},
  // filters:{},
  // mixins:[],
  // props: {},
  data(){
    return{
      
    }
  },
  // 组件方法
  // computed:{},
  // watch:{},
  // created(){},
  methods: {},
}
</script> 

<style lang=\"scss\" scoped>

</style>
`;
const description = "vue2";

module.exports = {
  prefix: ["!v2"],
  type: ["vue"],
  description: description || body,
  body,
};

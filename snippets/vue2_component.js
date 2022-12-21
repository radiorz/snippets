const file_header = require("./file_header");
const vue_header = require("./vue_header");

const body = `
${vue_header.origin}
<template>
  <div>
  </div>
</template>

<script>
export default {
  // 组件名
  name: '\${2:${file_header.origin}}',
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
  prefix: ["!vue2"],
  type: ["vue"],
  description: description || body,
  body,
};

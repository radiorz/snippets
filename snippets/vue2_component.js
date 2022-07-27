const body = `
<!--
* @FileDescription: \${1:该文件的描述信息}
* @Date: $CURRENT_YEAR年$CURRENT_MONTH月$CURRENT_DATE日 $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND
* TODO:
* [] \${2}
-->

<template>
  <div>
  </div>
</template>

<script>
export default {
  // 组件名
  name: '\${2:Demo}',
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
`
const description = "vue2";

module.exports = {
  prefix: ["!vue2"],
  type: ["javascript", "typescript","javascriptreact"],
  description: description || body,
  body,
};

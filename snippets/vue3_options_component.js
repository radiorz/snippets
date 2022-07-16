const vueHeader = require("./vue_header");
const body = `
${vueHeader.origin}
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: '\${3:}',
  // components: {},
  props: {},
  // 从组件触发 emits 事件
  // emits:{},
  // 暴露
  // expose: {},
  data() {
    return {}
  }
  // computed:{},
  // watch:{},
  // create(){},
  // methods:{}
})
</script>

<template>
  <div class=\"\${3}\">
  </div>
</template>

<style lang=\"scss\" scoped></style>"
`;
const description = "";

module.exports = {
  prefix: ["!vueo"],
  type: ["vue"],
  description: description || body,
  body: body.trim(),
};

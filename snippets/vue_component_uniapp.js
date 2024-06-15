const { TYPES } = require("../src/common/consts/types");
const { origin: vueHeader } = require("./vue_header");
const { origin: fileName } = require("./file_name");

const body = `
${vueHeader}
<template>
    <view class=\"$2\"></view>
</template>
<script>
  export default {
    name: \"\${2:${fileName}}\",
    data(){
      return {}  
    },
    onLoad(){},
    methods:{
      getItems(){}
    }
  }
</script>
<style>

</style>
`;
const description = "";

module.exports = {
  prefix: ["!uni"],
  type: [TYPES.vue],
  description: description || body,
  body: body.trim(),
};

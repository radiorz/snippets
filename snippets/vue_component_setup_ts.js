/**
 * @author
 * @file vue3_component.js
 * @fileBase vue3_component
 * @path snippets\vue3_component.js
 * @from 
 * @desc 
 * vue3 setup 通用组件格式
 * 名称跟随文件名
 * file header vue header 
 * @todo

 *
 * @done
 * @example
 */

const { origin: fileName } = require("./file_name");
const vueHeader = require("./vue_header");
const body = `
${vueHeader.origin}
<script lang="ts">
  export default {
    name: \"\${2:${fileName}}\"
  };
</script>
<script setup lang="ts">
  
</script>

<template>
  <div class=\"$2\">
    $2
  </div>
</template>

<style lang=\"scss\" scoped>

</style>
`;
const description = "";

module.exports = {
  prefix: ["!vue3t", "!setupTs"],
  type: ["vue"],
  description: description || body,
  body: body.trim(),
};

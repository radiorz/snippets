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
<script setup lang="ts">
defineOptions({
  name: \"\${2:${fileName}}\"
})
export interface Props {
  foo: string
}
const props = withDefaults(defineProps<Props>(),{
  foo: ''
})
export interface Emits {
  (e:'change', value: number): void
}
const emit = defineEmits<Emits>()
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
  prefix: ["!vue3t"],
  type: ["vue"],
  description: description || body,
  body: body.trim(),
};

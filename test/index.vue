<!--
 
/**
 * @author
 * @file index.vue
 * @fileBase index
 * @path test\index.vue
 * @from 
 * @desc 
 * @todo
 * 
 *
 * @done
 * @example
 */

-->

<script setup lang="ts">
defineOptions({
  name: "index",
});
export interface Props {
  foo: string;
}
const props = withDefaults(defineProps<Props>(), {
  foo: "",
});
const emits = defineEmits<{
  (event: "change"): void;
}>();
</script>

<template>
  <div class="index">index</div>
</template>

<style lang="scss" scoped></style>

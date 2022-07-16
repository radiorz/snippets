const vueHeader = require("./vue_header");
const body = `
${vueHeader.origin}
<script>
  export default {
    name: \"$2\"
  };
</script>
<script setup>

</script>

<template>
  <div class=\"$2\">
  </div>
</template>

<style lang=\"scss\" scoped>

</style>"
`;
const description = "";

module.exports = {
  prefix: ["!vue3"],
  type: ["vue"],
  description: description || body,
  body: body.trim(),
};

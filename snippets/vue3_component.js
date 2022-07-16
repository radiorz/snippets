const body = `
<!--
* @file: \${1:该文件的描述信息}
* @date: $CURRENT_YEAR年$CURRENT_MONTH月$CURRENT_DATE日 $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND
* TODO:
* [] \${3}
-->

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
`
const description = "";

module.exports = {
  prefix: ["!vue3"],
  type: ["vue"],
  description: description || body,
  body: body.trim(),
};

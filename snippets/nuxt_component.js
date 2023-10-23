const body = `
<script>
  export default {
    head(){

    }
  }
</script>

<template>
  <h1 >Hello \${}</h1>
</template>

<style>

</style>
`
const description = "";

module.exports = {
  prefix: ["!nuxt"],
  type: ["vue"],
  description: description || body,
  body: body.trim(),
};

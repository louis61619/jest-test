<template>
  <div class="text">
    <h2 style="width: 100px; height: 50px" class="title">{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Hello Jest'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text {
  .title {
    margin: auto;
  }
}
</style>

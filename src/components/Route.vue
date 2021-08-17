<template>
  <div>
    <p v-if="$route.query && $route.query.id">get detail</p>
    <p v-else>
      need passed id
      <router-link to="/home">返回</router-link>
      <button @click="btnClick">btn</button>
    </p>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   if (!this.$route.query.id) {
  //     this.$router.replace('/home')
  //   }
  // }
  // mounted() {
  //   if (!this.$route.query.id) {
  //     this.$router.go(0)
  //   }
  // }
  methods: {
    btnClick() {
      this.$router.replace('/home')
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <div v-if="age < 10">child person</div>
    <div>{{ msg }}</div>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'default msg'
    }
  },
  data() {
    return {
      age: 11
    }
  }
}
</script>

<template>
  <span>Count: {{ count }}</span>
  <button @click="count++">Click me</button>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)

    return {
      count
    }
  }
}
</script>

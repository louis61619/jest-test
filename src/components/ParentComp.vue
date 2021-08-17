<template>
  <div>
    <ChildComponent @btnEmits="onCustom" />
    <p v-if="emitted">Emitted!</p>
  </div>
</template>

<script>
import ChildComponent from './ChildComp.vue'

export default {
  name: 'ParentComponent',
  components: { ChildComponent },
  data() {
    return {
      emitted: false
    }
  },
  methods: {
    onCustom() {
      this.emitted = true
    }
  }
}
</script>

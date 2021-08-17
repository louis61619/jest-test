<template>
  <div>
    <button @click="btnClick">btn</button>
  </div>
</template>

<script>
export default {
  emits: ['btnEmits'],
  setup(props, { emit }) {
    const btnClick = () => {
      emit('btnEmits')
    }
    return {
      btnClick
    }
  }
}
</script>

<style lang="scss" scoped></style>

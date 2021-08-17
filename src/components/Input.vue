<template>
  <div>
    <input v-model="radio" type="radio" :value="true" />
    <select v-model="select">
      <option :value="1">option1</option>
      <option :value="2">option2</option>
    </select>
    <input v-model="txt" type="text" />
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      foo: '',
      radio: false,
      select: '',
      txt: ''
    }
  }
}
</script>

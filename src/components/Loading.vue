<template>
  <div v-show="showLoading" class="loading-box">
    {{ loadingText }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingText: '',
      showLoading: false
    }
  },
  methods: {
    show() {
      this.showLoading = true
      this.getLoadingText()
    },
    hide() {
      this.showLoading = false
      this.getLoadingText()
    },
    // 私有方法 通常不會為其撰寫測試用例
    getLoadingText() {
      this.loadingText = this.showLoading ? `loading show text` : ''
    }
  }
}
</script>

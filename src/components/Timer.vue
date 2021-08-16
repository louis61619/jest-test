<template>
  <div class="hello">
    {{ timeText }}<br />
    {{ percent }}
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      percent: 0,
      timeText: ''
    }
  },
  methods: {
    start() {
      this.percent = 0
      this.timer = setInterval(() => {
        this.percent++
        if (this.percent >= 100) {
          this.finish()
        }
      }, 100)
    },
    finish() {
      this.percent = 100
      clearInterval(this.timer)
    }
  },
  mounted() {
    setTimeout(() => {
      this.timeText = 'setTimeout text'
    }, 1000)
  }
}
</script>

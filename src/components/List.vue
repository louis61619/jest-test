<template>
  <ul>
    <li v-for="(item, index) in lessonList" :key="index" class="lesson-item">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import { getLessonList } from '@/api/api.js'
export default {
  data() {
    return {
      lessonList: []
    }
  },
  methods: {
    getLessonData() {
      getLessonList().then((res) => {
        const { status, data } = res
        if (status === 200) {
          this.lessonList = data.data
        }
      })
    }
  },
  mounted() {
    this.getLessonData()
  }
}
</script>

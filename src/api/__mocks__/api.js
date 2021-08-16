export const getLessonList = jest.fn(() => {
  const lessonResult = {
    success: true,
    data: [
      { id: 1, title: '深入理解ES6' },
      { id: 2, title: 'JavaScript高级程序设计' },
      { id: 3, title: 'CSS揭秘' },
      { id: 4, title: '深入浅出Vue.js' }
    ]
  }
  return Promise.resolve(lessonResult)
})

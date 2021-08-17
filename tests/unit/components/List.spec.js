import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { getLessonList } from '@/api/api.js'

jest.mock('@/api/api.js')

describe('HelloWorld.vue', () => {
  const lessonResult = {
    success: true,
    data: [
      { id: 1, title: '深入理解ES6' },
      { id: 2, title: 'JavaScript高级程序设计' },
      { id: 3, title: 'CSS揭秘' },
      { id: 4, title: '深入浅出Vue.js' }
    ]
  }

  // 測試數據正常返回
  it('mock http modules', async () => {
    // 確保某些非同步回調被調用
    expect.assertions(1)
    const result = await getLessonList()
    // toEqual遞歸比較原始值
    expect(result).toEqual(lessonResult)
  })

  // 測是正確渲染 使用.mockResolvedValueOnce()來模擬數據
  it('render mock http module result', async () => {
    const mockAxiosResult = {
      status: 200,
      data: lessonResult
    }
    getLessonList.mockResolvedValueOnce(mockAxiosResult)
    const wrapper = shallowMount(HelloWorld)
    await wrapper.vm.$nextTick()
    const lessonItems = wrapper.findAll('.lesson-item')
    const lessonList = lessonResult.data
    for (let i = 0; i < lessonItems.length; i++) {
      const item = lessonItems.at(i)
      expect(item.text()).toBe(lessonList[i].title)
    }
  })
})

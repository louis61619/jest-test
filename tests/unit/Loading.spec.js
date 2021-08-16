import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/loading.vue'

describe('loading.vue', () => {
  let wrapper

  // beforeEach是jest提供的勾子函數 會在執行測試用例前調用 可避免多個用例相互影響
  beforeEach(() => {
    wrapper = shallowMount(Loading)
  })
  it('show func', async () => {
    expect(wrapper.vm.loadingText).toBe('')
    expect(wrapper.vm.showLoading).toBe(false)
    // isVisible判斷元素是否可見
    expect(wrapper.isVisible()).toBe(false)

    wrapper.vm.show()
    // 調用nextTick以確保組件在最新狀態
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.showLoading).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
  })

  it('hide func', async () => {
    wrapper.setData({
      showLoading: true
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.showLoading).toBe(true)
    expect(wrapper.isVisible()).toBe(true)

    wrapper.vm.hide()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.showLoading).toBe(false)
    expect(wrapper.isVisible()).toBe(false)
  })
})

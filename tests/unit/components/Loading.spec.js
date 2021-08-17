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
    // 手動修改data中的值
    wrapper.vm.showLoading = true
    // wrapper.setData({
    //   showLoading: true
    // })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.showLoading).toBe(true)
    expect(wrapper.isVisible()).toBe(true)

    // 調用組件內的hide方法
    // wrapper.vm.hide()
    // await wrapper.vm.$nextTick()
    await wrapper.vm.hide()
    expect(wrapper.vm.showLoading).toBe(false)
    expect(wrapper.isVisible()).toBe(false)
  })
})

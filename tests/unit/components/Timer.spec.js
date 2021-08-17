import { shallowMount } from '@vue/test-utils'
import Timer from '@/components/Timer.vue'

describe('Timer.vue', () => {
  let wrapper
  beforeEach(() => {
    // 當這個方法被調用時 jest提供的假定時器將取代原生的定時器api
    jest.useFakeTimers()
    wrapper = shallowMount(Timer)
  })

  it('test setTimeout async timer', () => {
    expect(wrapper.vm.timeText).toBe('')
    // 定時器向前一秒
    jest.runTimersToTime(1000)
    expect(wrapper.vm.timeText).toBe('setTimeout text')
  })

  it('test setInterval async timer', () => {
    expect(wrapper.vm.percent).toBe(0)

    // 調用組件內部方法
    wrapper.vm.start()
    jest.runTimersToTime(100)
    expect(wrapper.vm.percent).toBe(1)
    jest.runTimersToTime(900)
    expect(wrapper.vm.percent).toBe(10)
    jest.runTimersToTime(2000)
    expect(wrapper.vm.percent).toBe(30)
  })

  // 測試clearInterval有被執行
  // 當有不可控制的api時，可以使用spyOn來偽裝
  it('clearInterval success when percent >= 100', () => {
    // 用jest提供的方法偽照clearInterval
    jest.spyOn(window, 'clearInterval')
    // mockReturnValue 可用來模擬返回值
    setInterval.mockReturnValue(996)
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(wrapper.vm.percent).toBe(100)
    expect(window.clearInterval).toHaveBeenCalledWith(996)
  })
})

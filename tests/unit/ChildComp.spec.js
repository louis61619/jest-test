import { shallowMount } from '@vue/test-utils'
import ChildComp from '@/components/ChildComp.vue'

describe('ChildComp.vue', () => {
  it('test emit', () => {
    const wrapper = shallowMount(ChildComp)

    wrapper.vm.$emit('btnEmits', 10)
    const emitted = wrapper.emitted()
    // 判斷事件是否正常發送
    expect(emitted['btnEmits']).toBeTruthy()
    // 判斷參數是否有正常傳遞
    expect(emitted['btnEmits'][0]).toEqual([10])
  })
})

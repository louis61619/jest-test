import { mount, flushPromises } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComp.vue'
import ChildComponent from '@/components/ChildComp.vue'

describe('ParentComponent', () => {
  it("displays 'Emitted!' when custom event is emitted", async () => {
    const wrapper = mount(ParentComponent)
    // 可以透過findComponent直接找到對應的子組件
    const button = wrapper.findComponent(ChildComponent)
    button.vm.$emit('btnEmits')
    // await wrapper.vm.$nextTick()
    await flushPromises()
    expect(wrapper.html()).toContain('Emitted!')
  })
})

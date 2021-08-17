import { shallowMount } from '@vue/test-utils'
import WithSlot from '@/components/WithSlot.vue'

describe('WithSlot.vue', () => {
  it('test with slot', () => {
    const headerSlot = '<div class="header">Header</div>'
    // const headerSlot = {
    //   template: `<div>header slot</div>`
    // }
    const wrapper = shallowMount(WithSlot, {
      slots: {
        header: headerSlot
      }
    })
    expect(wrapper.find('.header-slot').html()).toContain(headerSlot)
  })
})

import { shallowMount } from '@vue/test-utils'
import Count from '@/components/Count.vue'

describe('Count.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Count)
  })

  it('test count click', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('span').text()).toBe('Count: 1')
  })
})

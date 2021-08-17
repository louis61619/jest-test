import { shallowMount } from '@vue/test-utils'
import Input from '@/components/Input.vue'

describe('Input.vue', () => {
  it('test radio', () => {
    const wrapper = shallowMount(Input)

    // 測試radio
    const radioInput = wrapper.find('input[type="radio"]')
    radioInput.setValue(true)
    expect(wrapper.vm.radio).toBe(true)

    // 測試select
    const options = wrapper.find('select')
    options.setValue(2)
    expect(wrapper.vm.select).toBe(2)

    const textInput = wrapper.find('input[type="text"]')
    textInput.setValue('Hello World')
    expect(wrapper.vm.txt).toBe('Hello World')
  })
})

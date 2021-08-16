import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
describe('HelloWorld.vue', () => {
  it('mount data', () => {
    const wrapper = shallowMount(HelloWorld, {
      data() {
        return {
          foo: 'foo override',
          baz: 'baz'
        }
      }
    })
    expect(wrapper.vm.foo).toBe('foo override')
    expect(wrapper.vm.baz).toBe('baz')
  })
})

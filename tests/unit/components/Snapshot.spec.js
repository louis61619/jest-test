import { shallowMount } from '@vue/test-utils'
import Snapshot from '@/components/Snapshot.vue'

// npm run test:unit -- -u 進行批量快照更新
// npm run test:unit -- --watch 進行交互式更新

describe('Snapshot.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Snapshot)
  })
  it('match msg snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('match age snapshot', async () => {
    await wrapper.setData({
      age: 6
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

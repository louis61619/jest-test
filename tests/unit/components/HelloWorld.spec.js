import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// 測試組件渲染輸出

describe('HelloWorld.vue', () => {
  // shallowMount和mount都是模擬掛載組件的函數的
  // 唯一差別是shallowMount只會掛載子組件的根
  it('test shallowMount', () => {
    const wrapper = shallowMount(HelloWorld)
    // 判斷組件是否掛載
    expect(wrapper.exists()).toBe(true)
    // 訪問組件實例
    console.log(wrapper.vm)
  })

  it('test mount', () => {
    const wrapper = mount(HelloWorld)
    // 判斷組件是否掛載
    expect(wrapper.exists()).toBe(true)
  })

  it('test text', () => {
    const msg = 'Hello Jest'
    const wrapper = shallowMount(HelloWorld)
    // text函數從組件中返回文本  更推薦使用toContain
    expect(wrapper.text()).toBe(msg) // 嚴格相等
    expect(wrapper.text()).toContain(msg) // 是否包含
  })

  it('test html', () => {
    const wrapper = shallowMount(HelloWorld)
    // html style最後都要加上分號
    expect(wrapper.html()).toContain(
      '<h2 style="width: 100px; height: 50px;" class="title">Hello Jest</h2>'
    )
  })

  it('test attribute and class', () => {
    const wrapper = shallowMount(HelloWorld)
    // 查找第一個h2標籤
    const dom = wrapper.find('h2')
    expect(dom.classes()).toContain('title')
    expect(dom.attributes().id).toBeFalsy()
  })

  it('test props', () => {
    const msg = 'Hello Props'
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg
      }
    })
    expect(wrapper.props('msg')).toBe(msg)
  })

  it('test style', () => {
    const wrapper = shallowMount(HelloWorld)
    const style = wrapper.find('h2').element.style
    expect(style.width).toBe('100px')
    expect(style.height).toBe('50px')
  })
})

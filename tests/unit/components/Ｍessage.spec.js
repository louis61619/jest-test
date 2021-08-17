import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('message.vue', () => {
  it('add mocks', async () => {
    const message = {
      success: jest.fn(),
      warning: jest.fn(),
      error: jest.fn(),
      info: jest.fn()
    }

    // 使用global.mocks模擬全局api
    const wrapper = shallowMount(Message, {
      global: {
        mocks: {
          $message: message
        }
      }
    })
    const successBtn = wrapper.find('#success')
    const warningBtn = wrapper.find('#warning')
    const errorBtn = wrapper.find('#error')
    const infoBtn = wrapper.find('#info')

    await successBtn.trigger('click')
    // toHaveBeenCalledTimes 檢查函數調用次數
    expect(message.success).toHaveBeenCalledTimes(1)

    await warningBtn.trigger('click')
    expect(message.warning).toHaveBeenCalledTimes(1)

    await errorBtn.trigger('click')
    expect(message.error).toHaveBeenCalledTimes(1)

    await infoBtn.trigger('click')
    expect(message.info).toHaveBeenCalledTimes(1)
  })
})

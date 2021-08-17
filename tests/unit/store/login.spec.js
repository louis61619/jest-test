import { createStore } from 'vuex'
import login from '@/store/login'

describe('test store', () => {
  const store = createStore(login)

  it('test login action', () => {
    const loginResult = {
      userInfo: { name: 'AAA', age: 23 },
      token: '123456'
    }
    expect(store.getters.token).toBe('')
    expect(store.getters.userInfo).toEqual({})

    store.dispatch('login', loginResult)
    expect(store.getters.token).toBe(loginResult.token)
    expect(store.getters.userInfo).toEqual(loginResult.userInfo)
  })
  it('test logout action', () => {
    store.dispatch('logout')
    expect(store.getters.token).toBe('')
    expect(store.getters.userInfo).toEqual({})
  })
})

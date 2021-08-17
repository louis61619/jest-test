import { createStore } from 'vuex'
import { mutations, getters, actions, storeConfig } from '@/store'

describe('mutations', () => {
  it('test setToken mutations', () => {
    const token = '123456'
    const state = {
      token: ''
    }
    mutations.setToken(state, token)
    expect(state.token).toBe(token)
  })
})

describe('getters', () => {
  it('test passList getters', () => {
    const students = [
      { name: 'AAA', score: 59 },
      { name: 'BBB', score: 70 },
      { name: 'CCC', score: 10 }
    ]
    const state = {
      students: students
    }
    const result = getters.passList(state)
    expect(result).toEqual([students[1]])
  })
})

describe('actions', () => {
  const loginResult = {
    userInfo: { name: 'AAA', age: 23 },
    token: '123456'
  }
  it('test login action', () => {
    expect.assertions(1)
    const context = {
      commit: jest.fn()
    }
    actions.login(context, loginResult)
    // context內部的方法被調用過setToken參數是loginResult.token
    expect(context.commit).toHaveBeenCalledWith('setToken', loginResult.token)
  })
})

test('increment updates state.count by 1', () => {
  const store = createStore(storeConfig)
  expect(store.state.count).toBe(0)

  store.commit('increment')
  expect(store.state.count).toBe(1)
})

test('increment updates state.count by 2', () => {
  const store = createStore(storeConfig)
  expect(store.state.count).toBe(0)

  store.commit('increment')
  store.commit('increment')
  expect(store.state.count).toBe(2)
})

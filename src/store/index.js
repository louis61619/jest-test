import { createStore } from 'vuex'
import login from './login'

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  increment(state) {
    state.count++
  }
}

export const getters = {
  passList(state) {
    return state.students.filter((stu) => stu.score >= 60)
  }
}

export const actions = {
  login({ commit }, { userInfo, token }) {
    commit('setUserInfo', userInfo)
    commit('setToken', token)
  }
}

export const storeConfig = {
  state: () => {
    return {
      name: 'Louis',
      count: 0
    }
  },
  mutations,
  getters,
  actions,
  modules: {
    login
  }
}

export default createStore(storeConfig)

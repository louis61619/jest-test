import { createStore } from 'vuex'

export const mutations = {
  setToken(state, token) {
    state.token = token
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

export default createStore({
  state: {
    name: 'Louis'
  },
  mutations,
  getters,
  actions,
  modules: {}
})

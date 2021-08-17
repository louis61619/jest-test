const state = () => ({
  token: '',
  userInfo: {}
})

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  login({ commit }, { token, userInfo }) {
    commit('SET_TOKEN', token)
    commit('SET_USER_INFO', userInfo)
  },
  logout({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_USER_INFO', {})
  }
}

const getters = {
  token(state) {
    return state.token
  },
  userInfo(state) {
    return state.userInfo
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}

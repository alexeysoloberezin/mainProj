export const state = () => ({
  user: {
    role: '',
    id: '1',
    email: 'alex@gmail.com',
    name: ''
  },
  token: '',
  users: [],
})
export const mutations = {
  user(state, val) {
    state.user = val;
  },
  userRole(state, val) {
    state.user.role = val;
  },
  users(state, val) {
    state.users = val;
  },
}

export const getters = {
  userName: state => {
    return state.user.name || state.user.email
  },
}


export const actions = {
  getInfo({commit}) {
    this.$axios.get('/user/info/')
      .then((res) => {
        commit('user', res.data)
      }).catch(() => {
      this.$toast.error('Get info failed')
    })
  },
  getUsers({commit}) {
    this.$axios.get('/user/all')
      .then((res) => {
        commit('users', res.data)
      }).catch(() => {
      this.$toast.error('Get users failed')
    })
  },

}

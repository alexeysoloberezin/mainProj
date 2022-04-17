export const state = () => ({
  // my info
  user: {
    role: '',
    id: '1',
    email: 'alex@gmail.com',
    name: ''
  },
  token: '',
  users: [],
  // other user
  otherUser: null
})
export const mutations = {
  user(state, val) {
    state.user = val;
  },
  otherUser(state, val) {
    state.otherUser = val;
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
  getInfo({commit}, params) {
    let url = '/user/info/'

    if (params?.id) {
      url = url + `?id=${params.id}`
    }

    return this.$axios.get(url)
      .then((res) => {
        commit(params?.id ? 'otherUser' : 'user', res.data)
        return Promise.resolve()
      }).catch(() => {
        this.$toast.error('Get info failed')
        return Promise.reject(new Error('Get info failed'))
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

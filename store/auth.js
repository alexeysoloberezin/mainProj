export const state = () => ({
  authToken: '',
  role: '',
})
export const mutations = {
  authToken(state, val) {
    if (val != null){
      localStorage.setItem("authToken", val);
      state.authToken = val;
    }
  },
  role(state, val) {
    if (val != null){
      localStorage.setItem("role", val);
      state.role = val;
    }
  },
  logout(state) {
    localStorage.removeItem("role");
    localStorage.removeItem("authToken");
    state.authToken = '';
    state.role = '';
  },
}



export const actions = {
  login({commit}, params) {
    this.$axios.post('/user/login', {
      email: params.email,
      password: params.password
    }).then(res => {
      if (res.data.token) {
        commit('authToken', res.data.token)
        commit('role', res.data.role)
        return Promise.resolve()
      } else {
        this.$toast.error('Login error')
      }
    }).catch(({response}) => {
      this.$toast.error(response.data.message)
    })
  },
  register({commit}, params) {
    this.$axios.post('/user/registration', {
      email: params.email,
      password: params.password
    }).then(res => {
      if (res.data.token) {
        commit('authToken', res.data.token)
        commit('role', res.data.role)
        return Promise.resolve()
      } else {
        this.$toast.error('Login error')
      }
    }).catch(({response}) => {
      this.$toast.error(response.data.message)
    })
  },
  check({commit}, params) {
    this.$axios.get('/user/auth').then(res => {
      if (res.data.token) {
        commit('authToken', res.data.token)
        commit('role', res.data.role)
        return Promise.resolve()
      } else {
        this.$toast.error('Login error')
      }
    })
  },
}

export const state = () => ({
  user: {
    role: '',
    id: '1',
    email: 'alex@gmail.com',
    name: ''
  },
  token: '',
})
export const mutations = {
  user(state, val) {
    state.user = val;
  },
  userRole(state, val) {
    state.user.role = val;
  },
}

export const getters = {
  userName: state => {
    return state.user.name || state.user.email
  },
}


export const actions = {
  getCategory({commit}) {

  },
}

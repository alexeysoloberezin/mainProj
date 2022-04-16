export const state = () => ({
  friends: []
})
export const mutations = {
  friends(state, val) {
    state.friends = val;
  },
}

export const actions = {
  getFriends({commit}) {
    return this.$axios.get('/friend/all')
      .then((res) => {
        commit('friends', res.data)
        return Promise.resolve()
      }).catch(() => {
      this.$toast.error('Get info failed')
    })
  },
  addFriend({commit}, params){
    return this.$axios.post('/friend/addFriend', {friendId: params.id})
      .then((res) => {
        if (res.data.message === 'good'){
          return Promise.resolve()
        }else{
          return Promise.reject(new Error('Add friend error'))
        }
      }).catch(() => {
        this.$toast.error('Get users failed')
      })
  },
  removeFriend({commit}, params){
    return this.$axios.post('/friend/removeFriend', {friendId: params.id})
      .then((res) => {
        if (res.data.message === 'good'){
          return Promise.resolve()
        }else{
          return Promise.reject(new Error('Add friend error'))
        }
      }).catch(() => {
        this.$toast.error('Get users failed')
      })
  },
}

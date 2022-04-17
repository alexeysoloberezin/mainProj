export const state = () => ({
  activeUser: null,
  messages: [],
})
export const mutations = {
  activeUser(state, val) {
    state.activeUser = val;
  },
  messages(state, val) {
    state.messages = val;
  },
}

export const actions = {
  getMessages({commit}, params) {
    return this.$axios.get(`/chat/messages/?room=${params.room}`)
      .then((res) => {
        return Promise.resolve(res.data)
      }).catch(() => {
        this.$toast.error('Get messages failed')
        return Promise.reject(new Error('Get messages failed'))
      })
  },
  addMessage({commit}, params) {
    return this.$axios.post('/chat/addMessage', {
      message: params.message,
      room: params.room,
      userId: params.userId
    })
      .then((res) => {
        return Promise.resolve(res.data)
      }).catch(() => {
        this.$toast.error('Add message failed')
      })
  }
}

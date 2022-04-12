export const state = () => ({
  searchText: '',
  showNotification: false,
  notifications: [
    // {
    //   text: '123'
    // }
  ]
})
export const mutations = {
  showNotification(state, val) {
    state.showNotification = val;
  },
  notifications(state, val) {
    state.searchText = val;
  },
  searchText(state, val) {
    state.searchText = val;
  },
}
export const getters = {
  searchText: state => state.searchText,
  blockListActiveItem: state => state.blockListActiveItem,
}

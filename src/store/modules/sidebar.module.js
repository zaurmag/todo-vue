export default {
  namespaced: true,
  state () {
    return {
      sidebar: false,
      currentSidebarID: null
    }
  },
  mutations: {
    open (state, id) {
      state.sidebar = id === state.currentSidebarID ? !state.sidebar : true
      state.currentSidebarID = id
    },
    close (state) {
      state.sidebar = false
    }
  },
  getters: {
    sidebar: state => state.sidebar,
    sidebarCurrentTaskID: state => state.currentSidebarID
  }
}

export default {
  state: {
    footerView: false
  },
  getters: {
    getFooterView: state => {
      return state.footerView
    }
  },
  mutations: {
    setFooterView(state, value) {
      state.footerView = value
    }
  }
}
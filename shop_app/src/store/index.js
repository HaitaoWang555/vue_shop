import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
  },
  actions: {

  }
})

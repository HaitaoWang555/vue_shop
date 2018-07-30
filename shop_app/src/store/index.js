import Vue from 'vue'
import Vuex from 'vuex'
import footerView from "./modules/footerView";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    footerView
  }
})

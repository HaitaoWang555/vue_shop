import Vue from 'vue'
import Vuex from 'vuex'
import footerView from "./modules/footerView"
import category from "./modules/category"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    footerView,
    category
  }
})
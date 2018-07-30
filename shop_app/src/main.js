import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import 'normalize.css'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'
import { Toast, Icon, Lazyload } from 'vant'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import fetch from './api/fetch.js'

NProgress.configure({ showSpinner: false })
Vue.use(Toast).use(Icon)
Vue.prototype.$NProgress = NProgress
Vue.use(Lazyload, {
  preLoad: 1,
  attempt: 1
})
Vue.prototype.$fetch = fetch
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.querySelector('#app').scrollTop = 0
  if (to.name) {
    document.title = to.meta.title
  }
  if (from.name) {
    store.commit('setFooterView', true)
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

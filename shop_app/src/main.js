import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'
import { Tab, Tabs, Toast, Icon, Swipe, SwipeItem, Lazyload, Tabbar, TabbarItem } from 'vant'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import fetch from './api/fetch.js'

NProgress.configure({ showSpinner: false })
Vue.use(Tab).use(Tabs).use(Toast).use(Icon).use(Swipe).use(SwipeItem).use(Lazyload).use(Tabbar).use(TabbarItem)
Vue.prototype.$NProgress = NProgress
Vue.prototype.$fetch = fetch
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

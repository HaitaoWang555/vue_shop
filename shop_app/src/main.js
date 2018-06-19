import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'
import { Tab, Tabs, Toast, Icon, Swipe, SwipeItem, Lazyload } from 'vant'

Vue.use(Tab).use(Tabs).use(Toast).use(Icon).use(Swipe).use(SwipeItem).use(Lazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

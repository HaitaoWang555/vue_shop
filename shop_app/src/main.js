import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/reset.css'
import './assets/fonts/iconfont.css'
import { Tab, Tabs, Toast } from 'vant'

Vue.use(Tab).use(Tabs)
Vue.use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

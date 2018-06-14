import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Category from './views/Category.vue'
import Cart from './views/Cart.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        index: 0
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        index: 1
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        index: 2
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        index: 3
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

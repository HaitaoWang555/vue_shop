import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Category from './views/Category.vue'
import Cart from './views/Cart.vue'
import User from './views/User.vue'
import Product from './views/Product.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页',
        index: 0
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        title: '分类页',
        index: 1
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        title: '购物车',
        index: 2
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        title: '个人中心',
        index: 3
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录页',
        index: 4
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,
      meta: {
        title: '产品页',
        index: 5
      }
    }
  ]
})

export default router

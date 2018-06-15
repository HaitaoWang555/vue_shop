import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Login = () => import('./views/Login.vue')
const Category = () => import('./views/Category.vue')
const Cart = () => import('./views/Cart.vue')
const User = () => import('./views/User.vue')

Vue.use(Router)

const router = new Router({
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
router.beforeEach((to, from, next) => {
  document.querySelector('#app').scrollTop = 0
  next()
})
export default router

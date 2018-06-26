import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Login = () => import('./views/Login.vue')
const Category = () => import('./views/Category.vue')
const Cart = () => import('./views/Cart.vue')
const User = () => import('./views/User.vue')
const Product = () => import('./views/Product.vue')

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
      component: Login,
      meta: {
        index: 4
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    }
  ]
})

export default router

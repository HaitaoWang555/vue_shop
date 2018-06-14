<template>
  <footer class="app-shell-footer app-bottom-navigator-wrapper">
    <div class="fill-height box-flex align-center">
      <router-link
        v-for="nav in navList"
        :key="nav.icon"
        class="flex"
        active-class="on"
        :to="{name: nav.link}">
        <van-icon :name=nav.icon />
        <span>{{nav.name}}</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
const navList = [
  {
    name: '首页',
    icon: 'wap-home',
    link: 'Home'
  },
  {
    name: '分类',
    icon: 'pending-orders',
    link: 'Category'
  },
  {
    name: '购物车',
    icon: 'cart',
    link: 'Cart'
  },
  {
    name: '我的',
    icon: 'contact',
    link: 'User'
  }
]
export default {
  data () {
    return {
      navList
    }
  }
}
</script>

<style scoped>
@import "css/footer.css";
</style>

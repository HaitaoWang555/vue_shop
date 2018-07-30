<template>
  <footer v-if="loading" class="app-shell-footer app-bottom-navigator-wrapper">
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
  },
  computed: {
    loading () {
      return this.$store.getters.getFooterView
    }
  }
}
</script>

<style scoped>
.app-shell-footer {
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
}
.app-bottom-navigator-wrapper {
  height: 52px;
  background: #fff;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
.fill-height {
  height: 100%;
}
.align-center {
  align-items: center;
}
.box-flex {
  display: flex;
}
.flex {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #999;
}
.flex i {
  font-size: 20px;
  margin-bottom: 8px;
}
.flex span {
  font-size: 12px;
}
.on {
  color: #ff6700;
}
</style>

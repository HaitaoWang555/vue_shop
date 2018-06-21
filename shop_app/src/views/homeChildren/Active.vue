/* 活动页vue组件 */
<template>
  <div class="active">
    <header>
      <img v-lazy="img"/>
    </header>
    <Tabbar :msg="tabList"/>
    <DividerLine bgColor="rgb(180, 53, 48)" />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
import DividerLine from '@/components/DividerLine.vue'
import axios from 'axios'
export default {
  name: 'active',
  components: {
    Tabbar,
    DividerLine
  },
  data () {
    return {
      img: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/07fb1c97a2f6613ae3ed5e09ca5fa0bb.jpg?thumb=1&w=720&h=360',
      tabList: null
    }
  },
  created () {
    this.getTabList()
  },
  methods: {
    getTabList () {
      axios.get('https://www.easy-mock.com/mock/5b28c7283f9f7c0b22426d96/vue_shop/tabbar-active').then((res) => {
        this.tabList = res.data.tabList
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.active {
  background-color: rgb(180, 53, 48);
}
header img{
  display: block;
  width: 100%;
}
</style>

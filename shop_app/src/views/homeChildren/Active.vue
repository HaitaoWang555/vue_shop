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
      img: '',
      tabList: null
    }
  },
  created () {
    this.activeActive()
  },
  methods: {
    activeActive () {
      this.getActive()
    },
    getActive () {
      axios.get('https://www.easy-mock.com/mock/5b28c7283f9f7c0b22426d96/vue_shop/active').then((res) => {
        this.img = res.data.img
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
  width: 100%;
}
</style>

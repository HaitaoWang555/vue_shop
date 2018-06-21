/* vue组件 */
<template>
  <div class="tv">
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
  name: 'tv',
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
    this.tvActive()
  },
  methods: {
    tvActive () {
      this.getTv()
    },
    getTv () {
      axios.get('https://www.easy-mock.com/mock/5b28c7283f9f7c0b22426d96/vue_shop/tv').then((res) => {
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
.tv {
  background-color: rgb(180, 53, 48);
}
header img{
  width: 100%;
}
</style>

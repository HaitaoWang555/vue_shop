/* 智能页vue组件 */
<template>
  <div class="intelligence">
    <Swiper :msg="swiperImages"/>
    <Tabbar :msg="tabList"/>
    <DividerLine bgColor="rgb(245, 245, 245)" />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import Tabbar from '@/components/Tabbar.vue'
import DividerLine from '@/components/DividerLine.vue'
import axios from 'axios'
export default {
  name: 'intelligence',
  components: {
    Swiper,
    Tabbar,
    DividerLine
  },
  data () {
    return {
      swiperImages: null,
      tabList: null
    }
  },
  created () {
    this.intelligenceActive()
  },
  methods: {
    intelligenceActive () {
      this.getSwipe()
    },
    getSwipe () {
      axios.get('https://www.easy-mock.com/mock/5b28c7283f9f7c0b22426d96/vue_shop/intelligence').then((res) => {
        this.swiperImages = res.data.swiperImages
        this.tabList = res.data.tabList
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
</style>

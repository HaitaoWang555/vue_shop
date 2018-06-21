/* 推荐页vue组件 */
<template>
  <div class="recommend">
    <Swiper :msg="swiperImages"/>
    <Tabbar :msg="tabList"/>
    <DividerLine bgColor="rgb(245, 245, 245)" />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import Tabbar from '@/components/Tabbar.vue'
import DividerLine from '@/components/DividerLine.vue'
export default {
  name: 'recommend',
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
    this.recommendActive()
  },
  methods: {
    recommendActive () {
      this.getRecommend()
    },
    getRecommend () {
      this.$fetch('recommend').then((res) => {
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

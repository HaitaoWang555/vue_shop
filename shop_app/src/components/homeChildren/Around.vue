/* vue组件 */
<template>
  <div class="around">
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
  name: 'around',
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
    this.aroundActive()
  },
  methods: {
    aroundActive () {
      this.getAround()
    },
    getAround () {
      this.$fetch('around').then((res) => {
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

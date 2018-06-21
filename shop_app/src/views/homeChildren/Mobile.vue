/* vue组件 */
<template>
  <div class="mobile">
    <Swiper :msg="swiperImages"/>
    <DividerLine bgColor="rgb(245, 245, 245)" />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import DividerLine from '@/components/DividerLine.vue'
export default {
  name: 'mobile',
  components: {
    Swiper,
    DividerLine
  },
  data () {
    return {
      swiperImages: null
    }
  },
  created () {
    this.recommendMobile()
  },
  methods: {
    recommendMobile () {
      this.getMobile()
    },
    getMobile () {
      this.$fetch('mobile').then((res) => {
        this.swiperImages = res.data.swiperImages
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
</style>

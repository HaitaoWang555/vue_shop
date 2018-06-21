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
import axios from 'axios'
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
      axios.get('https://www.easy-mock.com/mock/5b28c7283f9f7c0b22426d96/vue_shop/mobile').then((res) => {
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
